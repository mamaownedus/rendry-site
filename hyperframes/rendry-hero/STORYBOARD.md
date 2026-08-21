# Rendry Hero Loop Storyboard

## Format

- 1280×816, 30 fps, 12 seconds, silent.
- One continuous product-demo composition; no title cards.
- The browser frame remains the persistent visual anchor.

## Beat 1 — Ready to capture (0.0–2.1s)

- The captured Rendry demo page is visible inside a Chromium frame.
- The extension popup enters from the upper right.
- Smart Redact is visibly enabled.
- Cursor glides to “Capture Full Page” and clicks.

## Beat 2 — Auto-scroll and stitch (2.1–5.7s)

- The popup recedes.
- A blue scan line moves through the viewport while the actual full-page screenshot scrolls from top through the sensitive console and toward the lower page.
- Three small capture-segment thumbnails stack along the right edge, then compress together into a single stitched-page indicator.

## Beat 3 — Editor and automatic redaction (5.7–9.1s)

- A restrained blur crossfade reveals the Rendry editor.
- The stitched page scales into the canvas.
- Blue detection outlines pulse over sample emails, cards, IDs, and API keys; each area becomes blurred in quick succession.
- A compact “12 sensitive items hidden locally” status chip confirms completion.

## Beat 4 — Manual selection and loop (9.1–12.0s)

- Cursor selects the rectangle tool and drags over the “Recent customers” section.
- A red rectangle draws around the selected area.
- The completed edited capture holds briefly.
- The browser surface fades to its opening state for a seamless replay.

## Asset Audit

| Asset | Source | Use |
|---|---|---|
| Full demo capture | `capture/screenshots/full-page.png` | scrolling capture and stitched editor canvas |
| Opening viewport | `capture/screenshots/full-page.png` | opening browser surface, clipped to the top of the page |
