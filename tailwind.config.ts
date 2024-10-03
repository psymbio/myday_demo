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
        background: "var(--background)",
        foreground: "var(--foreground)",
        hsbcred: "var(--hsbcred)",
        hsbcreddark: "var(--hsbcreddark)",
      },
      // Override the default red-600
      backgroundColor: {
        'red-600': "var(--hsbcred)",
        'red-700': "var(--hsbcreddark)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
