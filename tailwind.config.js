module.exports = {
  content: ["./src/scss/**/*.scss", "./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xl: "1280px",
      lg: "1024px",
      md: "768px",
      sm: "540px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#c70a0b",
          200: "#f4eae3",
          300: "#CB8F85",
        },
        secondary: {
          DEFAULT: "#eff4f7",
          dark: "#9ab8cb",
        },
        tertiary : {
          DEFAULT: "#f6c4dd",
        },
        dark: "#212529",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
