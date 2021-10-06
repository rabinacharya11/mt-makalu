module.exports = {
  mode:'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      screen: {
        '3xl': '2000px',
        '2sm':'768px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
