module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'main': '#3E6EB1',
        'sec': '#E5F0FF',
        'sup': '#45BFBF'
      }
    },
  },
  plugins: [],
}