/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './*.html',  // This is for all HTML files in the root directory
      './src/**/*.{html,js,jsx,ts,tsx}',  // This will include all HTML, JS, JSX, TS, and TSX files in the src directory
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  