/** @type {import('tailwindcss').Config} */

import { changePx } from "./src/utils/changePx";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: changePx,
      padding: changePx,
      width: changePx,
      gap: changePx,
      colors: {
        blackGreen: "#2B422A",
        lightGreen: "#D6EFD8",
      },
      animation: {
        fadeOn: "fadeIn .5s ease-in-out",
        fadeOff: "fadeOut .3s ease-in-out",
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        }
      },
    },
  },
  plugins: [],
};
