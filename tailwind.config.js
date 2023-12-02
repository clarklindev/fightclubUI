/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-color-scheme="dark"]'],
  safelist: [
    {
      pattern: /^(gap-|space-|p-|m-|w-|h-|border-|before:h-|before:w-)/,
    },
  ],
  theme: {
    extend: {
      animation: {
        'spin-fast': 'spin 0.3s linear infinite',
      },
    },
  },
  plugins: [],
};
