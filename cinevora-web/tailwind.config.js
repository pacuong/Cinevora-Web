/** @type {import('tailwindcss').Config} */
import { colors } from "./src/themes/colors.ts";
import { screens } from "./src/themes/screens.ts";
import { fontSize } from "./src/themes/fontSize.ts";
import { fontFamily } from "./src/themes/fontFamily.ts";
import { spacing } from "./src/themes/spacing.ts";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors,
      screens,
      fontSize,
      fontFamily,
      spacing,
    },
  },
  plugins: [],
};
