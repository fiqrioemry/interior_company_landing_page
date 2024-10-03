/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"], // correct way to define the custom font
      },
    },
  },
  plugins: [],
};
