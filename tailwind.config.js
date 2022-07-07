/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif']
      },
      colors: {
        'blueprimary': '#2666CF',
        'bluesecondary': '#112B3C',
        'yellow': '#F3CA20',
        'graybackground': '#E2E5EC',
        'gray': '#CACDD3',
      }
    },
  },
  plugins: [],
}
