import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background": "url(../public/images/background.png)",
      },
      colors: {
        background: "url(../public/images/background.png)",
        foreground: "url(../public/images/background.png)",
      },
    },
  },
  plugins: [],
};
export default config;
