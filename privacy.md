# Rendry — Privacy Policy

**Effective date:** April 5, 2026
**Last updated:** April 19, 2026

---

## Overview

Rendry is a browser extension that captures full-page screenshots. It is designed with a local-first architecture: all capture and image processing happens entirely within your browser. Screenshots never leave your machine.

## Data Collection

**Rendry does not collect, transmit, or store any personal data.**

Specifically:

- No screenshots or captured images are sent to any server
- No browsing history, URLs, or page content is collected
- No analytics, telemetry, or usage tracking of any kind
- No cookies are read or written

## Optional Premium (Rendry Pro)

Rendry offers an optional paid upgrade ("Rendry Pro") for additional features. Payment processing is handled by **ExtensionPay** (extensionpay.com), which uses **Stripe** (stripe.com) as its payment processor.

**If you choose to upgrade**, the following applies:

- Your **email address** is collected by ExtensionPay to create your account and manage your subscription
- **Payment information** (card number, Apple Pay, or Google Pay) is processed by Stripe. Rendry never sees or stores your payment details.
- ExtensionPay stores your **subscription status** (active/inactive) to verify your license
- No browsing data, screenshots, or page content is ever sent to ExtensionPay or Stripe

**If you do not upgrade**, Rendry's free tier makes **zero network requests** and contacts no external services. The free tier works identically to a fully offline extension.

You can manage or cancel your subscription at any time through ExtensionPay's account portal.

## Data Storage

Rendry stores the following data locally using Chrome's `chrome.storage.sync` API:

- **Export format** (PNG or PDF)
- **Noise removal toggle** (on or off)
- **Premium license status** (cached locally to avoid unnecessary network checks)

These preferences sync across your Chrome browsers if you are signed into Chrome. No other data is stored locally.

## Permissions

Rendry requests only the minimum permissions required to function:

| Permission | Purpose |
|------------|---------|
| `activeTab` | Access the current page **only when you click the extension icon** or use the keyboard shortcut. No background access to any tab. |
| `scripting` | Inject the capture script into the current page to scroll and read page dimensions. |
| `downloads` | Save your screenshot to your Downloads folder. |
| `storage` | Store your format and noise removal preferences. |
| `offscreen` | Create a hidden document for canvas-based image stitching. Required by Chrome's Manifest V3 — service workers cannot access the DOM directly. |
| `clipboardWrite` | Copy a capture to the system clipboard **only when you click the Copy action** in the popup or the editor. Pro-only feature. |

Rendry does **not** request and will **never** request:

- `cookies`
- `history`
- `webNavigation`
- `<all_urls>` or any host permissions
- Access to browsing data, bookmarks, or passwords

## Network Requests

Rendry's core capture functionality makes **zero network requests**. All image processing, stitching, and format conversion happen locally using browser APIs and a bundled PDF library (jsPDF).

The only network requests Rendry makes are for **premium license verification** via ExtensionPay. These requests send only your anonymous extension install ID and email (if you signed up for Pro) — never any page content, screenshots, or browsing data.

## Third-Party Libraries and Services

Rendry bundles one third-party library:

- **jsPDF** (MIT License) — used for PDF generation. Runs entirely in-browser. Makes no network requests.

Rendry integrates with two third-party services for optional premium payments only:

- **ExtensionPay** (extensionpay.com) — manages subscription accounts and license verification. [Privacy policy](https://extensionpay.com/privacy-policy)
- **Stripe** (stripe.com) — processes payments. [Privacy policy](https://stripe.com/privacy)

## Children's Privacy

Rendry does not collect any data from anyone, including children under 13.

## Changes to This Policy

If this policy changes, the updated version will be published with the extension update. The "Last updated" date at the top will reflect the most recent revision.

## Contact

For questions about this privacy policy or the extension:

- Email: mamaownedus@gmail.com

---

## See also

- [LISTING.md](LISTING.md) — Chrome Web Store listing copy
- [PROMOTIONAL_TEXT.md](PROMOTIONAL_TEXT.md) — promotional copy
- [../PAYMENT.md](../PAYMENT.md) — how subscription billing is handled (ExtensionPay / Stripe)
- [../README.md](../README.md) — extension overview
- [../HOWTO.md](../HOWTO.md) — install & usage guide
