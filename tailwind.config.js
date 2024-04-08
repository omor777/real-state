/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1170px",
    },

    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#0CA5B1",
        "purple-10": "#6969EB",
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        navShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
      },
    },
  },
  plugins: [require("daisyui")],
};
