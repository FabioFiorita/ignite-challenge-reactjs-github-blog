/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '4xl': '864px',
      },
      minWidth: {
        '4xl': '864px',
      },
    },
  },
  plugins: ['@tailwindcss/line-clamp'],
}
