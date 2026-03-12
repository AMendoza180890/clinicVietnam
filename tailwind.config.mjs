/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#183F8C',
          light: '#377BA6',
          dark: '#58A689',
        },
        accent: {
          DEFAULT:'#377BA6',
          light: '#58A689',
        },
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
