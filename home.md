# home.html — Build Instructions

Source: Patience — file key `8UIk0zK5uac6BEVpmTBvLu`
Base frame size: **1920 x 1080** (px -> vw divides by 1920)
Base template: `basic-template.html` — content goes in `.main-container > .stage`

**STATUS: built (on-canvas content only)**

---

## Navigation

← from: `loading.html`. Back arrow → `index.html`
→ to: the five cards link to `define.html`, `when.html`, `rewards.html`, `why.html`, `how.html`

Frames `7:488` and `18:2044` are **one page in two states** of a Newton's-cradle
swing: in `7:488` the boy (left) is raised 15° and the girl hangs straight; in
`18:2044` the boy hangs straight and the girl is raised 15° the other way.
Both are one CSS keyframe loop (`cradle-boy` / `cradle-girl`).

---

## 0. Assets

### 0.1 — Images

| File | Layer / use | Natural px |
|---|---|---|
| `background.png` | `.page-bg` white (rect 7:489) | 1920x1080 |
| `home-bg.png` | Clouds + Lines + Grass + BACKGROUND, transparent | 1920x1080 |
| `1.png` | boy `B` / `BOY` (rope + head) | 281x739 |
| `face-blonde.png` | figure `1`, both face poses side by side (left \| right) | 484x1449 |
| `face-dog.png` | figure `2` | 560x1504 |
| `face-moustache.png` | figure `3` | 610x1471 |
| `face-pig.png` | figure `4` | 610x1471 |
| `face-cat.png` | figure `5` | 540x1484 |
| `7.png` | girl `G` / `GIRL` (rope + head) | 257x750 |
| `back.png` | back arrow, Layer 18:2047 | 55x55 |
| `stage-spacer.png` | transparent | 1920x1080 |

Missing: none for on-canvas content.

### 0.2 — Fonts

| Family | Used for | File in /fonts/ |
|---|---|---|
| Irish Grover | PATIENCE title | `IrishGrover-Regular.ttf` |
| Itim | question cards | `Itim-Regular.ttf` |
| Baloo 2 | E / H / G language pill | `Baloo2-Variable.ttf` |

---

## 1. Palette

```
--title-orange:  #f27100   PATIENCE
--title-shadow:  #414141   title text-shadow 3px 5px 0 (grey here, cream on index)
--card-fill:     #ffefd4   question card
--card-border:   #ffb2aa   question card border 6px
--accent-purple: #9274b7   language pill, back arrow
```

---

## 2. Structure

```
.main-container
└── .stage
    ├── img.stage-spacer
    ├── img.home-bg
    ├── a.back-btn
    ├── div.pendulum-item × 5   figure image + .question-card
    ├── img.cradle-boy          pivots from rope top
    ├── img.cradle-girl         pivots from rope top
    └── h1.home-title

Content extent: full frame y 0..1080 -> spacer 1920x1080
Figure images start above the frame (negative top) and are clipped by `.stage` overflow.
```

---

## 3. Frame 7-488 Guidelines — boy raised

  3- read frame 7:488 from figma mcp local server https://www.figma.com/design/8UIk0zK5uac6BEVpmTBvLu/Patience?node-id=7-488&m=dev
     for image reference use @assets/images/

    3.1- hanging figures `1`–`5` (left / top / width in % of stage width / 1080 height)
      3.1.1- `face-blonde.png` left `20.94%` (402px) top `-48.15%` (-520px) width `12.60%` (242px)
      3.1.2- `face-dog.png` left `31.61%` (607px) top `-53.24%` (-575px) width `14.58%` (280px)
      3.1.3- `face-moustache.png` left `43.13%` (828px) top `-50.19%` (-542px) width `15.89%` (305px)
      3.1.4- `face-pig.png` left `54.69%` (1050px) top `-49.17%` (-531px) width `15.89%` (305px)
      3.1.5- `face-cat.png` left `67.66%` (1299px) top `-37.50%` (-405px) width `12.92%` (248px)

    3.2- question cards (inside each figure, `position:absolute`, % of the figure)
      3.2.1- fill `#ffefd4`, border `0.3125vw` (6px) `#ffb2aa`, radius `2.2917vw` (44px)
      3.2.2- text Itim, black, centred; card 1 `2.0833vw` (40px), cards 2/4/5 `1.875vw` (36px), card 3 `1.6667vw` (32px); line-height 1.2 of size
      3.2.3- card 1 "What is Patience?" left `7.85%` width `84.30%` top `84.40%`
      3.2.4- card 2 "When do we get impatient?" left `13.57%` width `72.86%` top `85.44%`
      3.2.5- card 3 "What are the rewards of being patient?" left `16.72%` width `66.89%` top `84.57%`
      3.2.6- card 4 "Why do we get impatient?" left `16.72%` width `66.89%` top `84.02%`
      3.2.7- card 5 "How to be patient?" left `10.48%` width `79.03%` top `82.36%`

    3.3- boy `1.png`: left `8.125%` (156px) top 0 width `14.64%` (281px); rotated 15° about the rope top (`transform-origin: 50% -1.83%`)
    3.4- girl `7.png`: left `78.85%` (1514px) top 0 width `13.39%` (257px); straight, pivot `50% -1.13%`

    3.5- PATIENCE title: Irish Grover `10.4167vw`, line-height `12.5938vw`, `#f27100`, text-shadow `0.1563vw 0.2604vw 0 #414141`; left `27.29%`, top `6.02%`, width `45.42%`, centred; stacked above the ropes

    3.6- `.back-btn` left `3.5156%`, top `4.8611%`, width `2.8467%` → `index.html`

---

## 4. Frame 18-2044 Guidelines — girl raised

    4.1- same layout; boy straight (0°), girl rotated -15° about the same pivot
    4.2- figures 1–5: the faces turn left (frame 7:488) and right (frame 18:2044). Each figure is one sprite `face-<name>.png` (left pose | right pose side by side, built from the provided `2`–`6` and `m2`–`m6`, since removed); `face-turn` shifts it by -50% with `step-end` at 25% (boy hits) and back at 75% (girl hits), so nothing fades or hides
    4.2b- spring: after each hit (25% / 75%) figures 1–5 wobble ±0.3vw with damping over ~0.5s (`spring-hit`), rippling 0.04s per figure away from the hit side
    4.2c- the boy and girl also spring: after landing (boy 25%, girl 75%) no spring: they swing like a clock pendulum (sine ease-in on the way down, ease-out on the way up) and stop dead on impact
    4.2d- exit animation (click on a subpoint card, `home.js`): `.stage.is-leaving` — (1) heads glide to one common height (`exit-level` 0.15s; heads measured from the artwork, shifts under 30px), (2) every figure swings right 32deg (`exit-swing` 0.35s, from 0.1s) about a pivot the same distance above its own head, so all seven trace exactly the same arc, (3) from 0.3s they slide up and off the top (`exit-lift` 0.5s, cards travel with them) and the PATIENCE title slides up; the page opens after 0.9s
    4.3- loop: boy 15° → 0° (0–25%), girl 0° → -15° (25–45%), hold, girl back to 0° (55–75%), boy back to 15° (75–95%); 1.8s, infinite

---

## 5. Open questions

1. **Off-canvas layers not built** (parked beyond the frame edge — `figma-links.md` says ask first):
   - `VIDOS` video modal + `TITLE` pill "What is Patience?" (y -911 / -1056)
   - `TEXT BOX` "Patience is not how much we wait but our ability to keep a good attitude while waiting ." (y 1129)
   - `PG` "Pranam" panel with mascot (y 1308) and `HOME` button (y 2088)
   - `R NEVIGATION` arrows (y -620)
   They look like the click-through content for each card; tell me the trigger and I will build them.
2. Hindi / Gujarati card text — English fallback for now.
3. Card → page links are assumed (card order = topic order).
