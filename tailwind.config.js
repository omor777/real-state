/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0CA5B1",
        "purple-10": "#6969EB",
      },
    },
  },
  plugins: [require("daisyui")],
};
