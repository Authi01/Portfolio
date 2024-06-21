/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      width: {
        '7/10': '70%',
        '40': '40%',
        '60': '60%',
        '30': '30%',

      },
    },
  },
  plugins: [],
}
