/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#150A29',
        plum: '#1E1039',
        violet: {
          650: '#7C3AED',
        },
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(139, 92, 246, 0.45)',
      },
    },
  },
  plugins: [],
}
