const plugin = require('tailwindcss/plugin');

module.exports = {
  prefix: 'tw-',
  important: false,
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  separator: ':',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: '2px',
      },
    },
    screens: {
      md: '570px',
      lg: '1025px',
    },
    colors: {
      transparent: 'transparent',
      'raa-white': '#ffffff',
      'raa-black': '#000000',
      'raa-orange': '#C94A18',
      'raa-orange-hover': '#b54216',
      'raa-orange-active': '#a33b14',
      'raa-gray-1': '#FBFBFB',
      'raa-gray-2': '#F4F4F4',
      'raa-gray-3': '#DADADA',
      'raa-gray-4': '#BABABA',
      'raa-gray-5': '#6A6A6A',
      'raa-gray-6': '#3A3A3A',
      'raa-gray-hover': '#626665',
      'raa-gray-active': '#565a59',
      'raa-blue': '#00567E',
      'raa-green': '#008578',
      'raa-green-hover': '#00786c',
      'raa-green-active': '#006c61',
      'raa-error-red': '#DB0000',
      'raa-error-red-light': '#FCEBEB',
      'raa-highlight-yellow': '#ffb219',
    },
    spacing: {
      px: '1px',
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem',
      40: '10rem',
      48: '12rem',
      56: '14rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      88: '22rem',
      96: '24rem',
    },
    backgroundColor: (theme) => theme('colors'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    borderColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.raa-gray-6', 'currentColor'),
    }),
    boxShadow: {
      DEFAULT: '0 2px 4px 0 rgba(0,0,0,0.10)',
      md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
      lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
      inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      outline: '0 0 0.1px 3px rgb(255,178,25)',
      none: 'none',
    },
    container: {},
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
    },
    fill: {
      current: 'currentColor',
    },
    flex: {
      1: '1 1 0%',
      2: '2 2 0%',
      3: '3 3 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexGrow: {
      0: '0',
      DEFAULT: '1',
    },
    flexShrink: {
      0: '0',
      DEFAULT: '1',
    },
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
    },
    fontSize: {
      'size-3.75': ['3.75rem', '3.8rem'],
      'size-3': ['3rem', '3.125rem'],
      'size-2.5': ['2.5rem', '2.813rem'],
      'size-2.25': ['2.25rem', '2.813rem'],
      'size-2': ['2rem', '2.5rem'],
      'size-1.75': ['1.75rem', '1.875rem'],
      'size-1.625': ['1.625rem', '1.75rem'],
      'size-1.5': ['1.5rem', '1.875rem'],
      'size-1.375': ['1.375rem', '1.563rem'],
      'size-1.313': ['1.313rem', '1.805rem'],
      'size-1.125': ['1.125rem', '1.75rem'],
      'size-1': ['1rem', '1.375rem'],
      'size-0.813': ['0.813rem', '1.118rem'],
      'size-0.8125': ['0.8125rem', '1.117rem'],
    },
    lineHeight: {
      none: '1rem',
      sm: '0.813rem',
      normal: '1.375rem',
      3.125: '3.125rem',
      2.813: '2.813rem',
      2.5: '2.5rem',
      2: '2rem',
      1.875: '1.875rem',
      1.75: '1.75rem',
      1.653: '1.653rem',
      1.563: '1.563rem',
      1.375: '1.375rem',
      1.313: '1.313rem',
      1.25: '1.25rem',
      1.125: '1.125rem',
      1.188: '1.188rem',
    },
    fontWeight: {
      normal: 400,
      semibold: 600,
    },
    height: (theme) => ({
      auto: 'auto',
      px: '1px',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),
    inset: {
      auto: 'auto',
      px: '1px',
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem',
      40: '10rem',
      48: '12rem',
    },
    letterSpacing: {
      tight: '-0.05em',
      normal: '0',
      wide: '0.05em',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    maxHeight: {
      full: '100%',
      screen: '100vh',
    },
    maxWidth: {
      xs: '20rem',
      sm: '30rem',
      md: '40rem',
      lg: '50rem',
      xl: '60rem',
      '2xl': '70rem',
      '3xl': '80rem',
      '4xl': '90rem',
      '5xl': '100rem',
      full: '100%',
    },
    minHeight: {
      0: '0',
      full: '100%',
      screen: '100vh',
    },
    minWidth: {
      0: '0',
      full: '100%',
    },
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    opacity: {
      0: '0',
      25: '0.25',
      50: '0.5',
      75: '0.75',
      100: '1',
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
    },
    placeholderColor: (theme) => theme('colors'),
    stroke: {
      current: 'currentColor',
    },
    textColor: (theme) => theme('colors'),
    width: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '5/6': '83.333333%',
      px: '1px',
      full: '100%',
      screen: '100vw',
    }),
    zIndex: {
      auto: 'auto',
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
    },
  },
  variants: {
    accessibility: ['responsive', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus', 'active'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive', 'focus', 'active'],
    borderWidth: ['responsive', 'hover', 'focus', 'active'],
    boxShadow: ['responsive', 'hover', 'focus', 'focus-within'],
    cursor: ['responsive'],
    display: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive', 'hover', 'focus', 'active'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'hover', 'focus'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    placeholderColor: ['responsive', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    stroke: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive'],
    outlineTransparent: ['focus'],
  },
  corePlugins: {},
  plugins: [
    plugin(({ addUtilities, variants }) => {
      const outlineTransparent = {
        '.outline-transparent': {
          outline: '2px dotted transparent',
        },
      };
      addUtilities(outlineTransparent, variants('outlineTransparent'));
    }),
  ],
};
