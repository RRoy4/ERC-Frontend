/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'gradient-x': 'gradientX 3s ease infinite',
      },
      keyframes: {
        gradientX: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
      },
      backgroundSize: {
        '200': '200% 200%',
      },
      fontFamily: {
        body: ['"Atkinson Hyperlegible"', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        slogan: ['"Bebas Neue"', 'sans-serif'], // Added for direct use as 'font-bebas'
      },
    },
  },
  plugins: [],
};
