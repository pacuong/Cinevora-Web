/** @type {import('tailwindcss').Config} */
import { colors } from "./src/themes/colors";
import { screens } from "./src/themes/screens";
import { fontSize } from "./src/themes/fontSize.ts";
import { fontFamily } from "./src/themes/fontFamily.ts";
import { spacing } from "./src/themes/spacing.ts";

export default {
  content: ["index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    spacing,
    extend: {},
    screens,
    colors,
    fontSize,
    fontFamily,
  },
  plugins: [],
};
