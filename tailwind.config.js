/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '180': '180px',
        '514': '514px',
        '400': '400px',
        '270': '270px',
        '130': '130px',
        '150': '150px',
        '120': '120px',
        '60' : '60px',
        '50' : '50px',
        '40' : '40px',
        '30' : '30px',
        '25' : '25px',
        '15' : '15px',
        '10' : '10px',
        '900': '900px',
        '980': '980px',
        '640': '640px',
        '1400': '1400px',
        '1780': '1780px',
        '160': '160px',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'regal-green': '#365a31',
      }
    },
  },
  plugins: [],
}

