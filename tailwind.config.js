/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f8f9ff',
          100: '#e6e8f7',
          200: '#d1d4ee',
          300: '#a9aedc',
          400: '#8288c7',
          500: '#6366b5',
          600: '#4a4d98',
          700: '#3a3d7a',
          800: '#2a2c5c',
          900: '#1a1b3e',
          950: '#0d0e1f',
        },
        accent: {
          purple: '#9333ea',
          blue: '#3b82f6',
          glow: '#a855f7',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.1) 0%, rgba(59, 130, 246, 0.05) 25%, transparent 50%)',
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(168, 85, 247, 0.4)',
        'glow-md': '0 0 25px -5px rgba(168, 85, 247, 0.4)',
      },
    },
  },
  plugins: [],
};