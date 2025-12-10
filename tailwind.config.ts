import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        probemas: {
          bg: "#050B1E",
          bgSoft: "#0B1229",
          primary: "#FFC700",
          primarySoft: "#F3B831",
          accent: "#FF5B57",
          text: "#FDFDFD",
          muted: "#A5ADC8",
        },
      },
      fontFamily: {
        sans: ["var(--font-raleway)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;

