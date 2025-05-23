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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  safelist: [
    "text-purple-300",
    "text-cyan-300",
    "text-pink-300",
    "font-semibold",
    "hover:text-white",
    "transition-colors",
    "duration-300",
    "cursor-pointer"
  ],
  plugins: [],
};

export default config;
