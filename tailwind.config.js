/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      colors: {
        "surface": "rgb(var(--color-surface) / <alpha-value>)",
        "surface-dim": "rgb(var(--color-surface-dim) / <alpha-value>)",
        "surface-bright": "rgb(var(--color-surface-bright) / <alpha-value>)",
        "surface-container-lowest": "rgb(var(--color-surface-container-lowest) / <alpha-value>)",
        "surface-container-low": "rgb(var(--color-surface-container-low) / <alpha-value>)",
        "surface-container": "rgb(var(--color-surface-container) / <alpha-value>)",
        "surface-container-high": "rgb(var(--color-surface-container-high) / <alpha-value>)",
        "surface-container-highest": "rgb(var(--color-surface-container-highest) / <alpha-value>)",
        "on-surface": "rgb(var(--color-on-surface) / <alpha-value>)",
        "on-surface-variant": "rgb(var(--color-on-surface-variant) / <alpha-value>)",
        "inverse-surface": "rgb(var(--color-inverse-surface) / <alpha-value>)",
        "inverse-on-surface": "rgb(var(--color-inverse-on-surface) / <alpha-value>)",
        "outline": "rgb(var(--color-outline) / <alpha-value>)",
        "outline-variant": "rgb(var(--color-outline-variant) / <alpha-value>)",
        "surface-tint": "rgb(var(--color-surface-tint) / <alpha-value>)",
        "primary": "rgb(var(--color-primary) / <alpha-value>)",
        "on-primary": "rgb(var(--color-on-primary) / <alpha-value>)",
        "primary-container": "rgb(var(--color-primary-container) / <alpha-value>)",
        "on-primary-container": "rgb(var(--color-on-primary-container) / <alpha-value>)",
        "inverse-primary": "rgb(var(--color-inverse-primary) / <alpha-value>)",
        "secondary": "rgb(var(--color-secondary) / <alpha-value>)",
        "on-secondary": "rgb(var(--color-on-secondary) / <alpha-value>)",
        "secondary-container": "rgb(var(--color-secondary-container) / <alpha-value>)",
        "on-secondary-container": "rgb(var(--color-on-secondary-container) / <alpha-value>)",
        "tertiary": "rgb(var(--color-tertiary) / <alpha-value>)",
        "on-tertiary": "rgb(var(--color-on-tertiary) / <alpha-value>)",
        "tertiary-container": "rgb(var(--color-tertiary-container) / <alpha-value>)",
        "on-tertiary-container": "rgb(var(--color-on-tertiary-container) / <alpha-value>)",
        "error": "rgb(var(--color-error) / <alpha-value>)",
        "on-error": "#690005",
        "error-container": "#93000a",
        "on-error-container": "#ffdad6",
        "primary-fixed": "#dae2fd",
        "primary-fixed-dim": "#bec6e0",
        "on-primary-fixed": "#131b2e",
        "on-primary-fixed-variant": "#3f465c",
        "secondary-fixed": "#a2eeff",
        "secondary-fixed-dim": "#2fd9f4",
        "on-secondary-fixed": "#001f25",
        "on-secondary-fixed-variant": "#004e5a",
        "tertiary-fixed": "#d3e4fe",
        "tertiary-fixed-dim": "#b7c8e1",
        "on-tertiary-fixed": "#0b1c30",
        "on-tertiary-fixed-variant": "#38485d",
        "background": "rgb(var(--color-background) / <alpha-value>)",
        "on-background": "rgb(var(--color-on-background) / <alpha-value>)",
        "surface-variant": "rgb(var(--color-surface-variant) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        "display-lg": ["Inter", "sans-serif"],
        "headline-md": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "label-sm": ["JetBrains Mono", "monospace"]
      },
      fontSize: {
        "xs": ["0.8125rem", { lineHeight: "1.25rem" }],   /* 13px */
        "sm": ["0.9375rem", { lineHeight: "1.45rem" }],   /* 15px */
        "base": ["1.0625rem", { lineHeight: "1.65rem" }], /* 17px */
        "lg": ["1.1875rem", { lineHeight: "1.75rem" }],   /* 19px */
        "xl": ["1.3125rem", { lineHeight: "1.875rem" }],  /* 21px */
        "2xl": ["1.625rem", { lineHeight: "2.125rem" }],  /* 26px */
        "3xl": ["2rem", { lineHeight: "2.375rem" }],       /* 32px */
        "4xl": ["2.5rem", { lineHeight: "2.875rem" }],     /* 40px */
        "5xl": ["3.25rem", { lineHeight: "1.15" }],        /* 52px */
        "6xl": ["4rem", { lineHeight: "1.1" }]             /* 64px */
      },
      spacing: {
        "section-gap": "120px",
        "container-max": "1280px",
        "margin-mobile": "16px",
        "gutter": "24px",
        "margin-desktop": "64px",
        "base": "8px"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "sm": "0.125rem",
        "md": "0.375rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "full": "9999px"
      }
    }
  },
  plugins: []
}
