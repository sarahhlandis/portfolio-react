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
        },
        rise: {
          '0%': {
            transform: 'translateY(150%)'},
          '50%': {
              transform: 'translateY(150%)',
          },
          '60%': {
            transform: 'translateY(150%)',
          },
          '75%': {
            transform: 'translateY(100%)',
          },
          '90%': {
            transform: 'translateY(90%)',
          },
          '95%': {
            transform: 'translateY(50%)',
          },
          '100%': {
            transform: 'translateY(0%)',
          },
        },
        curtain: {
          '0%': {
            transform: 'translateY(0%)'},
          '35%': {
              transform: 'translateY(0%)'},
          '50%': {
              transform: 'translateY(0%)',
          },
          // '70%': {
          //   transform: 'translateY(-30%)',
          // },
          '80%': {
            transform: 'translateY(-50%)',
          },
          '90%': {
            transform: 'translateY(-85%)',
          },
          '100%': {
            transform: 'translateY(-100%)',
          },
        },
          slowFastAnimation: {
            "0%": {
              transform: "translateY(100%)",
              animationTimingFunction: "ease-in",
            },
            "50": {
              transform: "translateY(0%)",
              animationTimingFunction: "linear",
            },
            "100%": {
              transform: "translateY(-100%) scaleY(0)",
              // animationTimingFunction: "ease-out",
            },
          },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        rise: 'rise 1.5s ease-in',
        slowFastAnimation: "slowFastAnimation 1.5s ease-in-out",
        curtain: 'curtain 1.5s ease-in',
      } 
    },
  },
  plugins: [],
}

