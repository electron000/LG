---
name: LegalMate Editorial Swiss
colors:
  surface: '#fbf9f9'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e3e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dcdddd'
  on-secondary-container: '#5f6161'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#410004'
  on-tertiary-container: '#ef4444'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ad'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#930013'
  background: '#fbf9f9'
  on-background: '#1b1c1c'
  surface-variant: '#e3e2e2'
typography:
  display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 52px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.005em
  citation-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: -0.01em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system operates at the intersection of Swiss International Style and modern digital legal-tech. It projects an air of absolute precision, intellectual rigor, institutional authority, and quiet confidence. Designed for legal practitioners, general counsel, and enterprise compliance teams, the interface removes extraneous ornamentation to prioritize legibility, fast document comprehension, and low cognitive friction under pressure.

The aesthetic philosophy draws directly from modernist Swiss publishing: asymmetrical tension balanced by an exacting baseline grid, disciplined typographic scale, hairline rules, and generous structural whitespace. Depth is established structurally rather than through decorative shadows, cultivating an editorial atmosphere akin to a high-end legal gazette or precision analytical instrument.

## Colors
The system relies on a high-contrast monochromatic foundation punctuated by a single functional alert accent.

- **Primary Canvas & Foreground**: Surfaces begin with pure `#FFFFFF` to emulate clinical parchment. Primary text, primary CTA fills, and active structural accents utilize Charcoal Black (`#171717`), establishing maximum optical contrast.
- **Secondary Surfaces**: Fills for nested panels, table headers, document preview viewports, and interactive card backgrounds utilize Off-White (`#F5F5F5`), providing soft visual segmentation without heavy contrast breaks.
- **Borders & Rules**: Structural containment and horizontal hairlines use Neutral Gray (`#E5E5E5`). Borders remain strictly 1px to evoke the precision of fine-ruled stationery.
- **Muted & Meta Text**: Muted Slate (`#737373`) is reserved for statutory citations, footnotes, metadata timestamps, field labels, and secondary actions.
- **Alert & Risk Accent**: Pure functional red (`#EF4444`) is deployed exclusively for high-risk indemnity warnings, clause anomaly badges, and critical compliance failures. It is never used decoratively.

## Typography
Typographic discipline is central to this design system. Inter provides neutral, clinical clarity across all primary reading, navigation, and executive summaries. Tight tracking (`letter-spacing`) in headlines mirrors the dense, rational typographic density of Swiss modernism.

To elevate statutory analysis and differentiate raw contractual verbiage from UI instructions:
- Use `citation-mono` for all codified citations (e.g., *15 U.S.C. § 78m*), hash signatures, audit logs, and raw clause diffs.
- Maintain a strict 4px/8px baseline grid alignment; body paragraphs should avoid unconstrained line lengths, capping at a maximum width of 68 characters (`68ch`) to ensure sustained reading comfort.
- Section titles and document clause hierarchies rely on tight, rhythmic downscaling rather than extreme weight jumps.

## Layout & Spacing
The layout follows a responsive 12-column fluid grid system on desktop (collapsing to 8 columns on tablet and 4 columns on mobile). 

- **Desktop (≥1024px)**: Gutter sits at `1.5rem` (24px) with minimum outer canvas margins of `2rem` (32px). Complex split layouts feature an asymmetrical split: a 4-column statutory navigation/index drawer juxtaposed against an 8-column contractual workspace.
- **Tablet (768px - 1023px)**: Gutters reduce to `1rem` (16px) with `1.5rem` margins. Side panels collapse into off-canvas or tabbed overlays.
- **Mobile (<768px)**: Gutters tighten to `gutter-mobile` (`0.75rem` / 12px) with outer canvas margin `margin-mobile` (`1rem` / 16px). All multidirectional tools stack into vertical narrative flows.
- **Vertical Spacing Rhythm**: Standard rhythm uses `space-md` (16px) for interior component clustering, `space-lg` (24px) for card body padding, and `space-xl` (40px) between document thematic sections.

## Elevation & Depth
In keeping with strict Swiss editorial tenets, this design system rejects heavy, diffused, or drop shadows. Depth and hierarchy are achieved entirely through structural layering:

1. **Surface Tiers**:
   - **Base (Z0)**: Pure Canvas White (`#FFFFFF`).
   - **Layer 1 Panels (Z1)**: Secondary fills (`#F5F5F5`) bounded by crisp 1px `#E5E5E5` hairline borders.
   - **Layer 2 Overlays (Z2 - Modals, Command Palettes, Popovers)**: Pure `#FFFFFF` backdrops defined by a dual perimeter: a 1px solid stroke (`#171717` or `#E5E5E5`) and an ultra-subtle, sharp ambient drop (`0 2px 8px rgba(0, 0, 0, 0.04)`).
2. **Dividers and Hairlines**: Sections must never rely on empty gaps alone for segregation; crisp 1px `#E5E5E5` vertical and horizontal rules segment content with mathematical precision.

## Shapes
The design balances architectural sharpness with ergonomics. Large containers and structural panels employ a subtle `rounded-xl` (12px / `0.75rem`) border radius, mitigating clinical harshness while remaining disciplined. 

Conversely, granular UI controls such as input fields, segmented tab tracks, and action buttons adhere to a refined `0.25rem` (4px) or `0.375rem` (6px) corner radius. Status badges and clause alert chips uniquely adopt a full pill shape (`9999px`) to create high-visibility contrast against orthogonal document containers.

## Components

### Buttons
- **Primary**: Solid Charcoal Black (`#171717`) background, Pure White (`#FFFFFF`) text, 4px corner radius, padding `8px 16px`. Hover state shifts background to `#2E2E2E`. Active state applies `transform: scale(0.99)`.
- **Secondary**: Pure White (`#FFFFFF`) background, 1px solid `#E5E5E5` border, `#171717` text. Hover state shifts background to `#F5F5F5` and darkens border to `#D4D4D4`.
- **Ghost/Tertiary**: Transparent fill, `#737373` text. Hover shifts text to `#171717` with subtle `#F5F5F5` background fill.

### Status Badges & Risk Chips
- **Geometry**: Pill-shaped (`rounded-full`), padding `2px 8px`, typography `label-sm` (`JetBrains Mono`, uppercase).
- **Default/Neutral**: `#F5F5F5` background, `#171717` text, 1px `#E5E5E5` border.
- **Risk/High-Alert**: Soft tinted `#FEF2F2` background, vibrant `#EF4444` text, 1px solid `#FCA5A5` border.

### Cards & Container Panels
- **Structure**: `#F5F5F5` or `#FFFFFF` background, 12px radius (`rounded-xl`), framed in a continuous 1px `#E5E5E5` hairline border. Internal padding strictly bound to `space-lg` (24px).
- **Interactive Variants**: Card containers gain a 1px border transition to `#171717` on cursor hover without translation or elevation elevation changes.

### Segmented Controls & Tabs
- Track bounded by `#F5F5F5` fill, 6px radius, and 4px internal padding.
- Inactive segment: `#737373` label, no background.
- Active segment: `#FFFFFF` card, 1px `#E5E5E5` outline, `#171717` text, subtle `0 1px 2px rgba(0,0,0,0.05)` anchor.

### Input Fields & Search Bars
- Solid `#FFFFFF` fill, 1px `#E5E5E5` border, 4px corner radius, `10px 14px` padding.
- Typography: `body-md` for user entry; placeholder set in `#737373`.
- Focus state: Border instantly shifts to 1px `#171717` with a matching 1px outer ring. No soft colored focus glows.

### Clause Preview Diffs & Statutory Callouts
- Callout block with a full left-edge border (3px solid `#171717` or `#EF4444`), `#F5F5F5` background, padded with `12px 16px`.
- Citations displayed inside utilize `citation-mono` with subtle `#737373` prefix tags.