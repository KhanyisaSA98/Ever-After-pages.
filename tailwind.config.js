/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#fdf2f4',
          100: '#fbe7ea',
          200: '#f7d0d7',
          300: '#f1a8b5',
          400: '#e87588',
          500: '#dc4c63',
          600: '#c93550',
          700: '#a82742',
          800: '#8b1538',
          900: '#751734',
        },
        gold: {
          50: '#fefbf3',
          100: '#fdf4e0',
          200: '#fae6bc',
          300: '#f5d18c',
          400: '#efb85a',
          500: '#d4a574',
          600: '#c49660',
          700: '#a67c4e',
          800: '#896644',
          900: '#70543a',
        },
        cream: {
          50: '#fefefe',
          100: '#fefcf9',
          200: '#fcf8f0',
          300: '#f8f2e6',
          400: '#f5f1eb',
          500: '#f0e9db',
          600: '#e2d5c1',
          700: '#d1bfa0',
          800: '#b5a082',
          900: '#9a8569',
        },
        earth: {
          50: '#f7f4f1',
          100: '#ede6df',
          200: '#dccbb8',
          300: '#c7a987',
          400: '#b69168',
          500: '#a67f55',
          600: '#8f6a45',
          700: '#75563a',
          800: '#624734',
          900: '#563e2f',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'display': ['Crimson Text', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};