/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /^(gap-|space-|p-|m-|w-|h-|border-|b-|before:border-|after:border-)/,
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
