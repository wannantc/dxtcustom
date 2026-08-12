/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', 'src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#05070d',
          800: '#0a0e1a',
          700: '#0f1524',
          600: '#151c30',
          500: '#1c2540',
        },
        neon: {
          cyan: '#00f0ff',
          blue: '#0080ff',
          green: '#00ff9d',
          amber: '#ffb800',
          red: '#ff3b5c',
        },
      },
      fontFamily: {
        display: ['"Orbitron"', 'sans-serif'],
        body: ['"Rajdhani"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'scan': 'scan 4s linear infinite',
        'flicker': 'flicker 4s linear infinite',
        'grid-move': 'gridMove 20s linear infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'ticker': 'ticker 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(20px)' },
          '50%': { opacity: '0.8', filter: 'blur(30px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        gridMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '50px 50px' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0,240,255,0.5), 0 0 40px rgba(0,240,255,0.3)',
        'neon-blue': '0 0 20px rgba(0,128,255,0.5), 0 0 40px rgba(0,128,255,0.3)',
        'neon-green': '0 0 20px rgba(0,255,157,0.5), 0 0 40px rgba(0,255,157,0.3)',
        'neon-amber': '0 0 20px rgba(255,184,0,0.5), 0 0 40px rgba(255,184,0,0.3)',
        'neon-red': '0 0 20px rgba(255,59,92,0.5), 0 0 40px rgba(255,59,92,0.3)',
      },
    },
  },
  plugins: [],
};
