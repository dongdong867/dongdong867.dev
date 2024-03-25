import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "mac-light": "url('/mac/background-light.png')",
        "mac-dark": "url('/mac/background-dark.png')",
      },
      colors: {
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        background: "rgb(var(--background) / <alpha-value>)",
        white: "rgb(var(--white) / <alpha-value>)",
        black: "rgb(var(--black) / <alpha-value>)",
        red: "rgb(var(--red) / <alpha-value>)",
        orange: "rgb(var(--orange) / <alpha-value>)",
        yellow: "rgb(var(--yellow) / <alpha-value>)",
        green: "rgb(var(--green) / <alpha-value>)",
        mint: "rgb(var(--mint) / <alpha-value>)",
        teal: "rgb(var(--teal) / <alpha-value>)",
        cyan: "rgb(var(--cyan) / <alpha-value>)",
        blue: "rgb(var(--blue) / <alpha-value>)",
        indigo: "rgb(var(--indigo) / <alpha-value>)",
        purple: "rgb(var(--purple) / <alpha-value>)",
        pink: "rgb(var(--pink) / <alpha-value>)",
        brown: "rgb(var(--brown) / <alpha-value>)",
        gray: "rgb(var(--gray) / <alpha-value>)",
        gray2: "rgb(var(--gray2) / <alpha-value>)",
        gray3: "rgb(var(--gray3) / <alpha-value>)",
        gray4: "rgb(var(--gray4) / <alpha-value>)",
        gray5: "rgb(var(--gray5) / <alpha-value>)",
        gray6: "rgb(var(--gray6) / <alpha-value>)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "sliding-top": {
          "0%, 40%": { transform: "translateY(50%)", opacity: "100" },
          "60%, 100%": { transform: "translateY(-50%)", opacity: "0" },
        },
        "sliding-down": {
          "0%, 40%": { transform: "translateY(50%)", opacity: "0" },
          "60%, 100%": { transform: "translateY(-50%)", opacity: "100" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "sliding-top": "sliding-top 2s ease-in-out infinite alternate",
        "sliding-down": "sliding-down 2s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), "prettier-plugin-tailwindcss"],
} satisfies Config;

export default config;
