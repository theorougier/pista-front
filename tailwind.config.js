/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: { "my-image": "url('/public/images/background.svg')" },
    },
    colors: {
      white: "#ffffff",
      purple: "#8f00ff",
    },
  },
  plugins: [],
};
