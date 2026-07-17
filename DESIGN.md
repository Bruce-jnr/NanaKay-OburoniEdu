---
name: Academic Excellence System
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fa'
  on-surface: '#111c2c'
  on-surface-variant: '#44474d'
  inverse-surface: '#263142'
  inverse-on-surface: '#ebf1ff'
  outline: '#75777e'
  outline-variant: '#c5c6cd'
  surface-tint: '#515f78'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0d1c32'
  on-primary-container: '#76849f'
  inverse-primary: '#b9c7e4'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#191c1d'
  on-tertiary-container: '#828485'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#f9f9ff'
  on-background: '#111c2c'
  surface-variant: '#d8e3fa'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md-mobile:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
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
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
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
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The design system is anchored in the principles of authority, clarity, and aspiration. It serves an audience of students and professionals seeking life-changing educational opportunities, from SAT preparation to international nursing certifications. The visual language must project the reliability of an established institution while maintaining the accessibility of a modern consultancy.

The chosen style is **Corporate / Modern** with a lean toward **Minimalism**. This ensures that complex information regarding applications and exam requirements is presented in a structured, digestible manner. The aesthetic avoids unnecessary ornamentation, focusing instead on high-quality typography, generous white space, and a disciplined application of the brand's signature colors to guide the user’s journey through the educational funnel.

## Colors

The palette is designed to evoke the heritage of academic institutions while feeling contemporary and "premium."

*   **Primary (Deep Navy - #0A192F):** Used for headers, primary buttons, and foundational structural elements. It represents stability and professional depth.
*   **Secondary (Gold - #C5A059):** Used sparingly as an accent for call-to-actions, highlights, and achievement markers. It symbolizes excellence and success.
*   **Tertiary (Off-White - #F8F9FA):** Used for section backgrounds to provide subtle contrast against the pure white workspace.
*   **Neutral (Slate Grey - #4A5568):** Utilized for body text and secondary icons to ensure high legibility without the harshness of pure black.

## Typography

This design system employs a dual-font strategy to balance character with functionality.

*   **Montserrat** is used for headlines and titles. Its geometric construction provides a confident, modern, and "institutional" feel that commands attention.
*   **Inter** is used for body text, labels, and inputs. It is chosen for its exceptional legibility at small sizes and its neutral, systematic appearance, which is critical for reading lengthy application requirements or exam details.

Scale headings down for mobile devices as specified in the tokens to maintain a comfortable reading hierarchy. All caps should be reserved for `label-sm` to denote categories or overlines.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain an organized, "document-like" feel that suits educational content. 

*   **Desktop:** 12-column grid with a 1280px max-width. Content is centered. Gutters are fixed at 24px to ensure distinct separation between modules.
*   **Tablet:** 8-column fluid grid with 24px margins.
*   **Mobile:** 4-column fluid grid with 16px margins.

Spacing follows a strict 8px base unit. Vertical rhythm should be generous, particularly between sections (using 80px or 120px) to prevent the user from feeling overwhelmed by information.

## Elevation & Depth

To maintain a professional and clean aesthetic, the design system utilizes **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows.

*   **Surface Levels:** The base background is white (#FFFFFF). Cards or distinct modules use a subtle 1px border (#E2E8F0) or the Tertiary background (#F8F9FA) to define boundaries.
*   **Shadows:** When necessary (e.g., for active dropdowns or primary modals), use a single, highly diffused "Ambient Shadow": `0px 10px 30px rgba(10, 25, 47, 0.08)`. The slight navy tint in the shadow maintains color harmony.
*   **Interactive State:** On hover, elements may lift slightly using a more defined shadow or a subtle color shift in the border to Gold.

## Shapes

The shape language is **Soft**, utilizing a 4px (0.25rem) base radius. This subtle rounding removes the "sharpness" of a purely brutalist design, making the interface feel approachable and modern while retaining a serious, structured character. 

*   **Standard (0.25rem):** Buttons, input fields, and small tags.
*   **Large (0.5rem):** Cards, containers, and image masks.
*   **Extra Large (0.75rem):** Modals and featured hero sections.

## Components

*   **Buttons:** Primary buttons use the Navy background with White text. Secondary buttons use a Navy outline with Navy text. The "CTA" variant uses the Gold background with Navy text for maximum prominence.
*   **Inputs:** Fields should have a 1px border (#CBD5E0). On focus, the border transitions to Navy with a 2px width. Labels are always placed above the field in `label-md`.
*   **Cards:** Use a white background with a 1px soft grey border. For "Program Cards" (e.g., SAT Prep), use a Gold top-border (3px) to denote premium services.
*   **Chips/Tags:** Used for categories like "Exam Prep" or "Admissions." These should use the Tertiary background with `label-sm` text in Navy.
*   **Progress Indicators:** Crucial for application tracking. Use a thin Gold line to represent completed stages against a light grey track.
*   **Lists:** Educational requirements should be presented in bulleted lists with custom "Check" icons in Gold to provide a sense of accomplishment and clarity.