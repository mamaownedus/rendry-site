# Rendry — Chrome Web Store Listing

## Short Description (132 characters max)

Capture full-page screenshots as PNG, JPEG, or PDF. Privacy-first — no data leaves your browser. One click, zero config.

## Detailed Description

### Full-page screenshots, done right.

Rendry captures entire web pages as PNG, high-quality JPEG, or PDF files — no scrolling, no stitching by hand, no hassle. Click once, get a clean screenshot of the full page.

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
• Lightboxes
• Floating action buttons (e.g. "Book Now", "Back to top")
• Ad containers

Toggle noise removal on or off from the popup menu.

**Copy to Clipboard**
Flip the "Copy to clipboard" toggle in the popup (off by default) and every capture is also copied to your system clipboard as a PNG — paste straight into Slack, email, Notes, or any image-aware app. The file still downloads as usual.

**Export as PNG, JPEG, or PDF**
Choose your format:
• PNG — pixel-perfect image, ideal for sharing and editing
• JPEG — compact high-quality image, ideal for smaller files
• PDF — single-page document with metadata, great for archiving

**Built-in Screenshot Editor**
Every capture opens instantly in a local tab with our built-in editor. Crop, copy to clipboard, and export captures for free — no extra apps needed.

---

### Rendry Pro ($2/month)

Unlock the power tier for $2/month. Everything local-first, nothing sent anywhere but Stripe for billing:

• **WebP export** — compact files with modern image compression
• **Compression control** — pick from _Smaller files_, _Balanced_, _High quality_, or _Maximum quality_ presets, or fine-tune per export with a live file-size estimate. Applies to JPEG, WebP, and PDF
• **Custom filename templates** — `{domain}`, `{date}`, `{time}`, `{title}`, `{timestamp}`
• **Resolution control** — 0.5×, 1×, 2×, or 3× device pixel ratio
• **Multi-page PDF** — A4 or Letter page sizes (plus full-page default)
• **Editor markup tools** — draw arrows, boxes, shapes, text annotations, and blur sensitive regions (passwords, credit cards) directly in the editor
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
• clipboardWrite — copy captures to the clipboard when "Copy to clipboard" is on in the popup, or when you click Copy in the editor

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
