import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Krub", "Helvetica Neue", "Arial", "sans-serif"],
      serif: ["NewTitle", "Georgia", "serif"],
    },
    extend: {
      fontSize: {
        "less-big": ["10rem", "8rem"],
        big: ["11rem", "9rem"],
        bigger: ["12rem", "10rem"],
      },
      colors: {
        "light-blueish": "#3866f5",
        "dark-blueish": "#091c45",
        "darker-blueish": "#091D45",
        "blueish-gray": "#0E275C",
      },
    },
  },
  plugins: [],
};
export default config;
