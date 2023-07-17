const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      body: "Work Sans",
    },


    extend: {
      content: {
        about: 'url("/img/outline-text/about.svg")',
        services: 'url("/img/outline-text/services.svg")',
        testimonials: 'url("/src/assets/img/outline-text/testimonials.svg")',
      },

      container: {
        padding: {
          DEFAULT: "1rem",
          lg: "3rem",
        },
      },

      colors: {
        bodyColor: "#212428",
        trueGray: colors.neutral,
        primary: "#4A6CF7",
        secondary: "#FFFFFF", // 1D2144
        dark: "#1D2144",
      
        paragraph: "#878e99",
      },
      boxShadow: {
        Button: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
