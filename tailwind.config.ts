import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": "var(--main)",
        "primarydark": "var(--primary-dark)",
        "primarydark80": "var(--primary-dark-80)",
        "primarydark50": "var(--primary-dark-50)",
        "secondary": "var(--secondary)",
      }
    },
  },
  plugins: [],
};
export default config;
