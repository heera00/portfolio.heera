/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          950: '#05070d',
          900: '#0a1020',
          800: '#131b2f',
        },
      },
      boxShadow: {
        glass: '0 8px 32px rgba(8, 12, 30, 0.35)',
      },
      backgroundImage: {
        glow: 'radial-gradient(circle at top, rgba(34,211,238,0.12), transparent 40%), radial-gradient(circle at 80% 20%, rgba(139,92,246,0.16), transparent 35%)',
      },
    },
  },
  plugins: [],
}
