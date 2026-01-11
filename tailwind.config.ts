import type { Config } from "tailwindcss";
import { palette } from "./src/lib/palette";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Map the new palette to Tailwind
        primary: {
          light: palette.primary.light,
          DEFAULT: palette.primary.main,
          dark: palette.primary.dark,
          contrast: palette.primary.contrastText,
        },
        secondary: {
          light: palette.secondary.light,
          DEFAULT: palette.secondary.main,
          dark: palette.secondary.dark,
          contrast: palette.secondary.contrastText,
        },
        probemas: {
          // Keep these for backward compatibility if needed, or update them to new values
          bg: palette.colors.background,
          bgSoft: palette.colors.section,
          primary: palette.secondary.main,
          primarySoft: palette.secondary.light,
          accent: palette.error.main,
          text: palette.text.secondary,
          muted: palette.text.primary,
        },
        ...palette.colors, // Spread all the specific colors
        success: palette.success.main,
      },
      backgroundColor: {
        default: palette.background.default,
        paper: palette.background.paper,
        ...palette.backgrounds,
      },
      textColor: {
        primary: palette.text.primary,
        secondary: palette.text.secondary,
        disabled: palette.text.disabled,
        hint: palette.text.hint,
      },
      fontSize: {
        // Map specific typography sizes
        'title-desktop': '64px',
        'h1-desktop': '40px',
        'h2-desktop': '32px',
        'h3-desktop': '28px',
        'h4-desktop': '24px',
        'h5-desktop': '20px',
        'h6-desktop': '18px',
        'title-mobile': '36px',
        'h1-mobile': '32px',
        'h2-mobile': '26px',
        'h3-mobile': '22px',
        'h4-mobile': '20px',
        'h5-mobile': '16px',
      },
      fontFamily: {
        sans: ["var(--font-raleway)", "Raleway", "Open Sans", "Gilroy", "system-ui", "sans-serif"],
        raleway: ["var(--font-raleway)", "Raleway", "sans-serif"],
        chakra: ["var(--font-chakra)", "Chakra Petch", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
