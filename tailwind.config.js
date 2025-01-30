/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,ts}', "./node_modules/flowbite/**/*.js"],
  plugins: [
    require('flowbite/plugin') // add this line
  ],
  // outras configurações
}


