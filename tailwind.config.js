/** @type {import('tailwindcss').Config} */
export const darkMode = "class"; // Add this line at the top level

export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];

export const theme = {
  extend: {
    colors: {
      primary: "#1d4ed8",
      secondary: "#64748b",
      accent: "#f59e42",
    },
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
    },
  },
};

export const plugins = []; // keep this empty or add actual plugins here
