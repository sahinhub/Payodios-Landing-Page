/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // ensure these utility classes are always generated
  safelist: [
    "animate-fade-in",
    "animate-slide-up",
    "animate-blur-in",
    "animate-count-up",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-600": "var(--color-primary-600)",
        muted: "var(--color-muted)",
        surface: "var(--color-surface)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)", "var(--font-sans)"],
      },
      keyframes: {
        tl__fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        tl__slideUp: { "0%": { transform: "translateY(40px)", opacity: "0" }, "100%": { transform: "translateY(0)", opacity: "1" } },
        tl__blurIn: { "0%": { filter: "blur(10px)", opacity: "0" }, "100%": { filter: "blur(0)", opacity: "1" } },
        "count-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
      },
      animation: {
        "fade-in": "tl__fadeIn 1.2s ease-out forwards",
        "slide-up": "tl__slideUp 1s ease-out forwards",
        "blur-in": "tl__blurIn 1.5s ease-out forwards",
        "count-up": "count-up 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
}
