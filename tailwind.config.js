/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#4CAF50",
        secondary: "#FFC107",
        background: "#F5F5F5",
        accent: "#FF7043",
        text: "#333333",
        link: "#0288D1",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
