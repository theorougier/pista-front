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
      purple: "#db00ff",
    },
  },
  plugins: [],
};
