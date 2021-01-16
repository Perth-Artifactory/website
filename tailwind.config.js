/** @format */

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    flex: {
      '1/3': '0 1 30%',
      '1/2': '0 1 45%',
      '1/4': '0 1 25%',
    },
    height: {
      map: '500px',
      mapSmall: '250px',
    },
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        'primary-1': '#322d44',
        'primary-2': '#26203b',
        'secondary-1': '#7bdfc3',
        'secondary-2': '#5fb49b',
        'secondary-3': '#90e0c9',
        'highlight-1': '#eaa844',
      },
      minWidth: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },
      maxWidth: {
        '1/2': '50%',
      },
      height: {
        map: '500px',
      },
      cursor: {
        help: 'help',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      function ({ addUtilities }) {
        const extendUnderline = {
          '.underline': {
            textDecoration: 'underline',
            textDecorationColor: '#EEAA844',
          },
        };

        addUtilities(extendUnderline);
      },
    ],
  },
};
