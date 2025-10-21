/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'flame': 'flame 2s ease-in-out infinite',
        'spark': 'spark 1.5s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        flame: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '25%': { transform: 'scale(1.1) rotate(-5deg)' },
          '50%': { transform: 'scale(1.15) rotate(5deg)' },
          '75%': { transform: 'scale(1.1) rotate(-5deg)' },
        },
        spark: {
          '0%, 100%': { opacity: '0.3', transform: 'translateY(0) scale(1)' },
          '50%': { opacity: '1', transform: 'translateY(-10px) scale(1.2)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}


