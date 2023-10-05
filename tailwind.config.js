module.exports = {
  content: ["./src/scss/**/*.scss", "./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#c70a0b",
          100: "#f2d2ce",
          200: "#f4eae3",
        },
        secondary: {
          100: "#e6e7e9",
          200: "#c6d5dc",
          300: "#9eaec7",
          400: "#79879f",
        },
        dark: "#212529",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
};
