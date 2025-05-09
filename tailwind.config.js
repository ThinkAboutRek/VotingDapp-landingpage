/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4DAFFB",//4DAFFB new -- 6A3FD7 old
        secondary: "#0D68BD", //0D68BD new --- 77177A old
        black: {
          DEFAULT: "#000000",
          50: "#B8B8B8",
          100: "#ADADAD",
          200: "#999999",
          300: "#858585",
          400: "#707070",
          500: "#5C5C5C",
          600: "#282828",
          700: "#181818",
          800: "#0F0F0F",
          900: "#0A0A0A",
          950: "#000000",
        },
        dark: "#161321",
      },
      screens: {
        xs: "414px",
      },
      gridTemplateColumns: {
        two: "repeat(auto-fit, minmax(min(400px, 100%), 1fr))",
        four: "repeat(auto-fit, minmax(min(230px, 100%), 1fr))",
      },
      fontFamily: {
        gotham: ["gotham", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [],
};
