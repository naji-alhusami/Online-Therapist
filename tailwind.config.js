/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        md: '865px', // Medium breakpoint starts at 768px
      },
    },
  },
  plugins: [],
};
