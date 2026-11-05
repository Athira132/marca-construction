/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        marca: {
          dark: '#11161C',
          slate: '#1A222B',
          surface: '#222B36',
          border: '#2C3644',
          light: '#F8F9F5',
          cream: '#EEF0EB',
          textDark: '#12171E',
          textMuted: '#5C6978',
          green: {
            DEFAULT: '#6FA82A',
            50: '#F2F8EC',
            100: '#E4F1D7',
            200: '#C7E4AE',
            300: '#AAD683',
            400: '#8DC857',
            500: '#6FA82A',
            600: '#5A8A21',
            700: '#456B19',
            800: '#324E11',
            900: '#1F310A',
          },
          gold: {
            DEFAULT: '#C4A661',
            light: '#DFC88E',
            dark: '#9A7F3F',
            tint: '#F9F5EC',
          },
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        tightest: '-.03em',
      },
      boxShadow: {
        'marca': '0 20px 40px -15px rgba(17, 22, 28, 0.08)',
        'marca-lg': '0 30px 60px -15px rgba(17, 22, 28, 0.15)',
        'marca-green': '0 10px 25px -5px rgba(111, 168, 42, 0.3)',
        'marca-gold': '0 10px 25px -5px rgba(196, 166, 97, 0.25)',
      },
    },
  },
  plugins: [],
};
