/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6D4AFF',
        primaryLight: '#EDE7FF',
        success: '#16a34a',
        muted: '#8A8A8A',
      },
      boxShadow: {
        soft: '0 4px 16px rgba(0,0,0,0.06)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'ui-sans-serif'],
    },
  },
  plugins: [],
};
