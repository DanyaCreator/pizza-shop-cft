/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl: '1920px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '3%',
        sm: '2rem',
        md: '3rem',
        lg: '6rem',
        xl: '9rem',
        xxl: '20rem',
      },
    },
    extend: {},
  },
  plugins: [],
};
