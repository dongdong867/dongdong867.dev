/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-Lexend)"],
        serif: ["var(--font-Lexend)"],
        mono: ["var(--font-SourceCodePro)"],
        display: ["var(--font-Montserrat)"],
        body: ["var(--font-Lexend)"],
      },
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        primary: "rgb(var(--primary))",
        secondary: "rgb(var(--secondary))",

        red: "rgb(var(--red))",
        orange: "rgb(var(--orange))",
        yellow: "rgb(var(--yellow))",
        green: "rgb(var(--green))",
        mint: "rgb(var(--mint))",
        teal: "rgb(var(--teal))",
        cyan: "rgb(var(--cyan))",
        blue: "rgb(var(--blue))",
        indigo: "rgb(var(--indigo))",
        purple: "rgb(var(--purple))",
        pink: "rgb(var(--pink))",
        brown: "rgb(var(--brown))",
        neutral: "rgb(var(--neutral))",
        black: "rgb(var(--black))",
        white: "rgb(var(--white))",

        gray: "rgb(var(--gray))",
        "gray-100": "rgb(var(--gray-100))",
        "gray-200": "rgb(var(--gray-200))",
        "gray-300": "rgb(var(--gray-300))",
        "gray-400": "rgb(var(--gray-400))",
        "gray-500": "rgb(var(--gray-500))",
        "gray-600": "rgb(var(--gray-600))",
        "gray-700": "rgb(var(--gray-700))",
        "gray-800": "rgb(var(--gray-800))",
        "gray-900": "rgb(var(--gary-900))",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      backgroundImage: {
        "title-gradient":
          "linear-gradient(90deg, rgb(var(--cyan)) 0%, rgb(var(--indigo)) 20%, rgb(var(--purple)) 40%, rgb(var(--red)/.9) 60%, rgb(var(--orange)) 80%, rgb(var(--yellow)) 100%)",
        "coming-soon-icon-gradient":
          "conic-gradient(from 0deg at 48.50% 50.00%, #000 0deg, #5A5A5A 26.24999910593033deg, #000 88.12500178813934deg, #3A3A3A 146.25deg, #000 204.37499284744263deg, #5E5E5E 268.1250071525574deg, #000 331.875deg)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    require("tailwindcss-animate"),
    require("autoprefixer"),
  ],
};
