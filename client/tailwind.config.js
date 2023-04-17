/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'gradient-custom': "linear-gradient(to right, rgba(108,172,228, 0.4), rgba(108,172,228, 1)), url('/reig.png')",
      },
      height: {
        '10v': '10vh',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      flexDirection: {
        'row-sm': 'row',
        'col-sm': 'column',
        'row-md': ['row', {'min-width': '768px'}],
        'col-md': ['column', {'min-width': '768px'}],
      },
      skew: {
        '45': '45deg',
      },
    },
  },
  plugins: [],
}