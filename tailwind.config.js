/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      railway: ["raleway"],
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
