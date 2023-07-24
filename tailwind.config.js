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
  plugins: [require("tailwindcss-animate")],
};
