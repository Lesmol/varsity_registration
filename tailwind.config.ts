import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
        "medium-dark-brown": "#903E22",
        "dark-brown": "#35170D",
        "btn-brown": "#BB5B3B",
        "input-brown": "#F1D0C5",
        "btn-dark-brown": "#1D0C07",
      },
      colors: {
        primary: "#F3F1EB",
        search: "#8C7E54",
        brown: "#E07C5B",
        "dark-brown": "#35170D",
        "input-brown": "#BB5B3B",
      },
      boxShadow: {
        "3xl": "0 0px 40px -15px rgba(226, 155, 131, 0.40)",
        custom: "-5px 5px 0 0 rgba(53, 23, 13, 1)",
      },
      maxWidth: {
        maximum: "1800px",
      },
      backgroundImage: {
        "login-pattern": "url('/SVG/login.svg')",
        "register-pattern": "url('/SVG/register.svg')",
      },
      aspectRatio: {
        "3/4": "3 / 4",
      },
    },
  },
  plugins: [],
};
export default config;
