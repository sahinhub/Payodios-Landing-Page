/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enable dark mode switching
  content: [
    "./index.html",           // if you use index.html
    "./src/**/*.{js,ts,jsx,tsx}", // scan all React/TS/JS files
  ],
  safelist: [
    "animate-fade-in",
    "animate-slide-up",
    "animate-blur-in",
    "animate-count-up",
  ],
  theme: {
    extend: {
      // 🔹 Colors from your CSS variables
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        primary: "var(--color-primary)",
        "primary-foreground": "var(--color-primary-foreground)",
        secondary: "var(--color-secondary)",
        "secondary-foreground": "var(--color-secondary-foreground)",
        muted: "var(--color-muted)",
        "muted-foreground": "var(--color-muted-foreground)",
        surface: "var(--color-surface)",
        // custom ones
        "custom-primary": "var(--custom-primary)",
        "custom-primary-600": "var(--custom-primary-600)",
        "custom-bg": "var(--custom-bg)",
        "custom-surface": "var(--custom-surface)",
        "custom-text": "var(--custom-text)",
        "custom-muted": "var(--custom-muted)",
      },

      // 🔹 Font families
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)", "var(--font-sans)"],
      },

      // 🔹 Border radius from CSS vars
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },

      // 🔹 Animations
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        blurIn: {
          "0%": { filter: "blur(10px)", opacity: "0" },
          "100%": { filter: "blur(0)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fadeIn 1.2s ease-out forwards",
        "slide-up": "slideUp 1s ease-out forwards",
        "blur-in": "blurIn 1.5s ease-out forwards",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tw-animate-css"),
  ],
};
