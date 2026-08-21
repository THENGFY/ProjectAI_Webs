---
name: website-designer-pro
description: Professional web design, UI/UX architecture, and modern front-end styling guidelines for high-converting corporate, enterprise, and AI agency websites.
---

# Professional Website Designer & UI/UX Specialist Skill

This skill provides comprehensive standards, UI/UX design patterns, and front-end best practices for building state-of-the-art corporate and AI agency websites.

---

## 1. Core Visual Design Principles

### A. Color Harmony & Contrast
- **Base Canvas:** Deep, immersive dark canvas (`#0F172A`, `#0B0F10`, `#101415`) or ultra-clean crisp light mode (`#F8FAFC`, `#FFFFFF`).
- **Primary Accent / Brand Glow:** High-energy accents (`#22D3EE` cyan, `#00CBE6`, `#6366F1` indigo) reserved for primary actions, active telemetry, and interactive glows.
- **Surface Elevation (Tonal Hierarchy):**
  - Level 0: Background Canvas (`#0A1128` / `#0F172A`)
  - Level 1: Cards & Panels (`#1E293B` with `1px border: rgba(51, 65, 85, 0.5)`)
  - Level 2: Glassmorphic Modals / Floating Menus (`backdrop-filter: blur(16px)` with `rgba(30, 41, 59, 0.7)`)
  - Level 3: Active Focus / Glow states (`box-shadow: 0 0 20px rgba(34, 211, 238, 0.35)`)
- **Text Readability (WCAG AA/AAA):**
  - Headings: High contrast (`#F8FAFC` / `#E0E3E5`)
  - Body: Low-friction slate (`#94A3B8` / `#C6C6CD`)
  - Micro-labels / Meta: JetBrains Mono (`#64748B` / `#798098`)

### B. Typography Hierarchy
- **Primary Font:** `Inter` or `Plus Jakarta Sans` for clean, modern readability.
- **Monospace Accent Font:** `JetBrains Mono` or `Fira Code` for telemetry, status badges, metrics, and technical labels.
- **Tracking & Leading:**
  - Large Headings (`48px+`): Tight letter spacing (`letter-spacing: -0.02em`), line height `1.15 - 1.25`.
  - Body text (`16px - 18px`): Generous line height (`1.6 - 1.75`) for effortless scanning.
  - Labels (`11px - 13px`): Uppercase with wide tracking (`letter-spacing: 0.05em - 0.1em`).

### C. 8pt Spatial Rhythm & Layout
- All margins, paddings, and gaps must follow standard 8px multiples (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`, `120px`).
- **Max Container Width:** `1280px` (`max-w-7xl` or `max-w-container-max`).
- **Gutters:** `24px` on desktop, `16px` on mobile.

---

## 2. Component Design Standards

### 1. Global Navigation Bar
- **Positioning:** Fixed / Sticky top with glassmorphic backdrop blur (`backdrop-blur-md bg-surface/80`).
- **Elements:** Crisp logo, active page indicator (accent underline or pill), high-visibility CTA button (*"Get Started"* or *"Book Consultation"*), and mobile hamburger menu with smooth slide/fade drawer.
- **Transitions:** Subtle border-bottom opacity fade on scroll.

### 2. High-Impact Hero Section
- **Visual Hook:** Animated background mesh, subtle grid overlay (`bg-data-grid`), or radial accent glow.
- **Value Proposition:** 1 clear `H1` stating the core transformation + 1 supportive `H2`/paragraph.
- **Dual CTA:**
  - Primary: Solid high-contrast accent button with hover glow (`btn-glow`).
  - Secondary: Ghost / Outline button with subtle border highlight.
- **Social Proof / Metrics Bar:** Animated live counter numbers or real-time status chips (*"99.4% Accuracy"*, *"SOC2 Type II Certified"*).

### 3. Service & Feature Cards
- **Grid Layout:** 3-column desktop, 2-column tablet, 1-column mobile.
- **Hover Micro-Interactions:**
  - Card translateY (`transform: translateY(-4px)`).
  - Border illumination (color shifts from slate to vibrant cyan).
  - Subtle top-right icon arrow transition (`translate-x-1`).

### 4. Interactive Contact & Lead Capture Form
- **Input Fields:** Dark container inputs (`#0F172A`) with subtle 1px border.
- **Focus States:** Outer glow + accent border color on active focus.
- **WhatsApp Integration:**
  - Direct Business WhatsApp card with pre-filled inquiry text (`https://wa.me/<number>?text=...`).
  - Floating bottom-right quick chat bubble with pulse animation.
  - Clear SLA indicator (*"Typically replies in <15 mins"*).
- **Client Feedback:** Immediate visual submit feedback (loading spinner $\rightarrow$ success checkmark $\rightarrow$ toast notification).

### 5. Global Footer
- 4-column structured layout: Brand Identity & Mission, Solutions / Services, Company & Legal (Privacy, Terms, AI Ethics), and Direct Contact / Social Icons.

---

## 3. Motion & Micro-Animations

```css
/* Core Animation Tokens */
@keyframes pulseGlow {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

.btn-glow {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.btn-glow:hover {
  box-shadow: 0 0 25px rgba(34, 211, 238, 0.5);
  transform: translateY(-2px);
}
```

- Always respect user accessibility: `@media (prefers-reduced-motion: reduce)` must disable heavy parallax or infinite transforms.

---

## 4. Front-End Technical Best Practices

1. **Semantic HTML5:** Use proper `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>` tags.
2. **SEO Optimization:**
   - Single distinct `<h1>` per page.
   - Descriptive `<meta name="description">` and OpenGraph (`og:title`, `og:image`, `og:description`) tags.
3. **Accessibility (a11y):**
   - Provide `aria-label` for icon-only buttons (like WhatsApp or mobile menu toggles).
   - Ensure all input fields have associated `<label>` or explicit `aria-label`.
   - Maintain minimum color contrast ratio $\ge 4.5:1$ for body text.
4. **Performance:**
   - Optimize imagery (use WebP/AVIF format with explicit `width` and `height` attributes to eliminate Cumulative Layout Shift).
   - Lazy-load below-the-fold assets using `loading="lazy"`.

---

## 5. Vercel Deployment & Testing Checklist

- [ ] **Config Check:** Ensure `vercel.json` exists for static routing if clean URLs or redirects are needed.
- [ ] **Navigation Check:** Verify internal links (`index.html`, `AI Services.html`, `Project.html`, `Contact.html`) resolve seamlessly.
- [ ] **WhatsApp Deep Link Test:** Test `wa.me` links on mobile and desktop web browsers.
- [ ] **Responsive Breakpoint Verification:** Test at `375px` (Mobile), `768px` (Tablet), and `1440px` (Desktop).
