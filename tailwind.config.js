module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#FFF',
            h1: {
              color: '#ff2400', // #7bdfc3
            },
            h2: {
              color: '#e32000', // #5fb49b
            },
            h3: {
              color: '#dddddd', // #90e0c9
            },
            h4: {
              color: '#dddddd',
            },
            h5: {
              color: '#dddddd',
            },
            h6: {
              color: '#dddddd',
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
              color: '#ff2400',
              hover: {
                color: '#e32000',
              },
            },
          },
        },
      },
      h3: {
        color: '#dddddd', // #90e0c9
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
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        'nav': '#646464', // nav border
        success: '#0070f3', // unknown use, blue
        cyan: '#79FFE1', // unknown use, green cyan
//        'primary-1': '#494949', // #light grey
//        'primary-2': '#313131', // #dark grey
//        'primary-1': '#2b2b2b', // #light grey
//        'primary-2': '#1a1a1a', // #dark grey
        'primary-1': '#202020', // #light grey
        'primary-2': '#121212', // #dark grey
        'secondary-1': '#bf1b00', // dark red
        'secondary-2': '#e32000', // red
        'secondary-3': '#ff2400', // unknown use, brighter red
        'highlight-1': '#bf1b00', // red
        'highlight-2': '#dddddd', // #white
        'maintext':  '#bfbfbf', // #white
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
