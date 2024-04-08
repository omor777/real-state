/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1220px",
    },

    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#0CA5B1",
        secondary: "#EE5A24",
        "sky-80": "#0CA5B1cc",
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        navShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
        cardShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
    },
  },
  plugins: [require("daisyui")],
};
