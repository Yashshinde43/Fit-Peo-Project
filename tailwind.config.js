/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'indigo': {
          50: '#f0f1ff',
          100: '#e4e6ff',
          600: '#4f46e5',
          700: '#4338ca',
          900: '#312e81',
        },
        'cyan': {
          400: '#22d3ee',
        },
      },
    },
  },
  plugins: [],
}