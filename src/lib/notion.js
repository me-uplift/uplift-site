import { Client } from '@notionhq/client';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { slugify, CATEGORIES, getCategory } from './categories.js';

export { slugify };

// Loads .env into process.env so this module works identically whether it's
// imported from Astro pages (Vite/Node) or from astro.config.mjs (plain
// Node, no Vite import.meta.env injection). No-op (caught) when a .env file
// isn't present, e.g. in CI where real env vars are already set.
try {
  process.loadEnvFile?.();
} catch {
  // ignore — rely on already-set process.env vars (CI, Netlify, etc.)
}

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const DATABASE_ID = process.env.NOTION_DATABASE_ID;

const IMAGE_DIR = path.join(process.cwd(), 'public', 'blog-images');
const IMAGE_URL_PREFIX = '/blog-images';

let client;
function getClient() {
  if (!NOTION_TOKEN) {
    throw new Error('NOTION_TOKEN is not set. Add it to your .env file.');
  }
  if (!client) client = new Client({ auth: NOTION_TOKEN });
  return client;
}

// The Notion API (2025-09-03+) queries "data sources" rather than databases
// directly; a database id must first be resolved to its data source id.
let dataSourceIdCache;
async function getDataSourceId() {
  if (dataSourceIdCache) return dataSourceIdCache;
  const notion = getClient();
  const db = await notion.databases.retrieve({ database_id: DATABASE_ID });
  const dataSourceId = db.data_sources?.[0]?.id;
  if (!dataSourceId) {
    throw new Error('Could not resolve a data source for NOTION_DATABASE_ID — check the id in .env.');
  }
  dataSourceIdCache = dataSourceId;
  return dataSourceId;
}

function plainText(richText = []) {
  return richText.map((t) => t.plain_text).join('');
}

function escapeHtml(str = '') {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function getStatusName(prop) {
  if (!prop) return undefined;
  if (prop.type === 'status') return prop.status?.name;
  if (prop.type === 'select') return prop.select?.name;
  return undefined;
}

function getFileObjectUrl(fileObj) {
  if (!fileObj) return undefined;
  return fileObj.type === 'external' ? fileObj.external?.url : fileObj.file?.url;
}

export function formatDate(dateStr) {
  if (!dateStr) return '';
  // Notion dates are plain YYYY-MM-DD; format in UTC so they don't shift a day in US time zones.
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

/**
 * Downloads a Notion-hosted (expiring) file to public/blog-images at build
 * time and returns the local, stable URL to use instead. External URLs are
 * left as-is since they don't expire.
 */
async function resolveImage(fileObj) {
  if (!fileObj) return undefined;
  const url = getFileObjectUrl(fileObj);
  if (!url) return undefined;
  if (fileObj.type !== 'file') return url;

  try {
    const cleanUrl = url.split('?')[0];
    const ext = path.extname(cleanUrl) || '.jpg';
    const hash = crypto.createHash('sha1').update(cleanUrl).digest('hex');
    const filename = `${hash}${ext}`;
    const localPath = path.join(IMAGE_DIR, filename);
    const publicUrl = `${IMAGE_URL_PREFIX}/${filename}`;

    if (fs.existsSync(localPath)) return publicUrl;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.mkdirSync(IMAGE_DIR, { recursive: true });
    fs.writeFileSync(localPath, buffer);
    return publicUrl;
  } catch (err) {
    console.warn(`[notion] Failed to download image, falling back to original URL: ${err.message}`);
    return url;
  }
}

const warnedCategories = new Set();

/** Keeps only categories defined in categories.js; unknown values are skipped with a warning. */
function normalizeCategories(options = [], postTitle = '') {
  return options
    .map((o) => o.name)
    .filter((name) => {
      if (getCategory(name)) return true;
      if (!warnedCategories.has(name)) {
        warnedCategories.add(name);
        console.warn(`[notion] Skipping unknown category "${name}" on "${postTitle}" — add it to src/lib/categories.js.`);
      }
      return false;
    });
}

function mapPageToPost(page) {
  const props = page.properties;
  return {
    id: page.id,
    title: plainText(props.Title?.title),
    slug: plainText(props.Slug?.rich_text).trim(),
    date: props.Date?.date?.start,
    updated: props.Updated?.date?.start,
    excerpt: plainText(props.Excerpt?.rich_text),
    tags: (props.Tags?.multi_select || []).map((t) => t.name),
    categories: normalizeCategories(props.Category?.multi_select, plainText(props.Title?.title)),
    status: getStatusName(props.Status),
    coverFile: props.Cover?.files?.[0],
    ogImageFile: props['OG Image']?.files?.[0],
    author: plainText(props.Author?.rich_text),
    canonicalUrl: props['Canonical URL']?.url || undefined,
    featured: props.Featured?.checkbox ?? false,
    focusKeyword: plainText(props['Focus Keyword']?.rich_text),
    noindex: props.Noindex?.checkbox ?? false,
    readingTime: props['Reading Time']?.number ?? undefined,
    seoDescription: plainText(props['SEO Description']?.rich_text),
    seoTitle: plainText(props['SEO Title']?.rich_text),
  };
}

let postsCache;

/** Fetches every entry from the database, newest Date first. */
async function getAllPages() {
  const notion = getClient();
  const dataSourceId = await getDataSourceId();
  const results = [];
  let cursor;
  do {
    const resp = await notion.dataSources.query({
      data_source_id: dataSourceId,
      start_cursor: cursor,
    });
    results.push(...resp.results);
    cursor = resp.has_more ? resp.next_cursor : undefined;
  } while (cursor);
  return results;
}

/** Published posts only, with cover/OG images resolved to stable local URLs. */
export async function getPublishedPosts() {
  if (postsCache) return postsCache;

  const pages = await getAllPages();
  const mapped = pages.map(mapPageToPost).filter((p) => p.status === 'Published' && p.slug);

  const posts = await Promise.all(
    mapped.map(async (post) => {
      const [cover, ogImage] = await Promise.all([
        resolveImage(post.coverFile),
        resolveImage(post.ogImageFile),
      ]);
      const { coverFile, ogImageFile, ...rest } = post;
      return { ...rest, cover, ogImage };
    })
  );

  posts.sort((a, b) => new Date(b.date ?? 0) - new Date(a.date ?? 0));
  postsCache = posts;
  return posts;
}

export async function getPostBySlug(slug) {
  const posts = await getPublishedPosts();
  return posts.find((p) => p.slug === slug);
}

export async function getFeaturedPosts() {
  const posts = await getPublishedPosts();
  return posts.filter((p) => p.featured);
}

function collectTerms(posts, field) {
  const map = new Map();
  posts.forEach((post) => {
    post[field].forEach((name) => {
      const slug = slugify(name);
      if (!map.has(slug)) map.set(slug, { name, slug, count: 0 });
      map.get(slug).count++;
    });
  });
  return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
}

/** Every defined category in canonical order (including empty ones), with post counts. */
export async function getCategories() {
  const posts = await getPublishedPosts();
  return CATEGORIES.map((c) => ({
    ...c,
    count: posts.filter((p) => p.categories.includes(c.name)).length,
  }));
}

/** Up to `limit` other posts: ones sharing a category first, then newest. */
export async function getRelatedPosts(post, limit = 3) {
  const posts = await getPublishedPosts();
  const shares = (p) => p.categories.some((c) => post.categories.includes(c));
  return posts
    .filter((p) => p.id !== post.id)
    .map((p, i) => ({ p, i, rank: shares(p) ? 0 : 1 }))
    .sort((a, b) => a.rank - b.rank || a.i - b.i)
    .map(({ p }) => p)
    .slice(0, limit);
}

export async function getTags() {
  const posts = await getPublishedPosts();
  return collectTerms(posts, 'tags');
}

async function fetchBlockChildren(blockId) {
  const notion = getClient();
  const children = [];
  let cursor;
  do {
    const resp = await notion.blocks.children.list({ block_id: blockId, start_cursor: cursor });
    children.push(...resp.results);
    cursor = resp.has_more ? resp.next_cursor : undefined;
  } while (cursor);

  for (const block of children) {
    if (block.has_children && block.type !== 'child_page') {
      block.children = await fetchBlockChildren(block.id);
    }
    if (block.type === 'image') {
      block.image.resolvedUrl = await resolveImage(block.image);
    }
  }
  return children;
}

export async function getPostBlocks(pageId) {
  return fetchBlockChildren(pageId);
}

function renderRichText(richText = []) {
  return richText
    .map((rt) => {
      let text = escapeHtml(rt.plain_text).replace(/\n/g, '<br>');
      const a = rt.annotations || {};
      if (a.code) text = `<code>${text}</code>`;
      if (a.bold) text = `<strong>${text}</strong>`;
      if (a.italic) text = `<em>${text}</em>`;
      if (a.strikethrough) text = `<s>${text}</s>`;
      if (a.underline) text = `<u>${text}</u>`;
      if (rt.href) text = `<a href="${rt.href}" target="_blank" rel="noopener">${text}</a>`;
      return text;
    })
    .join('');
}

function renderBlock(block) {
  switch (block.type) {
    case 'paragraph':
      return block.paragraph.rich_text.length ? `<p>${renderRichText(block.paragraph.rich_text)}</p>` : '';
    case 'heading_1':
      return `<h2>${renderRichText(block.heading_1.rich_text)}</h2>`;
    case 'heading_2':
      return `<h3>${renderRichText(block.heading_2.rich_text)}</h3>`;
    case 'heading_3':
      return `<h4>${renderRichText(block.heading_3.rich_text)}</h4>`;
    case 'quote':
      return `<blockquote>${renderRichText(block.quote.rich_text)}</blockquote>`;
    case 'code':
      return `<pre><code>${escapeHtml(plainText(block.code.rich_text))}</code></pre>`;
    case 'divider':
      return '<hr>';
    case 'to_do':
      return `<p class="post-todo"><input type="checkbox" disabled${block.to_do.checked ? ' checked' : ''}> ${renderRichText(block.to_do.rich_text)}</p>`;
    case 'image': {
      const caption = renderRichText(block.image.caption || []);
      const alt = caption.replace(/<[^>]+>/g, '');
      return `<figure class="post-image"><img src="${block.image.resolvedUrl}" alt="${alt}" loading="lazy">${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
    }
    case 'callout': {
      const emoji = block.callout.icon?.emoji || '';
      return `<div class="post-callout">${emoji ? `<span class="post-callout-icon">${emoji}</span>` : ''}<div>${renderRichText(block.callout.rich_text)}</div></div>`;
    }
    case 'bookmark':
      return `<a class="post-bookmark" href="${block.bookmark.url}" target="_blank" rel="noopener">${block.bookmark.url}</a>`;
    default:
      return '';
  }
}

/** Renders a block tree to HTML, grouping consecutive list items into <ul>/<ol>. */
export function renderBlocks(blocks) {
  let html = '';
  let i = 0;
  while (i < blocks.length) {
    const block = blocks[i];
    if (block.type === 'bulleted_list_item') {
      let items = '';
      while (i < blocks.length && blocks[i].type === 'bulleted_list_item') {
        const b = blocks[i];
        items += `<li>${renderRichText(b.bulleted_list_item.rich_text)}${b.children ? renderBlocks(b.children) : ''}</li>`;
        i++;
      }
      html += `<ul>${items}</ul>`;
      continue;
    }
    if (block.type === 'numbered_list_item') {
      let items = '';
      while (i < blocks.length && blocks[i].type === 'numbered_list_item') {
        const b = blocks[i];
        items += `<li>${renderRichText(b.numbered_list_item.rich_text)}${b.children ? renderBlocks(b.children) : ''}</li>`;
        i++;
      }
      html += `<ol>${items}</ol>`;
      continue;
    }
    html += renderBlock(block);
    i++;
  }
  return html;
}
