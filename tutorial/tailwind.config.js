/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.astro"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      base: '#EAAC57',
      primaryr: '#2B359E',
      primaryl: '#63EBD6',
      primaryrr: '#4B59EB',
      primaryll: '#4A9E91',
    },
    fontFamily: {
      sans: ['Inter var', 'sans-serif'],
      impact: ['Impact', 'fantasy'],
      emoji: ['emoji'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

