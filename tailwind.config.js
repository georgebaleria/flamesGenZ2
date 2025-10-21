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
        'flame': 'dramatic-pulse 1.5s ease-in-out infinite',
        'spark': 'spark-pulse 2s ease-in-out infinite',
        'glow': 'glow-pulse 1.8s ease-in-out infinite',
        'phoenix': 'phoenix-pulse 2.5s ease-in-out infinite',
      },
      keyframes: {
        'dramatic-pulse': {
          '0%, 100%': { 
            transform: 'scale(1) rotate(0deg)',
            opacity: '0.8',
            filter: 'brightness(1)'
          },
          '25%': { 
            transform: 'scale(1.2) rotate(-10deg)',
            opacity: '1',
            filter: 'brightness(1.3)'
          },
          '50%': { 
            transform: 'scale(1.4) rotate(10deg)',
            opacity: '0.9',
            filter: 'brightness(1.5)'
          },
          '75%': { 
            transform: 'scale(1.2) rotate(-5deg)',
            opacity: '1',
            filter: 'brightness(1.2)'
          },
        },
        'spark-pulse': {
          '0%, 100%': { 
            opacity: '0.4', 
            transform: 'translateY(0) scale(0.8)',
            filter: 'brightness(1)'
          },
          '25%': { 
            opacity: '0.8', 
            transform: 'translateY(-15px) scale(1.1)',
            filter: 'brightness(1.4)'
          },
          '50%': { 
            opacity: '1', 
            transform: 'translateY(-25px) scale(1.3)',
            filter: 'brightness(1.6)'
          },
          '75%': { 
            opacity: '0.7', 
            transform: 'translateY(-10px) scale(1)',
            filter: 'brightness(1.2)'
          },
        },
        'glow-pulse': {
          '0%, 100%': { 
            opacity: '0.6',
            filter: 'brightness(1) drop-shadow(0 0 5px rgba(255, 107, 107, 0.3))'
          },
          '50%': { 
            opacity: '1',
            filter: 'brightness(1.5) drop-shadow(0 0 20px rgba(255, 107, 107, 0.8))'
          },
        },
        'phoenix-pulse': {
          '0%, 100%': { 
            transform: 'scale(1) rotate(0deg)',
            opacity: '0.8',
            filter: 'brightness(1)'
          },
          '25%': { 
            transform: 'scale(1.3) rotate(90deg)',
            opacity: '1',
            filter: 'brightness(1.4)'
          },
          '50%': { 
            transform: 'scale(1.6) rotate(180deg)',
            opacity: '0.9',
            filter: 'brightness(1.6)'
          },
          '75%': { 
            transform: 'scale(1.3) rotate(270deg)',
            opacity: '1',
            filter: 'brightness(1.3)'
          },
        },
      },
    },
  },
  plugins: [],
}


