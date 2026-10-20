// Prints a fingerprint of the Notion blog database: a hash of every entry's id
// and last-edited time. It changes whenever a post is added, edited, or
// removed, so the rebuild workflow can skip Netlify builds when nothing did.
import crypto from 'node:crypto';

const { NOTION_TOKEN, NOTION_DATABASE_ID } = process.env;
if (!NOTION_TOKEN || !NOTION_DATABASE_ID) {
  console.error('NOTION_TOKEN and NOTION_DATABASE_ID must be set.');
  process.exit(1);
}

async function notion(path, body) {
  const resp = await fetch(`https://api.notion.com/v1/${path}`, {
    method: body ? 'POST' : 'GET',
    headers: {
      Authorization: `Bearer ${NOTION_TOKEN}`,
      'Notion-Version': '2025-09-03',
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!resp.ok) throw new Error(`Notion ${path} failed: ${resp.status} ${await resp.text()}`);
  return resp.json();
}

const db = await notion(`databases/${NOTION_DATABASE_ID}`);
const dataSourceId = db.data_sources?.[0]?.id;
if (!dataSourceId) throw new Error('Could not resolve a data source for NOTION_DATABASE_ID.');

const entries = [];
let cursor;
do {
  const resp = await notion(`data_sources/${dataSourceId}/query`, {
    page_size: 100,
    ...(cursor && { start_cursor: cursor }),
  });
  for (const page of resp.results) entries.push(`${page.id}:${page.last_edited_time}`);
  cursor = resp.has_more ? resp.next_cursor : undefined;
} while (cursor);

entries.sort();
console.log(crypto.createHash('sha256').update(entries.join('\n')).digest('hex'));
