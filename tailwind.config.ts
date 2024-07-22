import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Krub", "sans-serif"],
      serif: ["NewTitle", "serif"],
    },
    extend: {
      fontSize: {
        big: ["11rem", "9rem"],
      },
      colors: {
        redish: "#ed1547",
        "light-blueish": "#3866f5",
        "dark-blueish": "#091c45",
      },
    },
  },
  plugins: [],
};
export default config;
