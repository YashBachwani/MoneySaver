/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F7F4E8',
        surface: '#E9E5D8',
        primary: '#050505',
        accent: '#FFF000',
        text: '#050505',
        muted: '#6B6B6B',
        warning: '#FFF000',
        dark: '#111111',
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        sans: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
