/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      raleway: ["Raleway"],
      sans:["Open Sans"]
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
