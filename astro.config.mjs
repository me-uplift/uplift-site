// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { getPublishedPosts, slugify } from './src/lib/notion.js';
import { categorySlug } from './src/lib/categories.js';

const SITE_URL = 'https://upliftdigital.studio';

let noindexPaths = new Set();
// Sitemap URL -> last-modified date. Posts use their Updated (or publish) date;
// listing pages use the newest date among the posts they show.
const lastmodByUrl = new Map();
try {
  const posts = await getPublishedPosts();
  noindexPaths = new Set(
    posts.filter((p) => p.noindex).map((p) => `${SITE_URL}/blog/${p.slug}/`)
  );

  const bump = (url, date) => {
    if (!date) return;
    const prev = lastmodByUrl.get(url);
    if (!prev || new Date(date) > new Date(prev)) lastmodByUrl.set(url, date);
  };
  for (const post of posts) {
    if (post.noindex) continue;
    const modified = post.updated || post.date;
    bump(`${SITE_URL}/blog/${post.slug}/`, modified);
    bump(`${SITE_URL}/blog/`, modified);
    for (const c of post.categories) bump(`${SITE_URL}/blog/category/${categorySlug(c)}/`, modified);
    for (const t of post.tags) bump(`${SITE_URL}/blog/tag/${slugify(t)}/`, modified);
  }
} catch (err) {
  console.warn(`[sitemap] Could not fetch Notion posts for noindex filtering and lastmod: ${err.message}`);
}

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap({
      filter: (page) => !noindexPaths.has(page),
      serialize(item) {
        const lastmod = lastmodByUrl.get(item.url);
        if (lastmod) item.lastmod = new Date(lastmod).toISOString();
        return item;
      },
    }),
  ],
});
