/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat'],
      'poppins': ['Poppins']
    },
    extend: {
      backgroundImage: {
        'main-bg': "url('../images/Login_Desktop_BG.png')"
      },
      colors: {
        'main-red': '#DC715C',
        'main-dark-blue': '#0D0F33',
        'main-light-blue': '#0D89C7',
        'main-white': '#fff',
        'main-off-white': '#E5E4E2',
        'main-low-opacity': 'rgba(14, 15, 34, 0.71)'
      }
      
    },
  },
  plugins: [],
}
