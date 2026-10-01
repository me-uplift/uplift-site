// Single source of truth for blog categories. Names must match the options in
// the Notion "Category" multi-select. Badge text colors are darkened shades of
// the brand gradient stops so they pass 4.5:1 on their tint.

export function slugify(str = '') {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export const CATEGORIES = [
  {
    name: 'Strategy & Brand',
    text: '#A24B3A',
    tint: 'rgba(232,153,138,0.20)',
    cover: 'linear-gradient(135deg, rgba(232,153,138,0.55), rgba(201,123,175,0.30))',
  },
  {
    name: 'Social Media',
    text: '#9A3F7E',
    tint: 'rgba(201,123,175,0.18)',
    cover: 'linear-gradient(135deg, rgba(201,123,175,0.50), rgba(155,112,192,0.30))',
  },
  {
    name: 'SEO & Web',
    text: '#6F3FA0',
    tint: 'rgba(155,112,192,0.16)',
    cover: 'linear-gradient(135deg, rgba(155,112,192,0.50), rgba(120,120,200,0.30))',
  },
  {
    name: 'Content & Email',
    text: '#444DA8',
    tint: 'rgba(120,120,200,0.16)',
    cover: 'linear-gradient(135deg, rgba(120,120,200,0.50), rgba(94,101,181,0.30))',
  },
].map((c) => ({ ...c, slug: slugify(c.name) }));

const byName = new Map(CATEGORIES.map((c) => [c.name, c]));

/** The category's { name, slug, text, tint, cover }, or undefined if it isn't one of ours. */
export function getCategory(name) {
  return byName.get(name);
}

export function categorySlug(name) {
  return getCategory(name)?.slug ?? slugify(name);
}

/** Inline CSS custom properties consumed by .cat and .cover-fallback in global.css. */
export function categoryStyle(name) {
  const c = getCategory(name);
  return c ? `--cat-text:${c.text};--cat-tint:${c.tint};--cat-cover:${c.cover}` : undefined;
}
