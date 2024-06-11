/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'kumbh-sans': ['Kumbh Sans', 'sans-serif'],
      },
      screens:{
        'xxl': {'min': '1920px'}
      },
      colors: {
        background: '#141414',
        border: '#262626',
        desc: '#98989A',
        title: '#FFFFFF',
        paragraph: '#7E7E81',
        card: '#1A1A1A',
        primary: '#FFD11A',
        button: '#333333',
        secondary: '#666666',
      },
    },
  },
  plugins: [],
};
