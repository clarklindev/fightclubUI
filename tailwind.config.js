/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--clr-background)',
        color: 'var(--clr-foreground)',
        inputBackground: 'var(--input-background-color)',
        inputColor: 'var(--input-text-color)',
        borderColor: 'var(--border-color)',
      },
    },
  },
  variants: {
    extend: {
      spacing: ['responsive', 'rem'],
    },
  },
  plugins: [],
};
