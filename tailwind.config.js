/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Grayscale palette
        'cloud': '#EDEFF7',
        'smoke': '#D3D6E0',
        'steel': '#BCBFCC',
        'space': '#9DA2B3',
        'graphite': '#6E7180',
        'arsenic': '#40424D',
        'phantom': '#1E1E24',
        'black': '#000000',
        
        // Base colors
        'background': '#131313',
        'surface': '#414141',
        'light': '#F2F2F2',
        
        // Aliases for convenience
        'dark': '#1A1A1A',
        'card-dark': '#414141',
        'white': '#F2F2F2',
      },
      borderRadius: {
        'sm': '2px',
        'DEFAULT': '3px',
      },
      fontFamily: {
        'sans': ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'carousel-scroll': 'carousel-scroll 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'carousel-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        '.pause': {
          'animation-play-state': 'paused'
        }
      })
    }
  ],
}
