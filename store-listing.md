# Rendry — Chrome Web Store Listing

## Short Description (132 characters max)

Capture full-page screenshots as PNG or PDF. Privacy-first — no data leaves your browser. One click, zero config.

## Detailed Description

### Full-page screenshots, done right.

Rendry captures entire web pages as high-quality PNG or PDF files — no scrolling, no stitching by hand, no hassle. Click once, get a clean screenshot of the full page.

### Features

**One-Click Full-Page Capture**
Click the Rendry icon or press Alt+Shift+R to capture any web page from top to bottom. Rendry automatically scrolls, captures each section, and stitches them into a single seamless image.

**Smart Content Loading**
Rendry detects lazy-loaded images and triggers them before capture, so your screenshots include all content — not just placeholder images.

**Noise Removal**
Automatically hides distracting elements before capture:
• Cookie consent banners
• Chat widgets (Intercom, Drift, Crisp, and more)
• Popup overlays and modals
• Ad containers

Toggle noise removal on or off from the popup menu.

**Export as PNG or PDF**
Choose your format:
• PNG — pixel-perfect image, ideal for sharing and editing
• PDF — single-page document with metadata, great for archiving

---

### Rendry Pro ($2/month)

Unlock the power tier for $2/month. Everything local-first, nothing sent anywhere but Stripe for billing:

• **More export formats** — JPEG and WebP for smaller files
• **Custom filename templates** — `{domain}`, `{date}`, `{time}`, `{title}`, `{timestamp}`
• **Resolution control** — 0.5×, 1×, 2×, or 3× device pixel ratio
• **Multi-page PDF** — A4 or Letter page sizes (plus full-page default)
• **Built-in editor** — blur sensitive regions, crop, add arrows, shapes, and text annotations before saving
• **Copy to clipboard** — paste your capture straight into any app
• **Timed capture** — 3 / 5 / 10-second countdown for menus, hovers, and tooltips

Upgrade, manage, or cancel anytime from inside the extension popup. Billing is handled by ExtensionPay (powered by Stripe). See the [privacy policy](PRIVACY_POLICY.md) for what is and isn't collected.

---

**Infinite Scroll Detection**
Rendry detects infinite scroll pages (like social media feeds) and warns you before capture, preventing runaway captures that never end.

**Sticky Element Handling**
Headers and footers that follow you as you scroll? Rendry captures them once in their natural position, not repeated in every section.

### Privacy First

Rendry processes everything locally in your browser. Your screenshots never leave your machine.

• No server calls — ever
• No analytics or tracking
• No account required
• No data collection

We only request the minimum permissions needed:
• activeTab — access the current page only when you click
• scripting — inject the capture script into the current page
• downloads — save your screenshot file
• storage — remember your format preference
• offscreen — stitch images using a canvas (required by Chrome's Manifest V3)
• clipboardWrite — copy captures to the clipboard only when you click the Copy action (Pro)

### Keyboard Shortcut

Default: Alt+Shift+R (customizable in chrome://extensions/shortcuts)
Captures the full page with your last-used format — no popup needed.

---

## Category

Productivity

## Tags

screenshot, full page, capture, PNG, PDF, privacy, screen capture, web page

## Language

English

---

## See also

- [PRIVACY_POLICY.md](PRIVACY_POLICY.md) — full privacy policy
- [PROMOTIONAL_TEXT.md](PROMOTIONAL_TEXT.md) — promo tile / marquee / one-liner copy
- [../README.md](../README.md) — extension overview
- [../HOWTO.md](../HOWTO.md) — install & usage guide
- [../PAYMENT.md](../PAYMENT.md) — how Pro billing works
