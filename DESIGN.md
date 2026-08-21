---
name: Enterprise Futurist
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#c6c6cd'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#909097'
  outline-variant: '#45464d'
  surface-tint: '#bec6e0'
  primary: '#bec6e0'
  on-primary: '#283044'
  primary-container: '#0f172a'
  on-primary-container: '#798098'
  inverse-primary: '#565e74'
  secondary: '#5de6ff'
  on-secondary: '#00363e'
  secondary-container: '#00cbe6'
  on-secondary-container: '#00515d'
  tertiary: '#b7c8e1'
  on-tertiary: '#213145'
  tertiary-container: '#06182b'
  on-tertiary-container: '#728299'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#a2eeff'
  secondary-fixed-dim: '#2fd9f4'
  on-secondary-fixed: '#001f25'
  on-secondary-fixed-variant: '#004e5a'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The design system is built for high-stakes AI consultancy and project management. The visual language, "Enterprise Futurist," balances the reliability of traditional enterprise software with the forward-leaning energy of artificial intelligence.

The style is **Corporate Modern with subtle Glassmorphism**. It utilizes high-precision layouts, heavy whitespace, and high-quality typography to convey authority. The "futurist" aspect is introduced through vibrant cyan accents, precision data-viz elements, and subtle background blurs that suggest depth and advanced processing power without sacrificing professional clarity.

## Colors

The palette is anchored in a professional dark mode to emphasize the "high-tech" nature of AI services.

- **Primary (Deep Midnight):** `#0F172A`. Used for main backgrounds and deep structural elements. It provides a stable, "infinite" canvas.
- **Secondary (Vibrant Cyan):** `#22D3EE`. Reserved for high-priority actions, progress indicators, and active AI states. It acts as the "glow" of the technology.
- **Tertiary (Slate Gray):** `#64748B`. Used for secondary text and borders to maintain a sophisticated, low-friction hierarchy.
- **Neutral (Cloud White):** `#F8FAFC`. Used exclusively for primary headings and body text to ensure maximum legibility against the dark background.

## Typography

This design system utilizes **Inter** for all primary interface elements due to its exceptional legibility and systematic feel. For technical metadata, code snippets, and data visualization labels, **JetBrains Mono** is introduced to reinforce the "engineered" aesthetic.

Headlines should use tight letter-spacing to appear more impactful and "locked-in." Body text maintains generous line-height to ensure readability during long-form project reporting or technical documentation.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain a highly controlled, editorial feel, transitioning to a fluid model on smaller devices.

- **Grid:** A 12-column grid with a 24px gutter.
- **Rhythm:** All vertical spacing must be a multiple of 8px.
- **Desktop:** Large horizontal margins (64px+) are used to create a "command center" feel where information is centered and focused.
- **Mobile:** Margins reduce to 16px, and multi-column service grids reflow into a single-column vertical stack.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Subtle Outlines** rather than heavy shadows.

- **Level 0 (Base):** Deep Midnight (`#0F172A`).
- **Level 1 (Card/Container):** A slightly lighter tint (`#1E293B`) with a 1px border of `#334155`.
- **Level 2 (Popovers/Modals):** Use a glassmorphic effect—background blur (20px) combined with a 60% opacity fill of the Level 1 color.
- **Accents:** Active elements may feature a subtle outer glow using the secondary cyan color at very low opacity (10-15%) to simulate a powered-on state.

## Shapes

The shape language is **Sharp and Geometric**. 

The system uses `Soft` (0.25rem) corner radii for standard components like input fields and small buttons, conveying precision. Larger containers and cards use `rounded-lg` (0.5rem). High-tech elements, such as "AI Status" chips, may use a pill-shape to distinguish them from standard functional UI.

## Components

### Buttons & Inputs
- **Primary Action:** Solid Cyan (`#22D3EE`) with Deep Midnight text. High contrast, sharp corners.
- **Secondary Action:** Ghost style with a 1px Slate Gray border and white text.
- **Inputs:** Dark backgrounds (`#0F172A`) with a subtle 1px border that glows Cyan on focus.

### Data Visualization & Timelines
- **Service Feature Grids:** Use 1px borders and "micro-interactions" where the border color shifts to Cyan on hover.
- **Process Timelines:** Use thin, vertical Slate Gray lines with Cyan nodes. Nodes for "Completed" steps should have a pulse animation.
- **Data Charts:** Use monochromatic Slate scales with Cyan as the "Insight" color to highlight specific data points.

### Cards
- Standard cards should have no shadow but a distinct 1px border.
- Header sections of cards should be separated by a subtle horizontal rule.
- Use JetBrains Mono for all numerical data points inside cards.