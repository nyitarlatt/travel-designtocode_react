module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        travelYellow: "#F1A501",
        travelPink: "#DF6951",
        travelRed: "#FF946D",
        travelText: "#181E4B",
        travelTextLight: "#5E6282",
        travelBlack: "#080809",
        travelBlueLight: "#DFD7F9",
        travelBlue: "#006380",
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
        volkhov: ["'Volkhov'", "serif"],
        opensans: ["'Open Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
}; 
