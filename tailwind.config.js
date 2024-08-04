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
      margin: changePx,
      colors: {
        blackGreen: "#2B422A",
        lightGreen: "#D6EFD8",
        green: "#508D4E",
      },
    },
  },
  plugins: [],
};
