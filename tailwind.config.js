/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        MainColor: '#642E90',
        navColor: '#161617',
      },
      fontFamily: {
        SourceSansPro: ['Source Sans Pro', 'sans-serif'],
        SpliceSans:['Splice Sans', 'sans-serif']
      },
      // Faça breakpoints personalizados
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
      },
    },
  },
  plugins: [],
};
