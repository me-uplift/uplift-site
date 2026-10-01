# Uplift Digital Studio — Design System

## Company Overview

**Uplift Digital Studio** is a Social Media Management & UGC (User-Generated Content) Agency. They help premium brands grow through content strategy, community management, and creator-led content production.

**Core offering:** Done-for-you social media management, UGC content, and a three-tier pricing model for different client scales.

**Target clients:** Premium brands ready to invest in serious social media growth.

**Bilingual:** English/Spanish — tone and copy should translate cleanly.

---

## Sources

- Logo assets: `uploads/` — 9 logo variants (gradient, black, white) in SVG + PNG
- Info sheet: `uploads/info sheet.pdf` — Brand identity sheet (mostly visual, minimal extractable text)
- Brand notes provided directly by client

No codebase or Figma link was provided.

---

## Components

Six exported website components live in `ui_kits/website/` and are reachable at
`window.UpliftDigitalStudioDesignSystem_f3d16e.<Name>`. Each has a `.jsx` source,
a `.d.ts` type definition, and a `.html` preview card (group "UI Kit — Website").

| Component | Props | Description |
|---|---|---|
| `Nav` | `activePage?`, `onNavigate?` | Fixed top nav; blurred background on scroll, gradient CTA |
| `Hero` | `onNavigate?` | Full-viewport landing headline (Satoshi Black), gradient accent, CTAs, stat row |
| `Services` | — | Four-card service grid with gradient icon tiles |
| `Pricing` | — | Three-tier pricing with monthly/annual toggle and highlighted plan |
| `Testimonials` | — | Three-up client result quotes (Satoshi Regular italic) |
| `Footer` | `onNavigate?` | Brand column, link columns, social icons, legal bar |

`onNavigate` is called with a page key (e.g. `'pricing'`); `activePage` highlights the matching nav link.

---

## File Index

| Path | Contents |
|---|---|
| `README.md` | This file — master reference |
| `colors_and_type.css` | All CSS custom properties (colors, type, spacing) |
| `assets/` | Logos, icons (SVG + PNG) |
| `preview/` | Design system card HTMLs |
| `ui_kits/website/` | Marketing website UI kit |
| `SKILL.md` | Agent skill definition |

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Confident and concise.** Every sentence earns its place. No filler.
- **Benefit-forward.** Lead with what the client gains, not what Uplift does.
- **Premium but warm.** Not cold or corporate — approachable without being casual or playful.
- **Bilingual-ready.** English and Spanish copy should feel equally native, not translated.

### Writing Rules
- No em dashes
- No filler phrases ("we believe," "passionate about," "at the end of the day")
- No over-explaining — trust the reader
- No emoji in professional contexts (website, proposals, decks)
- Sentence case for body; Title Case for headings; ALL CAPS SPACED for labels/nav/badges
- Address the client directly: "you" not "clients" or "brands"
- First person plural for Uplift: "We" or "Uplift" — not "our team"

### Copy Examples (tone reference)
- ✅ "Your audience is ready. Let's give them something worth watching."
- ✅ "Full-service social. Real results."
- ✅ "Content that converts — managed entirely for you."
- ❌ "We are passionate about helping brands tell their story."
- ❌ "At Uplift, we believe every brand deserves a voice."

### Casing Conventions
- **Hero headlines:** Sentence case, large, bold
- **Section labels / eyebrows:** ALL CAPS, letter-spacing 0.1–0.15em
- **Buttons:** Sentence case or ALL CAPS depending on context
- **Nav items:** ALL CAPS, tracked out

---

## VISUAL FOUNDATIONS

### Color System

**Brand Gradient** (the hero element):
- Direction: left → right (or top-left → bottom-right for diagonal)
- Stops: `#E8998A` (peach) → `#C97BAF` (mauve) → `#9B70C0` (violet) → `#7878C8` (periwinkle) → `#5E65B5` (indigo)
- Usage: CTAs, hero backgrounds, dividers, accent bars, logo colorway
- Never flatten or compress the gradient — let it breathe across the full element

**Solid Brand Colors** (extracted from gradient stops):
- Peach: `#E8998A`
- Mauve: `#C97BAF`
- Violet: `#9B70C0`
- Periwinkle: `#7878C8`
- Indigo: `#5E65B5`

**Neutral System:**
- Near-black (dark bg): `#10101A`
- Dark surface: `#1A1A28`
- Mid surface: `#2A2A3C`
- Muted: `#6B6B85`
- Subtle: `#B0B0C8`
- Off-white: `#F5F4FA`
- White: `#FFFFFF`

**Semantic:**
- Success: `#5BB585`
- Warning: `#E8C47A`
- Error: `#E87A7A`

### Typography

**One family, full hierarchy:** Satoshi
Satoshi handles both display and text — weight carries the contrast.
- **H1 / Hero:** Black (900) · tracking −0.02em
- **H2 / Section:** Bold (700) · tracking −0.01em
- **H3 / Card & subhead:** Bold (700)
- **Body / Paragraph:** Regular (400)
- **Eyebrows, labels, captions, buttons:** Medium (500) · uppercase, tracked out 0.08–0.15em
- CDN: https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap

**Fallback Stack:** `'Satoshi', 'DM Sans', system-ui, sans-serif`

### Spacing System
- Base unit: 8px
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128, 160px
- Section padding: 80–160px vertical
- Container max-width: 1200px, with 24–48px side padding

### Layout Rules
- Generous white space — gradient carries the personality
- Clean, editorial grid: 12-col, 24px gutter
- Fixed navigation bar on scroll
- Full-bleed hero sections
- Asymmetric layouts welcome — text left, visual right, or reversed

### Backgrounds
- Primary dark: `#10101A` (near-black) — default dark mode bg
- White/off-white: for light sections
- Gradient as full-bleed bg for hero sections (low opacity or full)
- No textures, patterns, or hand-drawn elements

### Cards
- Background: `#1A1A28` (dark) or `#FFFFFF` (light)
- Border: 1px solid rgba(255,255,255,0.08) on dark; none on light
- Border-radius: 16px (cards), 12px (inner), 999px (pills/badges)
- Shadow: `0 4px 24px rgba(0,0,0,0.18)` on dark; `0 2px 16px rgba(16,16,26,0.08)` on light
- No colored left-border accents

### Corner Radii
- Buttons: 999px (pill)
- Cards: 16px
- Inputs: 12px
- Badges/tags: 999px
- Images: 12–16px

### Hover & Interaction States
- Buttons: gradient lightens slightly, subtle scale(1.02), cursor pointer
- Links: gradient underline or opacity 0.7
- Cards: lift with `translateY(-2px)` + shadow increase
- No color flash — smooth transitions, 200ms ease

### Animation
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)` (smooth, not bouncy)
- Duration: 150ms (micro), 250ms (UI), 400ms (entrance)
- Entrance: fade-up (`opacity 0→1`, `translateY 12px→0`)
- No spring/bounce — editorial restraint
- Subtle parallax on hero acceptable

### Imagery
- Warm-neutral color grade preferred
- No heavy filters or B&W
- People-centric (creators, teams, content shoots)
- Never stock-photo generic

### Iconography
See ICONOGRAPHY section below.

---

## ICONOGRAPHY

No proprietary icon set provided. Uplift uses clean, minimal line icons.

**Recommended set:** Lucide Icons (https://lucide.dev) — available via CDN
```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
```

**Style:** 1.5px stroke, rounded caps/joins, no fill
**Size:** 16px (inline), 20px (UI), 24px (feature icons)
**Color:** Inherit from text or use gradient via SVG linearGradient

Emoji: Not used in UI or professional copy.
Unicode characters: Not used as icons.

Logo assets available in `assets/`:
- `UpliftLogo_Gradient.svg` — Primary logo (wordmark only), gradient version
- `UpliftLogo_GradientText.svg` — Wordmark + "DIGITAL STUDIO" tagline, gradient
- `UpliftLogo_GradientIcon.svg` — "UP" monogram, gradient
- `UpliftLogo_Black.svg` — Full wordmark, black
- `UpliftLogo_BlackIcon.svg` — Monogram, black
- `UpliftLogo_BlackText.svg` — Wordmark + tagline, black
- `UpliftLogo_White.svg` — Full wordmark, white
- `UpliftLogo_WhiteIcon.svg` — Monogram, white
- `UpliftLogo_WhiteText.svg` — Wordmark + tagline, white

**Usage rules:**
- Dark backgrounds: white logo
- Light backgrounds: black logo
- Gradient logo: hero, splash screens, brand moments only
- Monogram ("UP"): favicons, profile icons, small placements (<32px)
- Minimum size: 120px wide for full wordmark; 32px for monogram
- Clear space: equal to the height of the "u" letterform on all sides
