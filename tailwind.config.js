module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // unkwown uses
        //'accent-1': '#FAFAFA',
        //'accent-2': '#EAEAEA',
        //'accent-7': '#333',
        //success: '#0070f3', // blue
        //cyan: '#79FFE1', // green cyan

        // dark greys
        'primary-2': '#121212', // main background, darker grey
        'primary-1': '#202020', // component background, dark grey
        // reds
        'secondary-1': '#bf1b00', // main red
        'secondary-2': '#8c1400', // darker red
        'secondary-3': '#ff2400', // brighter red
        'alert': "#ff2400", // alert banner background
        // whites
        'highlight-2': '#dddddd', // #light grey
        'header': '#dddddd', // #light grey
        'maintext': '#bfbfbf', // #grey
        'nav': '#646464', // nav border
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#bfbfbf', // default text colour
            h1: {
              color: '#ddd', // #e32000
            },
            h2: {
              color: '#ddd', // #e32000
            },
            h3: {
              color: '#ddd',
            },
            h4: {
              color: '#ddd',
            },
            h5: {
              color: '#ddd',
            },
            h6: {
              color: '#ddd',
            },
            strong: {
              color: '#ff2400',
            },
            code: {
              color: '#ff2400',
            },
            em: {
              color: '#ff2400',
            },
            blockquote: {
              color: '#ff2400',
            },
            img: {
              display: 'block',
              margin: '0 auto',
            },
            pre: {
              color: '#ff2400',
              backgroundColor: '#141414', // #26203b
            },
            a: {
              textDecoration: 'no-underline',
              color: '#bf1b00', // highlight-1
              hover: {
                color: '#e32000', // secondary-2
              },
            },
          },
        },
      },
      flex: {
        '1/3': '0 1 30%',
        '1/2': '0 1 45%',
        '1/4': '0 1 25%',
      },
      height: {
        map: '500px',
        mapSmall: '250px',
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
};
