/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      xxl: '1920px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '3%',
        sm: '2rem',
        md: '1rem',
        lg: '2rem',
        xl: '9rem',
        xxl: '20rem',
      },
    },
    extend: {
      boxShadow: {
        default: '0 4px 12px 0 #1A1A1E26',
      },
    },
  },
  plugins: [],
};
