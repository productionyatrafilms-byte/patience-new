# define.html — Build Instructions

Source: Patience — file key `8UIk0zK5uac6BEVpmTBvLu`
Base frame size: **1920 x 1080** (px -> vw divides by 1920)
Base template: `basic-template.html` — content goes in `.main-container > .stage`

**STATUS: built** — now data-driven: `assets/js/data.js` + `assets/js/topic.js` + `assets/css/topic.css` (shared with `when`, `rewards`, `why`, `how`)

---

## Navigation

← from: `home.html` (the "What is Patience?" card). `.home-btn` (house icon) → `home.html`
→ to: the number circles 1–5 link to `define.html`, `when.html`, `rewards.html`, `why.html`, `how.html`.

Frames `21:3212` (P1), `21:5287` (P1_2) and `21:5569` (P1_3) are **one page in three
states**: slide 1 / 2 / 3 of a vertical Swiper. The photo slider and the caption
slider move together (Swiper `controller`). Up arrow is faded on slide 1, down arrow
is faded on slide 3.

---

## 0. Assets

### 0.1 — Images

| File | Layer / use | Natural px |
|---|---|---|
| `background.png` | `.page-bg` white | 1920x1080 |
| `define-bg.png` | Clouds + Lines + Grass + BACKGROUND (clouds sit 30px lower than on home), transparent | 1920x1080 |
| `1/1.jpg`, `1/2.jpg`, `1/3.jpg` | slide photos for topic 1 (door, bus stop, bicycle), 1042x751 | 1042x751 |
| `nav-up.png` / `nav-down.png` | R NEVIGATION arrows, incl. shadow | 216x216 (2x of 108) |
| `home-icon.png` | Home 3:2906 | 120x108 (2x of 60x54) |
| `stage-spacer.png` | transparent | 1920x1080 |

Photos are the Figma strip images cropped to the 863x622 window (object-cover, offset 11px).
Missing: none.

### 0.2 — Fonts

| Family | Used for | File in /fonts/ |
|---|---|---|
| Irish Grover | title pill, rail numbers | `IrishGrover-Regular.ttf` |
| Itim | captions, topic labels | `Itim-Regular.ttf` |
| Baloo 2 | E / H / G pill | `Baloo2-Variable.ttf` |

The rail numbers use **Intro Rust** in Figma (not a free font); Irish Grover stands in.

---

## 1. Palette

```
--photo-border:  #fbc438   photo frame border 11px
--title-ink:     #1e1e1e   title pill text
--title-pill:    rgba(255,236,126,0.2) fill, #2e2e2c border 3px
--caption-fill:  rgba(217,217,217,0.2) fill, #000 border 2px
--rail-fill:     #fefdff   number circle (border #494949)
--rail-active:   #404040   active circle (border #a3a3a3, white number)
--nav-ink:       #494949   arrows
```

---

## 2. Structure

```
.main-container
└── .stage
    ├── img.stage-spacer
    ├── img.define-bg
    ├── a.home-btn
    ├── h1.define-title               pill
    ├── div.photo-frame               Swiper (vertical) + yellow border overlay
    ├── div.caption-box               Swiper (vertical, synced)
    ├── button.nav-btn.nav-up / .nav-down
    └── nav.topic-rail > button.topic-btn × 5   circle, expands on hover

Content extent: full frame y 0..1080 -> spacer 1920x1080
```

---

## 3. Frame 21-3212 Guidelines — slide 1

  3- read frame 21:3212 from figma mcp local server https://www.figma.com/design/8UIk0zK5uac6BEVpmTBvLu/Patience?node-id=21-3212&m=dev
     for image reference use @assets/images/

    3.1- TITLE pill: left `32.29%` (620px) top `5%` (54px) width `35.42%` (680px); fill, border `0.1563vw` (3px) `#2e2e2c`, radius `1.9271vw` (37px); text Irish Grover `3.3333vw` (64px) `#1e1e1e`, centred; pill height 119px from padding
    3.2- VIDEO frame: left `27.55%` (529px) top `18.43%` (199px) width `44.95%` (863px); radius `3.8542vw` (74px); border `0.5729vw` (11px) `#fbc438` drawn over the photo
      3.2.1- slides are the photos above, width 100%, height auto, vertical Swiper
    3.3- TEXT BOX caption pill: left `20.42%` (392px) top `78.61%` (849px) width `59.22%` (1137px); border `0.1042vw` `#000`, radius `4.2188vw` (81px); Itim `2.0833vw` (40px), line-height `2.5vw`, centred, two lines per caption (breaks kept)
      3.3.1- slide 1: "Patience is not how much we wait but our ability to keep a / good attitude while waiting ."
      3.3.2- slide 2: "Patience is the quality of being able to stay calm & not get / frustrated while we wait"
      3.3.3- slide 3: "Patience is when you are about to get mad but you choose to / understand"
    3.4- R NEVIGATION: `nav-up.png` left `76.3%` (1465px) top `36.67%` (396px); `nav-down.png` left `76.3%` top `54.07%` (584px); width `5.625%` (108px)
    3.5- Home: `home-icon.png` left `3.28%` (63px) top `4.35%` (47px) width `3.125%` (60px) → `home.html`
    3.6- topic rail: 5 circles, left `3.28%` (63px), tops 268 / 379 / 490 / 601 / 712 px, 100px; fill `#fefdff`, border `0.1042vw` `#494949`, shadow `0 0.2083vw 0.2083vw rgba(0,0,0,0.25)`; number Irish Grover `3.3333vw`
      3.6.1- circle 1 is active (`#404040`, white number)
      3.6.2- each button = Figma's circle drawn in CSS only (100px circle, `#fefdff` fill, `0.1042vw` `#494949` ring, soft shadow `0 0.2083vw 0.2083vw` — active: `#404040` fill, `#a3a3a3` ring) on top of the hidden "Rectangle 80" pill (white, border `0.1042vw` `#000`, radius `2.8385vw`, shadow). **On hover / focus** the pill slides out from behind the circle to the right and shows the subtopic name (Itim `1.25vw`): 1 What is Patience? · 2 When do we get impatient? · 3 What are the rewards of being patient? · 4 Why do we get impatient? · 5 How to be patient?

---

    3.7- entry animation (after the home exit): title pill drops in from above (0.9s), photo frame drops in from above (1s, 0.1s delay), caption pill rises from below (0.9s, 0.2s delay) — `enter-from-top` / `enter-from-bottom`

---

## 4. Frame 21-5287 Guidelines — slide 2

    4.1- same layout; photo `define-2.jpg`, caption 2; up arrow enabled

## 5. Frame 21-5569 Guidelines — slide 3

    5.1- same layout; photo `define-3.jpg`, caption 3; down arrow faded (`opacity 0.3`, no pointer)

    slider instructions
      first slide → `define-1.jpg` + caption 1
      down arrow → next slide, up arrow → previous slide; keyboard up/down also works

---

## 6. Open questions

1. The expanded state is not drawn in Figma (only the hidden pill + 12–15px label under each circle). The slide-out direction, label size (`1.25vw`) and speed (0.5s) are assumed.
2. Number font Intro Rust: waiting for the font file from you; Irish Grover is a stand-in (see `.topic-number` in define.css).
3. Pages for topics 2–5 are copies of this design (see `when.md` etc.).
4. Hindi / Gujarati text — English fallback.
5. Off-canvas layers not built: rotated cradle figures and a `PATIENCE` title parked above the frame (y -234 / -353).
