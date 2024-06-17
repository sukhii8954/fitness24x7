/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        '600px': '600px',
      },
      screens: {
        'md': '944px',
        'sm':  '965px', // Set a custom breakpoint for screens with a minimum width of 550 pixels
      },
    },
  },
  plugins: [],

 
}

