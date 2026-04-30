/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        olive: '#6b7a2a',
        lime: {
          DEFAULT: '#8aaa1e',
          light: '#a8c832',
          bright: '#b5d42a',
        },
        cream: {
          DEFAULT: '#f5f2ea',
          dark: '#ede8d8',
        },
        sand: '#d4c9a8',
        bark: '#7a6e52',
        text: {
          dark: '#1a1a0e',
          mid: '#3d3d1f',
          muted: '#7a7a52',
        }
      },
      fontFamily: {
        display: ['Unbounded', 'Noto Sans Devanagari', 'Noto Sans Bengali', 'serif'],
        body: ['SF Pro Text', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'sm-custom': '0 2px 8px rgba(107, 122, 42, 0.1)',
        'md-custom': '0 8px 24px rgba(107, 122, 42, 0.12)',
        'lg-custom': '0 16px 48px rgba(107, 122, 42, 0.18)',
        'lime': '0 4px 20px rgba(138, 170, 30, 0.3)',
      },
      animation: {
        'fade-up': 'fadeUp 0.35s ease both',
        'fade-in': 'fadeIn 0.5s ease both',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
