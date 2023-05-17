/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      turquoise: {
        100: "#40E0D0",
        200: "#AFEEEE",
        300: "#08E8DE",
        400: "#48D1CC",
        500: "#00CED1",
      },
    },
    clipPath: {
      mypolygon: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)",
    },
  },
  plugins: [
    require("tailwind-clip-path"),
  ],
};
