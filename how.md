# how.html — Build Instructions

Source: no Figma frames of its own. Copy of the **define.html** design (frames `21:3212`, `21:5287`, `21:5569`) — see `define.md` for every measurement.
Base frame size: **1920 x 1080** (px -> vw divides by 1920)
Base template: `basic-template.html` — same shell as `define.html`

**STATUS: built**

---

## Topic

Topic **5** — "How to be patient?"
Images: `assets/images/5/1…4` (4 slides, 863x622)
All titles, captions, image names and Hindi / Gujarati text: `assets/js/data.js` (topic id 5).

## Navigation

← from: `home.html` (card 5) · home icon → `home.html`
→ to: the number circles 1–5 on the left link to the five topic pages

## Build

The page is the shared shell + `assets/js/topic.js`, which reads `<body data-topic="5">`, builds the title, 4 photo slides, 4 captions and the topic rail from `data.js`, then starts the two synced vertical Swipers. Styles: `assets/css/topic.css` (same as define).

## Open questions

1. Hindi / Gujarati text in `data.js` was written by Claude and needs a native review.
2. Captions were written from the pictures (no Figma text for this topic) and need a content review.
