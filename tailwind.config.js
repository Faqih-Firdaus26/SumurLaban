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
        gru: "#373A40",
        dark: "#0f172a",
        secondary: "#686D76",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
