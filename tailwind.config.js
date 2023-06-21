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
            transform: 'translateY(100%)'},
            // transform: 'translate3d(0px, 100vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)',
            // transformStyle: 'preserve-3d',
            opacity: 0.75},
          '50%': {
              transform: 'translateY(50%)',
              // opacity: 1},
          },
          '80%': {
            transform: 'translateY(50%)',
            // opacity: 1},
          '100%': {
            // transform: 'translate3d(0px, -2vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)',
            transform: 'translateY(0%)',
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
      } 
    },
  },
  plugins: [],
}

