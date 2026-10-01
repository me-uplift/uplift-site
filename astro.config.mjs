// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { getPublishedPosts } from './src/lib/notion.js';

const SITE_URL = 'https://upliftdigital.studio';

let noindexPaths = new Set();
try {
  const posts = await getPublishedPosts();
  noindexPaths = new Set(
    posts.filter((p) => p.noindex).map((p) => `${SITE_URL}/blog/${p.slug}/`)
  );
} catch (err) {
  console.warn(`[sitemap] Could not fetch Notion posts to apply noindex filtering: ${err.message}`);
}

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap({
      filter: (page) => !noindexPaths.has(page),
    }),
  ],
});
