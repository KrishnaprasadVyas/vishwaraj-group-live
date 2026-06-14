---
name: Obsidian Industrial
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#e0c0b1'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#a78b7d'
  outline-variant: '#584237'
  surface-tint: '#ffb690'
  primary: '#ffb690'
  on-primary: '#552100'
  primary-container: '#f97316'
  on-primary-container: '#582200'
  inverse-primary: '#9d4300'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#93ccff'
  on-tertiary: '#003351'
  tertiary-container: '#00a2f4'
  on-tertiary-container: '#003554'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbca'
  primary-fixed-dim: '#ffb690'
  on-primary-fixed: '#341100'
  on-primary-fixed-variant: '#783200'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#cde5ff'
  tertiary-fixed-dim: '#93ccff'
  on-tertiary-fixed: '#001d32'
  on-tertiary-fixed-variant: '#004b74'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  display-2xl:
    fontFamily: Hanken Grotesk
    fontSize: 120px
    fontWeight: '800'
    lineHeight: 110px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1440px
  gutter: 32px
  section-padding: 160px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

This design system embodies "Dark Luxury Industrial," a narrative that positions chemical manufacturing as a high-end, cinematic experience. The brand personality is authoritative and unapologetically bold, targeting global stakeholders who equate technical precision with luxury. 

The visual style leverages **Modern Minimalism** infused with **Glassmorphism**. It relies on deep atmospheric depth rather than structural outlines. The emotional response is one of "premium stability"—heavy, grounded, yet technologically advanced. Key pillars include:
- **Cinematic Scale:** Utilizing extreme shifts in scale to emphasize power.
- **Atmospheric Depth:** Using light as a material to define edges through glows and blurs.
- **Precision Engineering:** Sharp typography and intentional whitespace that mirror high-end industrial design.

## Colors

The palette is rooted in an "Infinite Black" philosophy.
- **Pure Black (#000000):** Used for the primary canvas to create a sense of boundless space and high-end prestige.
- **Deep Charcoal (#121212):** Used for section backgrounds and surface containers to create subtle differentiation without the need for borders.
- **Industrial Orange (#F97316):** A high-energy accent used sparingly for calls-to-action and critical data points, mimicking the glow of molten material or safety instrumentation.
- **White & Zinc:** Typography is kept crisp white for maximum legibility against the dark void, with Zinc-400 used for secondary information.

## Typography

The typographic hierarchy is designed for impact and clarity. 
- **Headlines:** Hanken Grotesk provides a sharp, contemporary "custom-feel" grotesque aesthetic. The `display-2xl` role is intended for hero sections and impact statements, featuring tight kerning and aggressive weight.
- **Body:** Inter is used for its systematic reliability. Body copy is set with generous line-height (`body-lg`) to ensure a premium, editorial feel that balances the heavy headlines.
- **Technical Labels:** Geist is used for technical data, mono-spaced numbers, and small labels to reinforce the "industrial tool" aspect of the brand.

## Layout & Spacing

This design system utilizes a **12-column fluid grid** for desktop with an emphasis on oversized margins.
- **Breathable Whitespace:** Sections are separated by massive vertical padding (`160px`) to enforce a slow, deliberate scrolling pace.
- **Asymmetric Balance:** Elements should often be offset from the center to create a dynamic, modern architectural feel.
- **Mobile Reflow:** On mobile devices, the 12-column grid collapses to a single column with `24px` side margins. Headlines scale down significantly to ensure they remain within the viewport.

## Elevation & Depth

Depth is conveyed through **Glassmorphism** and **Light Emission** rather than traditional shadows.
- **Glassmorphic Layers:** Foreground elements use a semi-transparent `rgba(255, 255, 255, 0.03)` background with a `20px` backdrop-blur. 
- **Glow Accents:** High-priority cards or active states use a subtle `0px 0px 40px rgba(249, 115, 22, 0.1)` outer glow to simulate illuminated industrial panels.
- **The "No-Border" Rule:** Avoid solid borders. Use slight tonal shifts in background color or extremely low-opacity white top-borders (1px, 5% opacity) to catch "specular" light.

## Shapes

The shape language is **Industrial-Soft**. While the brand is "hard" and industrial, the UI uses `0.25rem` (Soft) rounding to suggest high-end manufacturing precision (like CNC-milled aluminum). 
- **Buttons:** Use `rounded-lg` for a more ergonomic feel.
- **Product Containers:** Use the base `0.25rem` to keep the silhouettes sharp and architectural.
- **Interactive Elements:** Can transition to sharper edges on hover to signal mechanical engagement.

## Components

### Cinematic Hero
A full-screen component featuring `display-2xl` typography over background video of chemical processes. Text should be left-aligned with a single, high-contrast Industrial Orange primary button.

### Interactive Product Showcases
Cards with no visible borders. On hover, the background shifts from `#000000` to `#121212` and the product image scales slightly. Data points are displayed using `label-caps`.

### Glassmorphic Industry Cards
Used for sector-specific navigation. Features a high backdrop-blur and a subtle 1px top-edge highlight to simulate a thick glass panel.

### Horizontal Manufacturing Timeline
A minimalist track using a 1px Zinc-800 line. Nodes are Industrial Orange. Hovering over a node triggers a glassmorphic popover with technical specifications in `body-md`.

### Buttons
- **Primary:** Solid #F97316 with black text. No border. High-gloss finish on hover.
- **Secondary:** Ghost style with white text and a 1px white border at 10% opacity. Shifts to 100% white text on hover.