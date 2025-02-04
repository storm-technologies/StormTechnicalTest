/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0358F1',
        danger: '#f56c6c',
      },
      screens: {
        tablet: '480px',
        desktop: '768px',
        laptop: '1440px',
        monitor: '1920px',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
