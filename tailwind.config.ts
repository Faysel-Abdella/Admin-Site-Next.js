const { nextui } = require("@nextui-org/react");
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans KR", "sans-serif"],
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainBlack: "#424242",
        mainWhite: "#ffffff",
        rootBtn: "#F2A11F",
        mainGray: "#A1A9A3",
        bgYellow: "#FFF4E3",
        textYellow: "#F2A11F",
        grayBorder: "#D2D5D6",
        grayText: "#A2ABAF",
        activeLink: "#424242",
        blue: "#6D8EEB",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
