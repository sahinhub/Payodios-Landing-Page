module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-600": "var(--color-primary-600)",
        muted: "var(--color-muted)",
        surface: "var(--color-surface)"
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)", "var(--font-sans)"]
      }
    }
  },
  plugins: []
}