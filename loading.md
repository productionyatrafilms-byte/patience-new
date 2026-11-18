# loading.html — Build Instructions

Source: Patience — file key `8UIk0zK5uac6BEVpmTBvLu`
Base frame size: **1920 x 1080** (px -> vw divides by 1920)
Base template: `basic-template.html` — content goes in `.main-container > .stage`

**STATUS: built**

---

## Navigation

← from: `index.html` (auto after bar hits 100%)
→ to: `home.html` (auto after ~3s). Back arrow → `index.html`

---

## 0. Assets

### 0.1 — Images

| File | Layer / use | Natural px |
|---|---|---|
| `back.png` | back arrow, Layer 3:2958 | 55x55 |
| `stage-spacer.png` | transparent | 1920x1080 |

Missing: none.

### 0.2 — Fonts

| Family | Used for | File in /fonts/ |
|---|---|---|
| Baloo 2 | E / H / G language pill | `Baloo2-Variable.ttf` |

---

## 1. Palette

```
--page-black:    #050505   page background
--block-grey:    #d0d0d0   loader squares
--accent-purple: #9274b7   language pill, back arrow
```

---

## 2. Structure

```
.main-container
└── .stage
    ├── img.stage-spacer
    ├── div.spinner            ring + dot, rotates
    ├── div.loader-blocks      8 squares, one lit at a time
    └── a.back-btn

Content extent: full frame y 0..1080 -> spacer 1920x1080
```

---

## 3. Frame 3-1418 Guidelines — loading

  3- read frame 3:1418 from figma mcp local server https://www.figma.com/design/8UIk0zK5uac6BEVpmTBvLu/Patience?node-id=3-1418&m=dev
     for image reference use @assets/images/

    3.1- load spinner (3:2218)
      3.1.1- width `13.74%` (263.84px), height auto (`aspect-ratio: 1`), **CSS only**: `conic-gradient` white → `#050505` clockwise from 12 o'clock, masked to a ring (hole at 76.5%)
      3.1.2- left `43.39%` (833.1px), top `35.93%` (388px)
      3.1.3- end-cap dot: CSS circle `#000`, width `11.63%` of spinner (30.68px), left `44.3%`, top 0
      3.1.4- the whole `.spinner` rotates 360deg, 1s linear infinite

    3.2- Llll loader squares (3:2814)
      3.2.1- left `43.70%` (839px), top `65.37%` (706px)
      3.2.2- 8 CSS squares (no images): `#d0d0d0`, width `1.0938vw` (21px), `aspect-ratio: 21 / 15`, gap `0.625vw` (12px)
      3.2.3- lit square opacity 1, others `0.14`; lit index advances every 150ms

    3.3- `.back-btn` left `3.5156%`, top `4.8611%`, width `2.8467%` → `index.html`

    3.4- language pill `#langSelect` — see `common.css`

---

## 4. Open questions

1. Figma shows only the first state (square 1 lit, ring static); rotation and square sequence speed are assumed.
2. Whether this screen should auto-advance to `home.html` and after how long (assumed 3s).
