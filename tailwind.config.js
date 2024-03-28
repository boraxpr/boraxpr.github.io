/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx,md,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
    './theme.config.js'
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-2px) translateY(-1px)' },
          '50%': { transform: 'translateX(2px) translateY(1px)' },
          '75%': { transform: 'translateX(-1px) translateY(-2px)' },
          '100%': { transform: 'translateX(0) translateY(0)' }
        }
      },
      animation: {
        shake: 'shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite'
      }
    }
  },
  plugins: []
}
