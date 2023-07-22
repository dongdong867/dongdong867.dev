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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",

        red: "var(--red)",
        orange: "var(--orange)",
        yellow: "var(--yellow)",
        green: "var(--green)",
        mint: "var(--mint)",
        teal: "var(--teal)",
        cyan: "var(--cyan)",
        blue: "var(--blue)",
        indigo: "var(--indigo)",
        purple: "var(--purple)",
        pink: "var(--pink)",
        brown: "var(--brown)",
        neutral: "var(--neutral)",
        black: "var(--black)",
        white: "var(--white)",

        gray: "var(--gray)",
        systemGray2: "var(--systemGray2)",
        systemGray3: "var(--systemGray3)",
        systemGray4: "var(--systemGray4)",
        systemGray5: "var(--systemGray5)",
        systemGray6: "var(--systemGray6)",
        systemGray7: "var(--systemGray7)",
        systemGray8: "var(--systemGray8)",
        systemGray9: "var(--systemGray9)",
        systemGray10: "var(--systemGray10)",
        systemGray11: "var(--systemGray11)",

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
