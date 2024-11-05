// tailwind.config.js

const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enable dark mode via class
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite", // Custom animation for aurora effect
      },
      overflowWrap: {
        anywhere: 'anywhere',
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [
    function addVariablesForColors({ addBase, theme }) {
      const allColors = flattenColorPalette(theme("colors"));
      const newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );
      
      // Add the colors as CSS variables to the root element
      addBase({
        ":root": newVars,
      });
    },
  ],
};
