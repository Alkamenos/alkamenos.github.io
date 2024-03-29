const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#214ECF",
        primary_light: "#bbd2ff",
        secondary: "#C7FF84",
        secondary_light: "#E5FEC7",
        secondary_dark: "#394726",
      },
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" },
      },
      spacing: {
        "44": "11rem",
        "60": "15rem",
      },
      letterSpacing: {
        widy: "0.010em",
      },
      fontSize: {
        "1xl": "1.35rem",
        "2_5xl": "1.65rem",
      },
      fontFamily: {
        body: ["Overpass", ...defaultTheme.fontFamily.sans],
        header: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
}
