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
      one: '#EAAC57',
      two: '#2B359E',
      three: '#63EBD6',
      four: '#4B59EB',
      five: '#4A9E91',
    },
    fontFamily: {
      sans: ['Inter var', 'sans-serif'],
      impact: ['Impact', 'fantasy'],
      emoji: ['emoji'],
      roboto: ['Roboto', 'sans-serif'],
      playfair: ['Playfair Display', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}

