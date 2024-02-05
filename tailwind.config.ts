import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundColor: {
        primary: "#F3EEE2",
        "lighter-primary": "#F3F1EB",
        "medium-brown": "#5E2917",
        "dark-brown": "#35170D",
        "btn-brown": "#BB5B3B",
      },
      colors: {
        primary: "#F3F1EB",
        search: "#8C7E54",
        brown: "#E07C5B",
        "dark-brown": "#35170D",
      },
    },
  },
  plugins: [],
};
export default config;
