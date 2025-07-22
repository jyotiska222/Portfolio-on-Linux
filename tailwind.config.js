/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src_normal_portfolio/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'linux-bg': '#2d3748',
        'linux-panel': '#1a202c',
        'linux-accent': '#4299e1',
        'linux-text': '#e2e8f0',
        'linux-border': '#4a5568',
        // Normal portfolio colors
        'primary': '#3b82f6',
        'secondary': '#8b5cf6',
        'background': '#ffffff',
        'surface': '#f8fafc',
        'surface-elevated': '#f1f5f9',
        'text-primary': '#1e293b',
        'text-secondary': '#64748b',
        'border-color': '#e2e8f0',
      },
      fontFamily: {
        'mono': ['Ubuntu Mono', 'Courier New', 'monospace'],
        'sans': ['Ubuntu', 'system-ui', 'sans-serif'],
      },
      animation: {
        'boot-text': 'typewriter 0.5s steps(40, end)',
        'cursor-blink': 'blink 1s infinite',
        // Normal portfolio animations
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'wave': 'wave 2s ease-in-out infinite',
        'expand-width': 'expandWidth 0.8s ease-out forwards',
      },
      keyframes: {
        typewriter: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        },
        // Normal portfolio keyframes
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '10%, 30%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '40%': { transform: 'rotate(14deg)' },
          '50%': { transform: 'rotate(-4deg)' },
          '60%': { transform: 'rotate(10deg)' }
        },
        expandWidth: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animationDelay: {
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '900': '900ms',
        '1000': '1000ms',
        '1100': '1100ms',
        '1500': '1500ms',
        '2000': '2000ms',
        '2500': '2500ms',
        '3000': '3000ms',
      },
      animationFillMode: {
        'forwards': 'forwards',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.animation-delay-300': {
          'animation-delay': '300ms',
        },
        '.animation-delay-500': {
          'animation-delay': '500ms',
        },
        '.animation-delay-700': {
          'animation-delay': '700ms',
        },
        '.animation-delay-900': {
          'animation-delay': '900ms',
        },
        '.animation-delay-1000': {
          'animation-delay': '1000ms',
        },
        '.animation-delay-1100': {
          'animation-delay': '1100ms',
        },
        '.animation-delay-1500': {
          'animation-delay': '1500ms',
        },
        '.animation-delay-2000': {
          'animation-delay': '2000ms',
        },
        '.animation-delay-2500': {
          'animation-delay': '2500ms',
        },
        '.animation-delay-3000': {
          'animation-delay': '3000ms',
        },
        '.animate-fill-forwards': {
          'animation-fill-mode': 'forwards',
        },
        '.animate-float': {
          'animation': 'float 3s ease-in-out infinite',
        },
        '.line-clamp-3': {
          'overflow': 'hidden',
          'display': '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '3',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}