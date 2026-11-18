# Figma Frame Links

## Base frame width

1920

<!-- The Figma frame's width in px. Every px -> vw conversion divides by this.
     Get it wrong and the whole page mis-scales. Usually 1440 or 1920. -->

## Frame Index

## index.html

| Frame   | Node ID        | Figma Link                                                                        |
| ------- | -------------- | --------------------------------------------------------------------------------- |
| landing | node-id=1-2    | https://www.figma.com/design/8UIk0zK5uac6BEVpmTBvLu/Patience?node-id=1-2&m=dev    |
| landing | node-id=3-2470 | https://www.figma.com/design/8UIk0zK5uac6BEVpmTBvLu/Patience?node-id=3-2470&m=dev |

## loading.html

| Frame   | Node ID        | Figma Link                                                                        |
| ------- | -------------- | --------------------------------------------------------------------------------- |
| loading | node-id=3-1418 | https://www.figma.com/design/8UIk0zK5uac6BEVpmTBvLu/Patience?node-id=3-1418&m=dev |

## home.html

| Frame | Node ID         | Figma Link                                                                         |
| ----- | --------------- | ---------------------------------------------------------------------------------- |
| home  | node-id=7-488   | https://www.figma.com/design/8UIk0zK5uac6BEVpmTBvLu/Patience?node-id=7-488&m=dev   |
| home  | node-id=18-2044 | https://www.figma.com/design/8UIk0zK5uac6BEVpmTBvLu/Patience?node-id=18-2044&m=dev |

## define.html

| Frame | Node ID         | Figma Link                                                                         |
| ----- | --------------- | ---------------------------------------------------------------------------------- |
| P1    | node-id=21-3212 | https://www.figma.com/design/8UIk0zK5uac6BEVpmTBvLu/Patience?node-id=21-3212&m=dev |
| P1_2  | node-id=21-5287 | https://www.figma.com/design/8UIk0zK5uac6BEVpmTBvLu/Patience?node-id=21-5287&m=dev |
| P1_3  | node-id=21-5569 | https://www.figma.com/design/8UIk0zK5uac6BEVpmTBvLu/Patience?node-id=21-5569&m=dev |
| b1    |                 | https://www.figma.com/design/8UIk0zK5uac6BEVpmTBvLu/Patience?node-id=33-5310&m=dev |
| b2    |                 | https://www.figma.com/design/8UIk0zK5uac6BEVpmTBvLu/Patience?node-id=33-5342&m=dev |

## when.html · rewards.html · why.html · how.html

No Figma frames: same design as `define.html`; content comes from `assets/js/data.js`.

<!-- One row per frame.
     Node ID must match the node-id in the URL — e.g. a link ending
     ?node-id=82-860 means the Node ID column reads node-id=82-860.
     Several frames can map to one HTML file when they are states of the
     same page (an intro that expands on click, for example).
     Add another "## [page].html" heading per page. -->

---

## How to Read Each Frame

For every frame listed above, read ALL of the following from the Figma MCP
local server using get_design_context / get_metadata:

- Layout & spacing — exact positions, padding, margin, gap, alignment
- Layer names — use as class names and image filenames
- Layer hierarchy — parent > child order must match in the HTML DOM
- Colors & gradients — exact hex/rgba values
- Typography — font family, size, weight, letter spacing, line height
- Images — read layer name, map to /assets/images/[layer-name].png
- Prototypes & interactions — every click, tap, hover action
- Navigation targets — which frame or page each interaction leads to
- Animations & transitions — type, duration, easing
- Overlays — position, backdrop, close behavior
- Scroll behavior — fixed, sticky, overflow settings
- Component states — default, hover, pressed, disabled
- Variants — all variant properties for each component
- Auto layout — direction, spacing, padding, fill/hug/fixed sizing
- Constraints — how layers scale or pin relative to parent

Note: layers at `opacity: 0` in a frame are usually that state's start/end
position for an animation, not separate elements. Check whether two frames are
two pages or one page in two states before building.

Note: a layer positioned beyond the frame edge (e.g. `left: 2063px` in a
1920-wide frame) is parked off-canvas. Ask before building it.

---

## Interaction Map

> Fill after reading Figma. Drives click events and navigation.

| Page    | Layer Name | Interaction            | Target       | Animation                           |
| ------- | ---------- | ---------------------- | ------------ | ----------------------------------- |
| index   | progress   | auto, 0 -> 100 in 3s   | loading.html | segments fill, % label counts up    |
| index   | back-btn   | click (visible at 100) | index.html   | none                                |
| loading | spinner    | auto, 3s               | home.html    | ring rotates, squares light in turn |
| loading | back-btn   | click                  | index.html   | none                                |
| home    | boy / girl | auto loop              | -            | Newton's-cradle swing, 4s           |
| home    | back-btn   | click                  | index.html   | none                                |
| home    | cards 1-5  | click                  | define / when / rewards / why / how .html | exit: figures swing right and lift off (assumed) |
| define  | arrow up / down | click, key up/down | previous / next slide | vertical Swiper, photo + caption together |
| define  | home icon  | click                  | home.html    | none                                |
| define  | circles 1-5 | hover                 | -            | circle widens to a pill showing the subtopic name |

Flow is assumed (no prototype data readable from Figma).

---

## Sliders

> Fill when a page has a slider. Swiper.js only.

| Page | Slider Layer | Slides (node ids) | Effect | Synced with |
| ---- | ------------ | ----------------- | ------ | ----------- |
| define | VIDOS photo strip | 21:3212 / 21:5287 / 21:5569 | vertical slide | caption slider (TEXT BOX) |

---

## Translations

> Figma usually carries English only. Every visible text node needs all three.

| Page  | English                                | Hindi (TODO)     | Gujarati (TODO)  |
| ----- | -------------------------------------- | ---------------- | ---------------- |
| index | PATIENCE                               | English fallback | English fallback |
| index | Loading....                            | English fallback | English fallback |
| home  | What is Patience?                      | English fallback | English fallback |
| home  | When do we get impatient?              | English fallback | English fallback |
| home  | What are the rewards of being patient? | English fallback | English fallback |
| home  | Why do we get impatient?               | English fallback | English fallback |
| home  | How to be patient?                     | English fallback | English fallback |
| home  | PATIENCE                               | English fallback | English fallback |
| define | What is Patience? (title) | English fallback | English fallback |
| define | 3 captions (slide 1-3) | English fallback | English fallback |
| define | 5 subtopic labels (= home card texts) | English fallback | English fallback |
