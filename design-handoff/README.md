# Handoff: Pía Vargas Portfolio — Full Site

**Date:** April 28, 2026
**Designer:** Pía Vargas (Paula Vargas)
**Designed by:** Claude (design prototype session)
**Fidelity:** High-fidelity

---

## Overview

A personal portfolio site for Pía Vargas, UX/UI Designer based in Switzerland. The site has four pages: Home, Case Studies (individual), About, and Disaster Drawer (personal work showcase). The design is editorial and typographically driven, with a clean-with-personality aesthetic — Bebas Neue headlines at real scale, Courier Prime for all functional labels, and DM Sans for body text. The red accent (#BB2F2E) is used sparingly and intentionally.

---

## About the Design Files

The files in this bundle are **design references created in HTML** — high-fidelity prototypes showing intended look, layout, typography, and interactions. They are not production code to copy directly.

The task is to **recreate these designs in the target codebase** (React + Vite, matching the existing `pia-portfolio/` source structure) using its established patterns. The prototype uses inline React styles for velocity; the production implementation should use the existing CSS module pattern already in place (e.g. `Home.css`, `CaseStudy.css`, etc.).

The reference implementation is in:
- `Portfolio.html` — main shell
- `js/Nav.jsx`, `js/Home.jsx`, `js/CaseStudy.jsx`, `js/About.jsx`, `js/DisasterDrawer.jsx`, `js/App.jsx`

---

## Design Tokens

### Colors
```
--black:     #000000
--white:     #FFFFFF
--red-dark:  #BB2F2E   /* primary accent — CTAs, hover underlines, NDA badge, labels */
--red-pale:  #C2463A   /* accent hover state */
--pink:      #E5AF9F   /* disaster drawer warm accent */
--grey-800:  #2B2B2B   /* primary text */
--grey-700:  #3D3D3D   /* disaster drawer hover bg */
--grey-600:  #555555   /* secondary/muted text */
--grey-500:  #A3A3A3   /* tertiary text, meta labels */
--grey-400:  #B8B4B3   /* nav links muted */
--grey-300:  #C1BCBB   /* ghost labels border, arrow default */
--grey-200:  #E4DFDE   /* page borders / dividers */
--grey-100:  #E5E5E5   /* ghost index numbers, surface bg */
```

### Typography

| Token | Family | Size | Weight | Transform | Spacing | Usage |
|---|---|---|---|---|---|---|
| Display | Bebas Neue | clamp(80px, 9.5vw, 140px) | 400 | — | -1px | Hero headline |
| Display LG | Bebas Neue | clamp(60px, 7vw, 100px) | 400 | — | -1px | CS title, About title |
| Display MD | Bebas Neue | clamp(40px, 4vw, 64px) | 400 | — | -0.5px | Disaster section titles |
| Display SM | Bebas Neue | 40px | 400 | — | -0.5px | CS section titles |
| Display XS | Bebas Neue | clamp(56px, 7vw, 96px) | 400 | — | -1px | Poster card titles |
| Label | Courier Prime | 10–11px | 400 | uppercase | 2–3px | All tags, labels, meta keys |
| Body LG | DM Sans | 19–20px | 400/500 | — | — | Overviews, about intro |
| Body | DM Sans | 17px | 400 | — | — | Section content, paragraphs |
| Body SM | DM Sans | 15px | 400 | — | — | Meta values, captions |
| CTA | DM Sans | 13px | 500 | uppercase | 1.5px | Buttons |

Google Fonts import:
```
https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap
```

### Spacing
```
4px / 8px / 12px / 16px / 20px / 24px / 28px / 32px / 36px / 40px / 48px / 56px / 64px / 72px / 80px
```

### Borders
```
border: 1px solid #E4DFDE   /* page-level dividers */
border: 1px solid #C1BCBB   /* ghost label chips */
border: 1px solid #BB2F2E   /* red label chips (prize, NDA) */
border: 2px solid #000      /* buttons */
border-left: 3px solid #BB2F2E  /* NDA block accent */
```

---

## Buttons

Two variants, shared base:
```css
.btn-primary, .btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 26px;
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 2px solid #000000;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}

.btn-primary {
  background: #000000;
  color: #ffffff;
}
.btn-primary:hover {
  background: #BB2F2E;
  border-color: #BB2F2E;
}

.btn-ghost {
  background: transparent;
  color: #000000;
}
.btn-ghost:hover {
  background: #000000;
  color: #ffffff;
}
```

---

## Navigation

**Type:** Fixed top bar, full-width
**Height:** 72px
**Background:** Transparent on load → `rgba(255,255,255,0.94)` + `backdrop-filter: blur(12px)` when `scrollY > 30px`
**Border:** Transparent on load → `1px solid #E4DFDE` on scroll

**Logo:**
- Font: Bebas Neue, 30px, letter-spacing 3px
- Text: `PÍA`
- On click: navigate to home

**Nav links (desktop):**
- Font: Courier Prime, 11px, uppercase, letter-spacing 2px
- Color: `#2B2B2B` default, `#BB2F2E` active/hover
- Items: Work · Disaster Drawer · About · Contact (mailto link)

**Mobile (≤768px):**
- Hamburger button replaces nav links (3 × 22px lines, 5px gap)
- Tap opens full-screen overlay: black bg, Bebas Neue 64px links in white, hover turns `#BB2F2E`
- Close button: top-right, Courier Prime 11px

**Transition:** `transition: background 0.3s, border-color 0.3s`

---

## Page: Home

### Hero Section

**Layout:** CSS Grid, `55fr 45fr`, min-height `calc(100vh - 72px)`, max-width 1280px, centered, padding `48px 48px 64px`

**Left column:**
- Tag: Courier Prime 11px uppercase, letter-spacing 2.5px, color `#555555` — "UX/UI DESIGNER · SWITZERLAND"
- Headline: Bebas Neue `clamp(80px, 9.5vw, 140px)`, line-height 0.93, letter-spacing -1px — "Designing things for people"
- Italic subtitle: DM Sans 22px italic, color `#555555` — "...and also for myself"
- Body: DM Sans 17px, line-height 1.75, color `#2B2B2B`, max-width 460px
- CTAs: btn-primary "See my work" (smooth scrolls to `#work`) + btn-ghost "Get in touch" (mailto)

**Right column:**
- Image: `assets/hero.PNG` — illustration of character at a desk
- Max-width 520px, `object-fit: contain`
- Transform: `translateY(8px)` (slight downward offset to touch the bottom edge)
- Filter: `drop-shadow(0 8px 24px rgba(0,0,0,0.08))`

**Mobile (≤768px):** Stack to single column, image below text.

### Case Study Cards — Three Variants

The design offers three card style variants (expose via Tweaks or pick one for production). **Rows** is the primary recommendation.

#### Variant A: Editorial Rows (recommended)
- Top border: `1px solid #E4DFDE` on the container
- Each row: `display: grid`, `grid-template-columns: 80px 1fr 32px`, `padding: 36px 0`, `border-bottom: 1px solid #E4DFDE`
- Hover: background `#FAF9F8`
- Ghost number: Bebas Neue 56px, `#E5E5E5` default → `#C1BCBB` on hover
- Labels: Courier Prime 10px, uppercase, letter-spacing 1.5px. Default: `border: 1px solid #C1BCBB`, color `#555`. Special (1ST PRIZE): border + color `#BB2F2E`
- Title: Bebas Neue `clamp(36px, 3.5vw, 52px)`, line-height 0.95, color `#000`
- Tagline: DM Sans 15px, color `#555`, line-height 1.55, max-width 600px
- Arrow: `↗`, 22px, `#C1BCBB` default → `#BB2F2E` on row hover

#### Variant B: Grid Cards
- 2-column CSS grid, gap 2px
- Each card: padding `36px 32px`, border `1px solid #E4DFDE`, hover: border `#000`, bg `#FAF9F8`
- Title: Bebas Neue `clamp(32px, 2.8vw, 44px)`, line-height 0.95

#### Variant C: Poster Stack
- Full-width, border-bottom per item, padding `40px 0`
- Title: Bebas Neue `clamp(56px, 7vw, 96px)`, line-height 0.9, letter-spacing -1px
- Hover: title color changes from `#000` → `#BB2F2E`

### Disaster Drawer Strip

**Background:** `#2B2B2B`, padding `80px 48px`

**Header:**
- Title: Bebas Neue `clamp(56px, 6vw, 88px)`, line-height 0.9, color white. "Drawer" word in `#BB2F2E`
- Subtitle: DM Sans 16px, color `#B8B4B3`, max-width 360px
- Layout: `justify-content: space-between`, `align-items: flex-end`

**Grid:** 3 columns, gap 2px

**Each item:**
- Padding `32px 28px 28px`, min-height 180px
- Label: Courier Prime 10px uppercase, letter-spacing 2px, color `#BB2F2E`
- Title: Bebas Neue 32px, color white → `#E5AF9F` on hover
- Arrow: `↗`, color `#555` → `#E5AF9F` on hover
- Hover bg: `#3D3D3D`

---

## Page: Case Study (individual)

**Route:** `/case-study/:id` (hash-based in prototype: `#/case-study/:id`)
**Max-width:** 1280px centered, padding `0 48px`

### Header
- Back link: Courier Prime 11px uppercase, `← Back to work`, color `#555` → `#BB2F2E` on hover
- Labels: Courier Prime 10px chips (same as home card labels)
- Title: Bebas Neue `clamp(60px, 7vw, 100px)`, line-height 0.92, letter-spacing -1px
- Tagline: DM Sans 20px italic, color `#555`, max-width 660px
- Bottom border: `1px solid #E4DFDE`

### Meta Bar
**Layout:** 4-column grid (`repeat(4, 1fr)`), padding `32px 0`, border-bottom `1px solid #E4DFDE`
**Each item (except last):** right border `1px solid #E4DFDE`, padding-right 24px
- Key: Courier Prime 10px uppercase, letter-spacing 2px, color `#A3A3A3`
- Value: DM Sans 15px, color `#2B2B2B`, line-height 1.5
- Fields: Role · Team · Duration · Status
- **Mobile (≤768px):** 2-column grid, row-gap 24px

### NDA Notice (shown only when `nda: true`)
- Layout: flex row, gap 16px, align `flex-start`
- Background: `#FAF9F8`, padding `20px 24px`, margin `32px 0`
- Left border: `3px solid #BB2F2E`
- Badge: Courier Prime 10px, `border: 1px solid #BB2F2E`, color `#BB2F2E`, padding `3px 8px`
- Text: DM Sans 15px, color `#555`, line-height 1.65

### Overview Block
- Label: Courier Prime 10px uppercase, letter-spacing 2.5px, color `#A3A3A3`, margin-bottom 20px
- Text: DM Sans 19px, line-height 1.8, color `#2B2B2B`, max-width 680px

### Image Grid (Asobal only — 4 images)
- 2-column grid, gap 2px
- Each cell: background `#F5F1F0`
- Image: `height: 280px`, `object-fit: cover`
- Caption: Courier Prime 10px uppercase, letter-spacing 1.5px, color `#A3A3A3`, padding `10px 14px`

### Sections
- Container border-top `1px solid #E4DFDE`
- Each section: padding `52px 0`, border-bottom `1px solid #E4DFDE`
- Title: Bebas Neue 40px, line-height 0.95
- Text: DM Sans 17px, line-height 1.8, color `#2B2B2B`, max-width 660px

### Footer Navigation
- `justify-content: space-between`
- Left: btn-ghost "← All work"
- Right: small label "Next" (Courier Prime 11px, `#A3A3A3`) above btn-primary with next case study title

### Page Entrance Animation
```css
@keyframes pageIn {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}
.page { animation: pageIn 0.38s cubic-bezier(0.22, 1, 0.36, 1); }
```

---

## Page: About

**Layout:** 2-column CSS grid, `44fr 56fr`, min-height `calc(100vh - 72px)`, aligned `start`

### Left Column (Illustration)
- `position: sticky`, `top: 72px`, height `calc(100vh - 72px)`
- Background: `#E5E5E5`
- `align-items: flex-end`, `justify-content: flex-start`
- Padding: `0 32px`
- Image: `assets/About_me.png`, max-width 380px, `object-fit: contain`
- Filter: `drop-shadow(0 -4px 24px rgba(0,0,0,0.06))`
- **Mobile:** unstick, height 340px

### Right Column (Text)
- Padding: `72px 64px 80px 64px`
- Label: Courier Prime 11px uppercase, letter-spacing 3px, color `#A3A3A3` — "About"
- Title: Bebas Neue `clamp(64px, 6vw, 88px)`, line-height 0.92 — "Paula (Pía)"
- Intro paragraph: DM Sans 20px, line-height 1.65, font-weight 500, max-width 560px, border-top `2px solid #000`, padding-top 28px
- Body paragraphs: DM Sans 17px, line-height 1.8, color `#2B2B2B`, max-width 560px
- Dividers: `border-top: 1px solid #E4DFDE`
- Links: btn-primary "LinkedIn" + btn-ghost "Get in touch"
- Closing: `assets/work_utensils.PNG` at max-width 200px, opacity 0.6

---

## Page: Disaster Drawer

Three visually distinct sections, each with its own background and layout.

### Page Header
- Max-width 1280px, padding `64px 48px 56px`
- `justify-content: space-between`, `align-items: flex-end`
- Label: Courier Prime 11px uppercase, `#A3A3A3` — "The Drawer"
- Title: Bebas Neue `clamp(72px, 8vw, 120px)`, line-height 0.9 — "Disaster **Drawer**" ("Drawer" in `#BB2F2E`)
- Subtitle: DM Sans 17px, color `#555`, max-width 360px
- Border-bottom: `1px solid #E4DFDE`

### Section 1: Pias Drama
**Background:** `#2B2B2B`
**Layout:** 2-column grid (`1fr 1fr`), min-height 420px

Left:
- Padding `56px 48px`, flex column, gap 20px
- Section label: Courier Prime 10px, `#BB2F2E`
- Title: Bebas Neue `clamp(40px, 4vw, 64px)`, white
- Description: DM Sans 16px, `#B8B4B3`, line-height 1.7
- Instagram link: outlined button, `border: 1px solid #E5AF9F`, color `#E5AF9F` → fills `#E5AF9F`, color `#000` on hover

Right (`#1E1E1E`):
- 3 character illustration images side by side, height 260px, `object-fit: contain`
- Rotations: `-4deg`, `0deg`, `3deg`
- On image hover: `scale(1.06) translateY(-8px)` + maintains rotation

### Section 2: Random Rolls
**Background:** `#FFFFFF`
**Layout:** 2-column grid, RTL so text is on the right, min-height 380px

Left (photos):
- Background: `#E5E5E5`
- Auto-scrolling horizontal strip: `display: flex`, images at `height: 100%`, `min-width: 200px`, `object-fit: cover`
- Animation: `stripScroll 18s linear infinite`
```css
@keyframes stripScroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```
- Images are duplicated to create seamless loop

Right (text):
- Same layout as Pias Drama left, but on white bg
- Instagram link: `border: 1px solid #000`, color `#000` → fills `#000`, color `#fff`

### Section 3: The Dump
**Background:** `#FAFAF9`

Header: max-width 1280px, padding `56px 48px 40px`
- Label: Courier Prime 10px, `#A3A3A3`
- Title: Bebas Neue `clamp(40px, 4vw, 56px)`
- Description: DM Sans 16px, `#555`

Masonry grid:
- CSS `columns: 4`, `column-gap: 8px`
- Each item: `break-inside: avoid`, margin-bottom 8px, overflow hidden
- Image: `width: 100%`, `display: block`
- Hover: image `scale(1.04)` + caption overlay appears (`opacity: 0 → 1`)
- Caption overlay: `position: absolute`, bottom 0, `background: rgba(0,0,0,0.65)`, Courier Prime 9px uppercase, white
- Entrance animation: staggered `dumpIn`, delay = `(index × 60ms) % 900ms`
```css
@keyframes dumpIn {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

Assets used in The Dump (in order):
```
dump-hello.gif, dump-arcano_el_loco.PNG, dump-arcano_la_estrella.PNG,
dump-brutalist_collage.JPG, dump-arcano_los_amantes.PNG, dump-character_sheet.JPG,
dump-arcano_el_sol.PNG, dump-IMG_0729.JPG, dump-face_expressions.JPG,
dump-arcano_la_emperatriz.PNG, dump-cat_god.JPG, dump-turnaround_dressed.PNG,
dump-arcano_la_sacerdotisa.PNG, dump-IMG_1682.JPG, dump-turnaround_naked.PNG,
dump-IMG_0730.JPG, dump-IMG_1845.JPG, dump-IMG_1503.JPG, dump-IMG_1581.PNG,
dump-IMG_1838.JPG
```

Pias Drama character images (right column):
```
dump-face_expressions.JPG, dump-character_sheet.JPG, dump-turnaround_dressed.PNG
```

Random Rolls photo strip:
```
dump-IMG_0729.JPG, dump-IMG_1682.JPG, dump-IMG_0730.JPG,
dump-IMG_1845.JPG, dump-IMG_1838.JPG, dump-IMG_1503.JPG
(+ duplicated for seamless loop)
```

---

## Routing

Hash-based in the prototype. Map to React Router routes in production:

| Hash | Route | Component |
|---|---|---|
| `#` / `#/` | `/` | `<Home>` |
| `#/case-study/:id` | `/case-study/:id` | `<CaseStudy>` |
| `#/about` | `/about` | `<About>` |
| `#/disaster-drawer` | `/disaster-drawer` | `<DisasterDrawer>` |

Case study IDs: `asobal`, `app-directory`, `operational-tool`, `component-library`

---

## Data

All content lives in `src/data/content.json` (already in the codebase). The structure is unchanged from the existing file; the prototype reads from `window.CONTENT` (a JS copy). Map the same fields in the production React components.

Asobal case study has 4 images defined:
```json
[
  { "src": "asobal-persona.png", "caption": "User persona developed from survey data and fan interviews" },
  { "src": "asobal-home-screen.png", "caption": "Home screen: team-first personalisation on entry" },
  { "src": "asobal-challenge-screen.png", "caption": "Challenge screen: gamified fan club competition" },
  { "src": "asobal-fanclub-screen.png", "caption": "Fan club screen: community infrastructure proposal" }
]
```
Add an `images` array to the `asobal` entry in `content.json`.

---

## Assets

All in `src/assets/`:

| File | Used in |
|---|---|
| `hero.PNG` | Home hero (right column) |
| `About_me.png` | About page (left sticky column) |
| `work_utensils.PNG` | About page (closing decoration) |
| `asobal-*.png` | Asobal case study image grid |
| `dump-*.PNG/JPG/gif` | Disaster Drawer (all three sections) |

---

## Files in This Handoff

```
design_handoff_pia_portfolio/
  README.md            ← this file
  Portfolio.html       ← main HTML shell + global CSS
  js/
    content.js         ← all site data as window.CONTENT
    Nav.jsx            ← navigation component
    Home.jsx           ← home page (hero + cards + disaster strip)
    CaseStudy.jsx      ← individual case study page
    About.jsx          ← about page
    DisasterDrawer.jsx ← disaster drawer page (3 sections)
    App.jsx            ← routing + tweaks panel
```

---

## Implementation Notes

1. **Use the existing CSS module pattern** (`Home.css`, `CaseStudy.css`, etc.) rather than inline styles
2. **React Router is already in place** — swap hash routing for `<BrowserRouter>` / `<Routes>` / `<Link>` as per existing `App.jsx`
3. **Nav scroll state:** add a `useEffect` with a scroll listener; toggle a CSS class on the nav element
4. **The Dump masonry:** CSS `columns` property works well; alternatively consider a JS masonry lib if column breaks on images are unacceptable
5. **Sticky About image:** `position: sticky; top: 72px` inside a grid — the sibling text column must be taller than the viewport for the stick to activate
6. **Photo strip loop:** duplicate the array in the component to achieve a seamless CSS animation loop
7. **ScrollToTop:** the existing `ScrollToTop.jsx` component handles this — keep it
