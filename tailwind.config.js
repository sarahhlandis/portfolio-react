/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'translateY(-15%)' },
          '50%': {
            transform: 'translateY(0)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      } 
    },
  },
  plugins: [],
}

