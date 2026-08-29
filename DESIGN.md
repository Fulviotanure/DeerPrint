---
name: Sylvan Core
colors:
  surface: '#f9faf6'
  surface-dim: '#d9dad7'
  surface-bright: '#f9faf6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f0'
  surface-container: '#edeeea'
  surface-container-high: '#e7e9e5'
  surface-container-highest: '#e2e3df'
  on-surface: '#1a1c1a'
  on-surface-variant: '#444840'
  inverse-surface: '#2e312f'
  inverse-on-surface: '#f0f1ed'
  outline: '#75786f'
  outline-variant: '#c4c8bd'
  surface-tint: '#516445'
  primary: '#394b2e'
  on-primary: '#ffffff'
  primary-container: '#506344'
  on-primary-container: '#c8deb7'
  inverse-primary: '#b8cda7'
  secondary: '#785841'
  on-secondary: '#ffffff'
  secondary-container: '#fdd1b4'
  on-secondary-container: '#785841'
  tertiary: '#524437'
  on-tertiary: '#ffffff'
  tertiary-container: '#6b5b4d'
  on-tertiary-container: '#ead4c3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d3e9c2'
  primary-fixed-dim: '#b8cda7'
  on-primary-fixed: '#0f2007'
  on-primary-fixed-variant: '#3a4c2f'
  secondary-fixed: '#ffdcc5'
  secondary-fixed-dim: '#e8bea2'
  on-secondary-fixed: '#2c1605'
  on-secondary-fixed-variant: '#5d402b'
  tertiary-fixed: '#f5decd'
  tertiary-fixed-dim: '#d8c3b2'
  on-tertiary-fixed: '#25190f'
  on-tertiary-fixed-variant: '#534437'
  background: '#f9faf6'
  on-background: '#1a1c1a'
  surface-variant: '#e2e3df'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
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

The design system is built for a professional desktop application environment, focusing on precision, reliability, and an organic connection to nature. The brand personality is grounded and authoritative yet approachable—evoking the quiet confidence of a well-managed conservation project or high-end outdoor equipment interface.

The design style is **Corporate / Modern** with a refined **Minimalist** influence. It prioritizes clarity and efficiency through:
- **Functional Precision:** Clear information hierarchy and structured layouts.
- **Organic Professionalism:** Utilizing earthy, natural tones within a rigorous, systematic framework.
- **High-Density Utility:** Tailored for desktop productivity with optimized spacing and legible data presentation.
- **Calm Atmosphere:** A heavy use of neutral "bone" and "stone" whites to balance the deep forest greens.

## Colors

The palette is derived directly from the forest-inspired logo, using desaturated natural tones to ensure prolonged visual comfort during desktop use.

- **Primary (Forest Green):** Used for primary actions, success states, and brand identifiers. It represents growth and stability.
- **Secondary (Earthy Brown):** Used for accents, specialized highlights, or category distinctions. It provides warmth and a tactile, grounded feel.
- **Tertiary (Dusty Clay):** A bridge color used for subtle backgrounds, secondary borders, or disabled states.
- **Neutral (Alpine Mist):** The foundation of the UI. Backgrounds use very light, warm greys rather than pure white to reduce eye strain and maintain the "organic" narrative.
- **Status Colors:** Use a muted "Moss Red" (#A65D57) for errors and a "Golden Leaf" (#C4A456) for warnings to stay within the naturalistic gamut.

## Typography

This design system uses a dual-font strategy to balance character with utility.

- **Manrope (Headlines):** Selected for its modern, geometric construction and excellent legibility in digital interfaces. It provides a clean, contemporary voice for all structural headers.
- **Work Sans (Body & UI):** Optimized for screen readability. Its slightly wider apertures and neutral personality make it ideal for long-form data, labels, and dense desktop UI elements.

**Usage Rules:**
- Use **Display-LG** sparingly for landing pages or major dashboard overviews.
- **Label-MD** should be used for table headers and small metadata, always in uppercase with increased tracking to ensure clarity at small scales.
- Paragraph text should ideally be kept to **Body-MD** for optimal reading speed.

## Layout & Spacing

The design system employs a **Fixed Grid** model for the core content area to ensure a controlled, professional presentation on large displays, while utilizing fluid sidebars.

- **Grid System:** A 12-column grid with a max-width of 1440px for content.
- **Rhythm:** A 4px baseline grid governs all vertical spacing, ensuring a mathematically consistent flow.
- **Desktop Strategy:** Use a left-hand navigation rail (narrow) or sidebar (wide) to maximize vertical real estate. Large content blocks are separated by `xl` (40px) spacing to maintain the minimalist "breathable" feel.
- **Mobile Reflow:** On screens smaller than 768px, columns collapse into a single-column stack, and horizontal margins reduce to 16px.

## Elevation & Depth

To maintain a clean, professional aesthetic, this design system avoids heavy shadows, opting instead for **Tonal Layers** and **Low-Contrast Outlines**.

- **Surface Levels:** 
  - **Level 0 (Background):** Neutral alpine mist (#F8F9F5).
  - **Level 1 (Cards/Containers):** Pure white surfaces with a 1px border in Tertiary (#B5A191 at 30% opacity).
  - **Level 2 (Popovers/Modals):** Pure white with a very soft, ambient shadow (0px 8px 24px rgba(80, 99, 68, 0.08)).
- **Depth Cues:** Depth is primarily communicated through color shifts (darker backgrounds for sidebars) rather than physical projection.
- **Focus States:** High-contrast 2px Forest Green borders are used to denote active keyboard focus or selected items.

## Shapes

The shape language is **Soft (0.25rem)**, striking a balance between the precision of sharp corners and the friendliness of full rounding.

- **Standard Elements:** Buttons, inputs, and small cards use the base 4px radius.
- **Large Containers:** Large dashboard sections or modal windows use `rounded-lg` (8px) to soften the overall visual weight.
- **Interactive States:** Underlines and progress bars use a 2px radius for a technical, crisp finish.
- **Iconography:** Icons should feature consistent stroke weights (1.5px or 2px) with slightly rounded terminals to match the font geometry.

## Components

### Buttons
- **Primary:** Solid Forest Green (#506344) with white text. No gradient.
- **Secondary:** Outlined Forest Green or solid Earthy Brown (#8C6A52) for specific secondary actions.
- **Ghost:** Text-only in Forest Green, used for less prominent utility actions.

### Input Fields
- Background: Pure white.
- Border: 1px subtle grey-green.
- Focus: 2px Forest Green border with a soft inner glow.
- Labels: Placed above the field using **Label-MD**.

### Cards
- White background, 1px Tertiary border, and 4px corner radius.
- Use Earthy Brown (#8C6A52) for "Category" or "Tag" chips within the card to provide visual contrast against the green actions.

### Navigation
- Vertical sidebar with a slightly darker neutral background (#F0F2EB).
- Active state indicated by a 4px Forest Green vertical "indicator bar" on the left edge of the menu item and a subtle Tonal tint.

### Data Tables
- Header row uses a Tertiary background tint with uppercase **Label-MD** text.
- Row separators are 1px wide, using the Tertiary color at very low opacity.