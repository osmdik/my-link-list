/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx}"],
  content: [],
  theme: {
    container: {
      padding: {
        DEFAULT: "1.5rem",
      },
    },
    extend: {
      fontFamily: {
        zenkaku: ["Zen Kaku Gothic New"],
      },
    },
  },
  plugins: [],
};
