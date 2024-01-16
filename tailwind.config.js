/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./assets/css/scss/mixin.scss",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '8rem',
        xl: '9rem',
        '2xl': '10rem',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1440px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
    extend: {
      colors: {
        'background' : '#282C33',
        'primary' : '#ADD96C',
        'gray' : '#ABB2BF'
      },
      fontFamily: {
        'default': ['Fira Code','monospace'],
      },
    },

  },
  plugins: [],
}

