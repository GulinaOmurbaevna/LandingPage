/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
            'node_modules/flowbite-react/lib/esm/**/*.js'
 
  ],
  theme: {
    extend: {
      colors: {
        redPink: '#f53955' 
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}