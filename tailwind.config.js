import { PRIMARY_COLOR } from "./util/config.js";
import generatePalette from "./util/theme.js";

export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: generatePalette(PRIMARY_COLOR),
      },
    },
  },
};