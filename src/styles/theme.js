// Groundwork design system — single source of truth for color, type, and
// spacing tokens. Both pages (and every shared component) read from this
// file instead of hardcoding hex values. The values here are mirrored into
// CSS custom properties in `theme.css` — if you change a value, change it
// in both places (or wire a build step to generate theme.css from this).

export const color = {
  // Canvas
  bg: "#FAF9F5",
  surface: "#FFFFFF",
  ink: "#1C1F1B",
  sage: "#6B7267",
  line: "#E4E1D6",
  lineStrong: "#D8D4C6",
  placeholder: "#9A9C90",
  gridLine: "#EDEAE0",

  // Brand accent
  moss: "#3F5D4A",
  mossDeep: "#334C3C",
  mossWash: "#EEF1EC",

  // Alert / negative
  brick: "#B5482E",
  brickWash: "#FBEEEA",

  // Dark theme overrides (system `prefers-color-scheme: dark`, or an
  // explicit `data-theme="dark"` on <html>)
  dark: {
    bg: "#16180F",
    surface: "#1D1F16",
    ink: "#F0EFE6",
    sage: "#9BA290",
    line: "#34362A",
    lineStrong: "#454735",
    placeholder: "#6B6D5F",
    gridLine: "#262820",
    moss: "#6E9179",
    mossDeep: "#86AB90",
    mossWash: "#232A22",
    brick: "#E38466",
    brickWash: "#2E2019",
  },

  // Fixed deep-moss panel — used by the sign-in mission panel and the
  // dashboard sidebar. Stays this shade in BOTH light and dark mode
  // (a deliberate two-tone shell), so it is not part of the light/dark
  // token swap above.
  panel: {
    bg: "#1E2D24",
    bgRaised: "#28392E",
    ink: "#F2F1E8",
    muted: "#9FB0A3",
    line: "rgba(242, 241, 232, 0.14)",
    accent: "#8FC79E",
  },
};

export const font = {
  family:
    '"Inter", "Public Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
  weight: { regular: 400, medium: 500, semibold: 600, bold: 700 },
};

// Base spacing unit — everything on the page is a multiple of 8px.
export const unit = 8;
export const space = (n) => `${n * unit}px`;

export const radius = {
  sm: "6px", // the system max — nothing on the page exceeds this
  pill: "2px",
  circle: "50%",
};

export default { color, font, unit, space, radius };
