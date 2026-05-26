---
name: HydroSync Digital
colors:
  surface: "#f9f9fc"
  surface-dim: "#dadadc"
  surface-bright: "#f9f9fc"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f3f3f6"
  surface-container: "#eeeef0"
  surface-container-high: "#e8e8ea"
  surface-container-highest: "#e2e2e5"
  on-surface: "#1a1c1e"
  on-surface-variant: "#414755"
  inverse-surface: "#2f3133"
  inverse-on-surface: "#f0f0f3"
  outline: "#717786"
  outline-variant: "#c1c6d7"
  surface-tint: "#005bc1"
  primary: "#0058bc"
  on-primary: "#ffffff"
  primary-container: "#0070eb"
  on-primary-container: "#fefcff"
  inverse-primary: "#adc6ff"
  secondary: "#45645e"
  on-secondary: "#ffffff"
  secondary-container: "#c7eae1"
  on-secondary-container: "#4b6a63"
  tertiary: "#595c5e"
  on-tertiary: "#ffffff"
  tertiary-container: "#727577"
  on-tertiary-container: "#fbfdff"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#d8e2ff"
  primary-fixed-dim: "#adc6ff"
  on-primary-fixed: "#001a41"
  on-primary-fixed-variant: "#004493"
  secondary-fixed: "#c7eae1"
  secondary-fixed-dim: "#accec5"
  on-secondary-fixed: "#00201b"
  on-secondary-fixed-variant: "#2d4c46"
  tertiary-fixed: "#e0e3e5"
  tertiary-fixed-dim: "#c4c7c9"
  on-tertiary-fixed: "#191c1e"
  on-tertiary-fixed-variant: "#444749"
  background: "#f9f9fc"
  on-background: "#1a1c1e"
  surface-variant: "#e2e2e5"
typography:
  display-xl:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: "700"
    lineHeight: 80px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: "600"
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: "600"
    lineHeight: 40px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: "500"
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
  unit: 8px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  max-width: 1440px
---

## Brand & Style

The brand personality is high-performance, clinical, and avant-garde. It targets tech-conscious individuals who view hydration as a vital data point in their wellness stack. The UI evokes a sense of "technological purity"—combining the sterile, architectural precision of modern structural design with the soft, ethereal glow of medical-grade technology.

This design system utilizes a hybrid of **Corporate Modern** and **Glassmorphism**. It focuses on structural integrity through rigid grid alignment while introducing a "living" quality through subtle background blurs and luminous gradients that mimic the smart LED indicators of the hardware product.

## Colors

The palette is anchored by **Glacial White** (#F8FAFC) to provide a clean, clinical foundation. **Arctic Blue** (#007AFF) serves as the primary action color, representing the water and the digital connection. **Sage Green** (#84A59D) is used for secondary accents, signifying health and natural balance. **Graphite** (#1A1C1E) provides deep contrast for typography and structural elements, ensuring readability against the high-brightness backgrounds.

Gradients should be used sparingly to create "glow" effects, typically transitioning from a semi-transparent Arctic Blue to a clear Glacial White to simulate light passing through liquid.

## Typography

The typography strategy emphasizes precision and modernism. **Hanken Grotesk** is used for headlines to provide a sharp, contemporary edge with excellent geometric balance. **Inter** handles body copy for maximum legibility across data-heavy interfaces. **JetBrains Mono** is introduced for labels and technical data points (e.g., fluid volume, sync timestamps) to reinforce the smart-tech, "synced" nature of the product.

Large display type should utilize tight letter-spacing to mimic architectural branding, while labels should be all-caps with generous tracking for a technical, instrument-panel feel.

## Layout & Spacing

This design system employs a **Fixed Grid** model on desktop and a **Fluid Grid** on mobile. The desktop layout is centered on a 12-column grid with a maximum width of 1440px, utilizing "generous whitespace" to allow the architectural imagery to breathe.

Spacing follows a strict 8px linear scale. Large sections should be separated by significant vertical padding (80px–120px) to create a premium, editorial feel. On mobile, the grid collapses to 4 columns with margins reduced to 20px, maintaining the high-contrast separation of elements.

## Elevation & Depth

Hierarchy is achieved through **Glassmorphism** and **Tonal Layers** rather than heavy shadows.

- **Surface Level:** Glacial White background.
- **Mid-Level (Cards):** Translucent white with a 20px backdrop blur and a 1px soft Graphite outline (10% opacity).
- **Interactive Level:** Elements use a "soft glow" shadow—a diffused primary color tint (#007AFF at 15% opacity) with a large blur radius (32px) to simulate the bottle's LED lighting.
- **Depth:** Avoid black shadows. Use tinted shadows that match the background to maintain the "clean and airy" aesthetic.

## Shapes

The shape language is "Softly Architectural." We use a base 0.5rem (8px) radius for most UI components (cards, inputs) to maintain a professional structure. High-interaction elements like primary buttons and status chips utilize "Pill-shaped" (rounded-full) corners to suggest the ergonomic curves of the water bottle hardware. Lists and containers should remain strictly geometric to anchor the layout.

## Components

- **Buttons:** Primary buttons are pill-shaped, filled with Arctic Blue, using white Hanken Grotesk medium weight. Secondary buttons use a glassmorphic style with a subtle white border.
- **Input Fields:** Minimalist lines with bottom-only borders are preferred for a clean look, or fully enclosed fields with a very light Glacial White fill and Sage Green focus states.
- **Cards:** Use "Glass-Cards" for feature highlights—white background at 60% opacity with a 16px backdrop blur.
- **Status Indicators:** Use glowing circular "LED" dots to indicate sync status or hydration goals, utilizing the soft-glow shadow technique.
- **Data Visualization:** Line charts should be thin (1.5px) and use Arctic Blue, with a soft Sage Green gradient fill beneath the curve to represent liquid volume.
