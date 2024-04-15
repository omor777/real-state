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
        primary: "#5EA51D",
        secondary: "#EE5A24",
        "sky-80": "#0CA5B1cc",
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        home1:
          "linear-gradient(to bottom right, rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url('https://i.ibb.co/SXn8DzS/isaac-quesada-1mvr-Y8os-Yk-M-unsplash-1.jpg')",
        home2:
          "linear-gradient(to bottom right, rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url('https://i.ibb.co/6DmQV3k/naomi-hebert-MP0bga-S-d1c-unsplash-1.jpg')",
        home3:
          "linear-gradient(to bottom right, rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url('https://i.ibb.co/cysWfh2/outsite-co-R-LK3sq-Li-Bw-unsplash-1.jpg')",
        home4:
          "linear-gradient(to bottom right, rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url('https://i.ibb.co/nzZTRn2/pexels-pixabay-534151.jpg')",
        home5:
          "linear-gradient(to bottom right, rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url('https://i.ibb.co/7JKk7GY/kara-eads-L7-Ew-Hkq1-B2s-unsplash-1.jpg')",
        home6:
          "linear-gradient(to bottom right, rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url('https://i.ibb.co/4FqL511/pexels-pixabay-271624.jpg')",

        slider1:
          "linear-gradient(to bottom right, rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url('https://i.ibb.co/n7qtmcc/slider1.jpg')",
        slider2:
          "linear-gradient(to bottom right, rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url('https://i.ibb.co/RSbcfsj/slider2.jpg')",
        slider3:
          "linear-gradient(to bottom right, rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url('https://i.ibb.co/4fyPY2b/slider3.jpg')",
      },
      boxShadow: {
        navShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
        cardShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
    },
  },
  plugins: [require("daisyui")],
};
