module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "red-750": "#af0808"
        // Ici vos couleurs exportées de Figma
      },
      "fontFamily": {
        "radio-canada": "Radio Canada",
        "tapestry": "Tapestry"
        // Ici vos familles de polices exportées de Figma
        // Ne pas oublier de les charger dans '/index.html' !
      },
    },

  },
  plugins: [],
}
