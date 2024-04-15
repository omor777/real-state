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
        primary: "#648B37",
        secondary: "#EE5A24",
        "sky-80": "#0CA5B1cc",
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        home1:
          "linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url('./src/assets/home1.jpg')",
        home2:
          "linear-gradient(to bottom right, rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url('./src/assets/home2.jpg')",
        home3:
          "linear-gradient(to bottom right, rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url('./src/assets/home3.jpg')",
        home4:
          "linear-gradient(to bottom right, rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url('./src/assets/home4.jpg')",
        home5:
          "linear-gradient(to bottom right, rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url('./src/assets/home5.jpg')",
        home6:
          "linear-gradient(to bottom right, rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url('./src/assets/home6.jpg')",
      },
      boxShadow: {
        navShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
        cardShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
    },
  },
  plugins: [require("daisyui")],
};
