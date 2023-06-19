/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: {
  //   content: ['./src/**/*.{vue,js,ts,tsx}', './public/index.html'],
  // },
  content: ['./src/App.vue', './src/**/*.{vue,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2F88FF',
        secondary: '#4a5568',
      },
      backgroundImage: {
        'hero-pattern': "url('/wallerbg.png')",
        btn: "url('/btn.png')",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
