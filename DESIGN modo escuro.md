---
name: Sylvan Core Dark
colors:
  surface: '#121412'
  surface-dim: '#111411'
  surface-bright: '#383a37'
  surface-container-lowest: '#0d0f0d'
  surface-container-low: '#1a1c1a'
  surface-container: '#232622'
  surface-container-high: '#282a28'
  surface-container-highest: '#333533'
  on-surface: '#e2e3df'
  on-surface-variant: '#c5c8bd'
  inverse-surface: '#e2e3df'
  inverse-on-surface: '#2f312f'
  outline: '#8e9287'
  outline-variant: '#444840'
  surface-tint: '#b8cda7'
  primary: '#d4e9c2'
  on-primary: '#24361a'
  primary-container: '#b8cda7'
  on-primary-container: '#45583a'
  inverse-primary: '#516445'
  secondary: '#e8bea2'
  on-secondary: '#442a17'
  secondary-container: '#5e402b'
  on-secondary-container: '#d6ad92'
  tertiary: '#f5dfcd'
  on-tertiary: '#3b2e22'
  tertiary-container: '#d8c3b2'
  on-tertiary-container: '#5f5042'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d4e9c2'
  primary-fixed-dim: '#b8cda7'
  on-primary-fixed: '#101f07'
  on-primary-fixed-variant: '#3a4c2f'
  secondary-fixed: '#ffdcc5'
  secondary-fixed-dim: '#e8bea2'
  on-secondary-fixed: '#2c1605'
  on-secondary-fixed-variant: '#5e402b'
  tertiary-fixed: '#f5dfcd'
  tertiary-fixed-dim: '#d8c3b2'
  on-tertiary-fixed: '#24190f'
  on-tertiary-fixed-variant: '#534437'
  background: '#121412'
  on-background: '#e2e3df'
  surface-variant: '#333533'
  moss-red: '#ffb4ab'
  golden-leaf: '#dec370'
typography:
  display-lg:
    fontFamily: manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: manrope
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: workSans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: workSans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: workSans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: workSans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
  gutter: 24px
  margin-desktop: 40px
---

## Brand & Style

This design system is a sophisticated evolution of a professional, nature-inspired interface, now recalibrated for low-light environments and high-performance focus. It evokes the feeling of a midnight forest—deep, quiet, and profoundly structured. The brand personality remains grounded and authoritative, but the dark mode shift adds a layer of technical prestige and cinematic depth.

The design style is a blend of **Corporate / Modern** and **Deep Minimalism**, utilizing:
- **Atmospheric Depth:** A transition from "bone and stone" to "obsidian and moss," using dark earthy tones to reduce eye strain.
- **Luminous Accents:** Brand colors (greens and browns) are shifted to higher-vibrancy tints to act as beacons against the dark background.
- **Focused Precision:** High-contrast typography and razor-sharp structural lines ensure data remains the focal point within the immersive environment.
- **Technical Sophistication:** The UI feels like a high-end command center for ecological monitoring or precision resource management.

## Colors

The dark mode palette replaces light neutrals with deep, chromatic greys infused with forest hues. This "Deep Sylvan" approach ensures the interface doesn't feel cold or "pure black," but rather organic and alive.

- **Primary (Pale Moss):** A desaturated, light green (#b8cda7) that provides excellent contrast against dark backgrounds. Used for high-priority actions and active states.
- **Secondary (Toasted Clay):** A warm, earthy accent (#e8bea2) used to distinguish specialized categories or highlights.
- **Tertiary (Silt):** A neutral, warm taupe (#d8c3b2) for subtle borders and secondary UI elements.
- **Neutral (Midnight Forest):** The base layers transition from a deep near-black (#111411) for the lowest surfaces to a slightly lighter moss-grey (#232622) for containers.
- **Status Colors:** Errors use a vibrant "Moss Red" (#ffb4ab) and warnings use "Golden Leaf" (#dec370) to ensure immediate visibility against the dark canvas.

## Typography

The typography system remains anchored in the dual-font pairing of **Manrope** and **Work Sans**, but color contrast is prioritized.

- **Manrope (Headlines):** Provides a clean, geometric structure for the dark UI. Headers should primarily use the `on-surface` color (#e2e3df) to ensure maximum readability.
- **Work Sans (Body & Labels):** Optimized for legibility in dark mode; its open apertures prevent "ink bleed" or blurring effects often found in light-on-dark text.

**Visual Hierarchy:**
- **On-Surface High Emphasis:** Used for primary body text and headlines.
- **On-Surface Variant (Medium Emphasis):** Used for supporting text and descriptions, shifted toward a darker grey-green to create depth.
- **Label-MD:** Always rendered in uppercase with tracking for functional metadata and table headers.

## Layout & Spacing

This design system uses a **Fixed Grid** for central content and fluid containers for peripheral UI elements, such as sidebars and utility panels.

- **Grid:** A 12-column grid with a 1440px max-width provides a stable desktop experience.
- **Vertical Rhythm:** A strict 4px baseline grid ensures alignment across all text and component heights.
- **Desktop Layout:** Content is often framed by "Midnight" sidebars, which are slightly darker than the main content area to provide clear structural boundaries.
- **Mobile Adaption:** For screens below 768px, the grid collapses to a single column, and horizontal margins are tightened to 16px.

## Elevation & Depth

In dark mode, depth is created through **Tonal Layering** and **Luminous Borders** rather than traditional shadows, which are less visible on dark backgrounds.

- **Level 0 (Base):** Deepest background (#111411), used for the application canvas.
- **Level 1 (Default Surface):** Slightly elevated (#1a1c1a), used for main content cards and navigation sidebars.
- **Level 2 (Active Containers):** The surface-container (#232622), used for nested elements or hovering states.
- **Borders as Depth:** Low-contrast outlines using `outline` (#8e9287 at 20% opacity) define the edges of cards.
- **Focus States:** A 2px glow or solid border in Primary (#b8cda7) is used to denote active interaction points.

## Shapes

The shape language is **Rounded (0.5rem base)**, maintaining the "Sylvan" organic feel while adhering to professional desktop standards.

- **Standard Components:** Buttons, inputs, and list items use 0.5rem (8px) for a balanced, approachable look.
- **Large Layout Blocks:** Cards and modal dialogs use `rounded-xl` (1.5rem) to create a distinct, modern silhouette.
- **Precision Elements:** Progress indicators and internal dividers use a 2px radius to maintain a technical edge.
- **Iconography:** Strokes should be 1.5px or 2px with rounded terminals to mirror the Manrope font geometry.

## Components

### Buttons
- **Primary:** Solid Moss Green (#b8cda7) with dark forest text (#24361a). This provides the highest contrast action point.
- **Secondary:** Outlined in Tertiary (#d8c3b2) with matching text for supporting actions.
- **Ghost:** Text-only in Primary, used for utility links and navigation.

### Input Fields
- **Background:** Surface-container-high (#2b2f2a).
- **Border:** 1px in `outline-variant`.
- **Focus:** 2px Primary border with a subtle moss-tinted outer glow.

### Cards
- Surfaces are `surface-container` (#232622) with a 1px border at low opacity.
- Header sections within cards may use a subtle Earthy Brown (#e8bea2) tint for the icon or label to provide warmth.

### Navigation
- Sidebar uses the `surface-dim` (#111411) background.
- Active items are indicated by a Primary color vertical bar and a subtle background highlight.

### Data Tables
- Headers use a `surface-container-highest` background with Uppercase Label-MD text.
- Row dividers are kept extremely subtle (1px, 10% opacity) to prevent visual noise in dense data views.