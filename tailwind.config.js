module.exports = {

  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
     container: {
          center: true,
          padding: '1rem',
        },
        screens: {
          'sm': '768px',
          // => @media (min-width: 640px) { ... }
          'md': '992px',
          // => @media (min-width: 768px) { ... }
          'lg': '1170px',
        },
        colors: {
            'black': '#000000',
            'white': '#ffffff',
            'transparent': 'transparent',
            'theme': '#c19b76',
            'dark': '#1c1c1d',
            'gray': '#878788',
            'gray-100': '#f9f9f9',
        },
        extend: {
            fontFamily: {
                'roboto': ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
                'gilda': ['Gilda Display','serif', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
                
            },
            fontSize: {
                '10xl': '80px',
                '9xl': '70px',
                '8xl': '50px',
                '11sm': '11px',
                '12sm': '12px',
            },
            spacing: {
                'full': '100%',
                'pt80': '80px',
                'h3': '3px',
                '45rem': '-0.45rem',
                'h1px': '1px',
                '30px': "30px",
                
            },
            maxWidth: {
              '400': '400px',
                '770': '770px',
            },
            margin: {
                'auto': 'auto',
            },
            zIndex: {
                '-1': '-1',
                '1': '1',
                '2': '2',
                '3': '3',
                '4': '4',
                '5': '5',
            },
            height: {
                '100vw': '100vw',
            },
        },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
