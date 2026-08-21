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
        "surface": "#101415",
        "surface-dim": "#101415",
        "surface-bright": "#363a3b",
        "surface-container-lowest": "#0b0f10",
        "surface-container-low": "#191c1e",
        "surface-container": "#1d2022",
        "surface-container-high": "#272a2c",
        "surface-container-highest": "#323537",
        "on-surface": "#e0e3e5",
        "on-surface-variant": "#c6c6cd",
        "inverse-surface": "#e0e3e5",
        "inverse-on-surface": "#2d3133",
        "outline": "#909097",
        "outline-variant": "#45464d",
        "surface-tint": "#bec6e0",
        "primary": "#bec6e0",
        "on-primary": "#283044",
        "primary-container": "#0f172a",
        "on-primary-container": "#798098",
        "inverse-primary": "#565e74",
        "secondary": "#22d3ee",
        "on-secondary": "#00363e",
        "secondary-container": "#00cbe6",
        "on-secondary-container": "#00515d",
        "tertiary": "#b7c8e1",
        "on-tertiary": "#213145",
        "tertiary-container": "#06182b",
        "on-tertiary-container": "#728299",
        "error": "#ffb4ab",
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
        "background": "#0b0f10",
        "on-background": "#e0e3e5",
        "surface-variant": "#323537"
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
