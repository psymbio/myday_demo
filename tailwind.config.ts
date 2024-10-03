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
      // Use custom colors for form inputs
      backgroundColor: {
        "checkbox-bg": "var(--background)",
        "checkbox-border": "#bbbbbb",
        "checkbox-checked": "var(--hsbcred)",
        "checkbox-border-checked": "var(--hsbcreddark)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
