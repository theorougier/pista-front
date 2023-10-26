/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: { "my-image": "url('/public/images/background.svg')" },
    },
    colors: {
      white: "#ffffff",
      "purple-dark": "#8f00ff",
      "purple-light": "#db00ff",
      orange: "#FF9A3E",
      blue: "#3378FF",
    },
  },
  plugins: [],
};
