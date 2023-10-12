import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: "hsl(0, 100%, 74%)",
          green: "hsl(154, 59%, 51%)",
        },
        accent: {
          blue: "hsl(248, 32%, 49%)",
        },
        neutral: {
          dark: "hsl(249, 10%, 26%)",
          gray: "hsl(246, 25%, 77%)",
        },
      },
      backgroundImage: {
        mobile: "url('/images/bg-intro-mobile.png')",
        desktop: "url('/images/bg-intro-desktop.png')",
      },
      boxShadow: {
        red: "0 8px 0 hsl(0 60% 58% / 0.5)",
        green: "0 4px 0 hsl(154 59% 41% / 0.8)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
