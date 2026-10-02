import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const root = new URL('../', import.meta.url);
const hero = readFileSync(new URL('hyperframes/rendry-hero/index.html', root), 'utf8');

test('hero redaction masks are bounded and have one geometry owner', () => {
  assert.match(hero, /viewBox="0 0 1920 2185"/);
  assert.match(hero, /clipPath id="detected-ranges"/);
  assert.match(hero, /href="capture\/screenshots\/full-page\.png"/);
  assert.doesNotMatch(hero, /class="blur-box/);

  const clip = hero.match(/<clipPath id="detected-ranges">([\s\S]*?)<\/clipPath>/)?.[1] || '';
  const rects = [...clip.matchAll(/<rect x="(\d+)" y="(\d+)" width="(\d+)" height="(\d+)"/g)]
    .map(([, x, y, width, height]) => ({ x: +x, y: +y, width: +width, height: +height }));
  assert.equal(rects.length, 16, 'one bounded mask per detected sample value');
  for (const rect of rects) {
    assert.ok(rect.x >= 0 && rect.y >= 0 && rect.width > 0 && rect.height > 0);
    assert.ok(rect.x + rect.width <= 1920 && rect.y + rect.height <= 2185, 'mask stays inside source capture');
  }
  assert.match(hero, /document\.querySelectorAll\('#detected-ranges rect'\).*?detection-outline/s);
  assert.doesNotMatch(hero, /<g class="detection-outlines">\s*<rect/);
  assert.match(hero, /\.detection-outline \{ fill: none; stroke: #4A6CF7; stroke-width: 1/);
});

test('hero shows the actual count without covering the capture label', () => {
  assert.match(hero, /16 sensitive items redacted in this capture\./);
  const stitched = hero.match(/<div[^>]+class="stitched">([\s\S]*?)<\/div>\s*<div[^>]+class="redact-chip"/);
  assert.ok(stitched, 'status label is a workspace sibling, never painted over the capture');
  assert.match(hero, /\.redact-chip \{ position: absolute; left: 24px; bottom: 24px/);
  assert.match(hero, /y: 706, duration: 3\.1/);
});
