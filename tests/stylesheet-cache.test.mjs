import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import test from 'node:test';

const root = new URL('../', import.meta.url);

test('every public page bypasses the previously week-cached stylesheet URL', () => {
  const generations = new Set();
  for (const directory of ['', 'guides/', 'uses/']) {
    for (const name of readdirSync(new URL(directory, root)).filter((name) => name.endsWith('.html'))) {
      const page = `${directory}${name}`;
      const html = readFileSync(new URL(page, root), 'utf8');
      const href = html.match(/<link[^>]+href="([^"]*styles\.css[^"]*)"/)?.[1];
      assert.ok(href, `${page} must load the shared stylesheet`);
      const generation = new URL(href, 'https://rendry.app/').searchParams.get('v');
      assert.ok(generation, `${page} must bypass the old styles.css cache entry`);
      generations.add(generation);
    }
  }
  assert.equal(generations.size, 1, 'public pages use the same cache generation');
});

test('the mutable stylesheet revalidates on subsequent releases', () => {
  const headers = readFileSync(new URL('_headers', root), 'utf8');
  const stylesheetRule = headers.match(/^\/styles\.css\n((?:[ \t]+[^\n]*\n?)*)/m)?.[1];
  assert.ok(stylesheetRule, 'the shared stylesheet has an explicit cache rule');
  assert.match(stylesheetRule, /Cache-Control: public, max-age=0, must-revalidate/);
});
