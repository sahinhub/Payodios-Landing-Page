/** @type {import('tailwindcss').Config} */
import animate from "tailwindcss-animate";
import twAnimate from "tw-animate-css";
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "animate-fade-in",
    "animate-slide-up",
    "animate-blur-in",
    "animate-count-up",
  ],
  theme: {
    extend: {
      // Font families
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)", "var(--font-sans)"],
      },
      // Colors from CSS variables
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        card: "var(--color-card)",
        "card-foreground": "var(--color-card-foreground)",
        popover: "var(--color-popover)",
        "popover-foreground": "var(--color-popover-foreground)",
        primary: "var(--color-primary)",
        "primary-foreground": "var(--color-primary-foreground)",
        secondary: "var(--color-secondary)",
        "secondary-foreground": "var(--color-secondary-foreground)",
        muted: "var(--color-muted)",
        "muted-foreground": "var(--color-muted-foreground)",
        accent: "var(--color-accent)",
        "accent-foreground": "var(--color-accent-foreground)",
        destructive: "var(--color-destructive)",
        border: "var(--color-border)",
        input: "var(--color-input)",
        ring: "var(--color-ring)",
        sidebar: "var(--color-sidebar)",
        "sidebar-foreground": "var(--color-sidebar-foreground)",
        "sidebar-primary": "var(--color-sidebar-primary)",
        "sidebar-primary-foreground": "var(--color-sidebar-primary-foreground)",
        "sidebar-accent": "var(--color-sidebar-accent)",
        "sidebar-accent-foreground": "var(--color-sidebar-accent-foreground)",
        "sidebar-border": "var(--color-sidebar-border)",
        "sidebar-ring": "var(--color-sidebar-ring)",

        // 🔹 Add your custom ones here
        "custom-primary": "var(--custom-primary)",
        "custom-primary-600": "var(--custom-primary-600)",
        "custom-bg": "var(--custom-bg)",
        "custom-surface": "var(--custom-surface)",
        "custom-text": "var(--custom-text)",
        "custom-muted": "var(--custom-muted)",
      },
      // Border radius scales
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      // Keyframes for animations
      keyframes: {
        tl__fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        tl__slideUp: { "0%": { transform: "translateY(40px)", opacity: "0" }, "100%": { transform: "translateY(0)", opacity: "1" } },
        tl__blurIn: { "0%": { filter: "blur(10px)", opacity: "0" }, "100%": { filter: "blur(0)", opacity: "1" } },
        countUp: { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
      },
      // Animation shortcuts
      animation: {
        "fade-in": "tl__fadeIn 1.2s ease-out forwards",
        "slide-up": "tl__slideUp 1s ease-out forwards",
        "blur-in": "tl__blurIn 1.5s ease-out forwards",
        "count-up": "countUp 0.8s ease-out forwards",
      },
    },
  },
  plugins: [animate, twAnimate],
};
