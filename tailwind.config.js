/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-color-scheme="dark"]'],
  // usually dont need safelist, but we include it because we want to use dynamic values
  safelist:[
    {
      pattern: /^(gap-|space-|p-|m-|w-|h-|border-|translate-x-|translate-y-)/,
      variants: ['before', 'after'],
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
