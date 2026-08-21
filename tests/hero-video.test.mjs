import assert from 'node:assert/strict';
import { existsSync, readFileSync, statSync } from 'node:fs';
import test from 'node:test';

const root = new URL('../', import.meta.url);
const html = readFileSync(new URL('index.html', root), 'utf8');

test('hero uses an accessible lightweight product demo video', () => {
  assert.match(html, /<video[^>]+class="hero-demo-video"/);
  assert.match(html, /autoplay[^>]+muted[^>]+loop[^>]+playsinline/);
  assert.match(html, /poster="assets\/hero-demo-poster\.jpg"/);
  assert.match(html, /<source src="assets\/hero-demo\.webm" type="video\/webm">/);
  assert.match(html, /<source src="assets\/hero-demo\.mp4" type="video\/mp4">/);
  assert.match(html, /aria-label="Rendry captures, stitches, and redacts a full webpage"/);
});

test('hero demo media files exist and remain suitable for a landing page', () => {
  for (const file of ['hero-demo.webm', 'hero-demo.mp4', 'hero-demo-poster.jpg']) {
    const url = new URL(`assets/${file}`, root);
    assert.ok(existsSync(url), `${file} is missing`);
  }

  assert.ok(statSync(new URL('assets/hero-demo.webm', root)).size < 2_500_000);
  assert.ok(statSync(new URL('assets/hero-demo.mp4', root)).size < 3_500_000);
});

test('reduced motion visitors see the poster instead of autoplay animation', () => {
  const css = readFileSync(new URL('styles.css', root), 'utf8');
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)[\s\S]*\.hero-demo-video/);
});

test('the looping hero animation can be paused', () => {
  assert.match(html, /<button class="hero-demo-toggle"[^>]+aria-label="Pause hero animation"/);
  assert.match(html, /heroVideo\.pause\(\)/);
  assert.match(html, /heroVideo\.play\(\)/);
});
