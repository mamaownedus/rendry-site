# Rendry Hero Demo Design

## Overview

Rendry uses a dark, local-first SaaS visual language with a crisp browser-extension surface. The captured demo page pairs a near-black page with a white support-console panel so sensitive sample data is immediately legible. The hero animation should feel like the real product working, not a cinematic advertisement.

## Colors

- **Page Surface**: `#080B11` — primary site and workspace background.
- **Deep Surface**: `#040609` — browser and editor surround.
- **Panel Surface**: `#0F1624` — extension popup and elevated controls.
- **Primary Content**: `#F8FAFC` — high-contrast UI text.
- **Muted Content**: `#94A3B8` — secondary labels.
- **Rendry Blue**: `#4A6CF7` — capture actions and active controls.
- **Rendry Blue Deep**: `#3553DB` — text-bearing blue controls requiring stronger contrast.
- **Success**: `#10B981` — Smart Redact completion.
- **Selection Red**: `#EF4444` — manual annotation rectangle.
- **Capture Paper**: `#FFFFFF` — demo support-console screenshot.

## Typography

- **Primary**: Plus Jakarta Sans, weights 400–800. Used for product UI, labels, and status text.
- **Data**: system monospace for API keys and technical values.
- UI labels remain compact, while rendered status callouts use 20px or larger for video legibility.

## Elevation

Use 1px white borders at low opacity, deep soft shadows, and restrained blue bloom. The captured page stays flat and paper-like inside the dark editor so redactions and selections remain the focal point.

## Components

- **Chromium Browser Frame**: three window controls, centered address bar, and Rendry extension action.
- **Rendry Capture Popup**: format selector, Smart Redact toggle, and primary full-page capture button.
- **Scrolling Capture Viewport**: the actual captured `/demo.html` page moving behind a scan line.
- **Rendry Editor Toolbar**: selection, crop, blur, annotation, zoom, and export controls.
- **Stitched Page Canvas**: a full-page capture presented on the editor workspace.
- **Smart Redact Overlays**: blurred blocks with thin blue detection outlines.
- **Manual Selection Rectangle**: red box drawn around an additional area.

## Do's and Don'ts

### Do's

- Match the current site palette and extension mockup closely.
- Make the page scroll and stitch operation obvious without explanatory narration.
- Keep motion controlled, technical, and readable at hero size.
- End on a frame that can blend cleanly back into the opening browser view.

### Don'ts

- Do not add voiceover, music, large marketing copy, or decorative scene changes.
- Do not invent controls that imply unsupported product behavior.
- Do not use neon-heavy effects or full-screen gradients.
- Do not expose real personal data; only the existing generated demo values may appear.
