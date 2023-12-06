/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-color-scheme="dark"]'],
  // usually dont need safelist, but we include it because we want to use dynamic values
  theme: {
    extend: {
      animation: {
        'spin-fast': 'spin 0.3s linear infinite',
      },
    },
  },
  plugins: [],
};
