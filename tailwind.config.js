/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          DEFAULT: 'var(--theme-primary)',
          soft: 'var(--theme-bg-soft)',
          glow: 'var(--theme-glow)',
        }
      }
    },
  },
  plugins: [],
}
