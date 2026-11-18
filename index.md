# index.html — Build Instructions

Source: Patience — file key `8UIk0zK5uac6BEVpmTBvLu`
Base frame size: **1920 x 1080** (px -> vw divides by 1920)
Base template: `basic-template.html` — content goes in `.main-container > .stage`

**STATUS: built**

---

## Navigation

← from: none (entry page). Back arrow (`.back-btn`, only visible at 100%) → `index.html` (restart)
→ to: `loading.html` (auto, 1s after the bar reaches 100%)

Frames `1:2` (0%) and `3:2470` (100%) are **one page in two states**. The bar fills
0 → 100 in JS (`assets/js/index.js`); at 100 the `.is-complete` class is added to
`.stage`, which reveals the back arrow and swaps the percent label width.

---

## 0. Assets

### 0.1 — Images

| File | Layer / use | Natural px |
|---|---|---|
| `landing-bg.png` | BACKGROUND swirls 3:500 + star group 3:505, transparent | 1920x1080 |
| `character.png` | mascot `charecter` 1:4 | 394x427 |
| `back.png` | back arrow, Layer 3:2958 (100% state only) | 55x55 |
| `stage-spacer.png` | transparent, 1920x1080 | 1920x1080 |

Missing: none. `landing-bg.png`, segment PNGs rasterised from the Figma SVG layers.

### 0.2 — Fonts

| Family | Used for | File in /fonts/ |
|---|---|---|
| Irish Grover | title, "Loading....", percent | `IrishGrover-Regular.ttf` |
| Baloo 2 (stands in for retired Baloo) | E / H / G language pill | `Baloo2-Variable.ttf` |

---

## 1. Palette

```
--page-purple:   #372750   page background (rect 1:3)
--title-orange:  #f27100   PATIENCE title
--title-shadow:  #ffdc90   title text-shadow 3px 5px 0
--loading-cream: #fffcd7   "Loading...." text
--accent-purple: #9274b7   bar border, language pill, back arrow
--bar-green:     #35e86b   filled bar segments
--white:         #ffffff   bar track, percent text
```

---

## 2. Structure

```
.main-container
└── .stage
    ├── img.stage-spacer        1920x1080
    ├── img.landing-bg
    ├── img.landing-mascot
    ├── h1.landing-title
    ├── p.landing-status        "Loading...."
    ├── div.progress            bar + percent
    └── a.back-btn              hidden until 100%

Content extent: full frame y 0..1080 (artwork is full-bleed) -> spacer 1920x1080
Vertical % measured from y=0.
```

---

## 3. Frame 1-2 Guidelines — 0% state

  3- read frame 1:2 from figma mcp local server https://www.figma.com/design/8UIk0zK5uac6BEVpmTBvLu/Patience?node-id=1-2&m=dev
     for image reference use @assets/images/

    3.1- landing-bg — full-bleed
      3.1.1- width `100%`, height auto, `landing-bg.png`, left 0 top 0

    3.2- charecter — centred mascot
      3.2.1- width `20.52%` (394px), height auto, `character.png`
      3.2.2- left `39.74%` (763px), top `31.02%` (335px)

    3.3- PATIENCE title
      3.3.1- font Irish Grover `10.4167vw` (200px), line-height `12.5938vw` (241.8px), color `#f27100`, text-shadow `0.1563vw 0.2604vw 0 #ffdc90`
      3.3.2- box left `27.29%` (524px), top `6.02%` (65px), width `45.42%` (872px), centred

    3.4- Loading.... status
      3.4.0- shaky effect: `loading-shake` 0.6s linear infinite, ±0.06vw / ±0.35deg jitter
      3.4.1- font Irish Grover `3.3333vw` (64px), line-height `4.0313vw`, color `#fffcd7`, centred on x 960, text centre y 906.5

    3.5- Loading component (bar + percent)
      3.5.1- left `29.69%` (570px), top `69.81%` (754px), width `40.68%` (781px)
      3.5.2- track: white, border `0.2083vw` (4px) `#9274b7`, radius `1.0417vw` (20px), width `86.68%` of component (677px)
      3.5.3- 10 CSS segments (no images): `#35e86b`, width `2.9167vw` (56px), `aspect-ratio: 56 / 79`, gap `0.5208vw` (10px), padding `0.3646vw 0.4688vw 0.4167vw`, first has left radius `0.3646vw`, last has right radius `0.4688vw`, hidden until filled
      3.5.4- percent label "0%": Irish Grover `3.3333vw`, white, centre x 96.93% of component, centre y 50%

    3.6- language pill `#langSelect` — see `common.css` (top `2.396vw`, right `3.542vw`)

---

## 4. Frame 3-2470 Guidelines — 100% state

    4.1- same layout; all 10 segments `#35e86b`; label "100%"
    4.2- `.back-btn` visible: left `3.5156%`, top `4.8611%`, width `2.8467%`, `back.png`
    4.3- on click of `.back-btn` → `index.html`

---

## 5. Open questions

1. Hindi / Gujarati text for the title and "Loading...." — currently English fallback.
2. Figma has no readable prototype link; flow index → loading → home is assumed.
3. The star `motion` twinkle in Figma is not reproduced (stars are baked into `landing-bg.png`).
