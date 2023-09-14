export const colors = {
  blue: {
    100: '#99d6ff',
    200: '#5cbeff',
    300: '#0A9DFF',
    400: '#007ACC',
    500: '#00568F',
    600: '#000645',
  },

  green: {
    100: '#72afb0',
    200: '#00A949',
    300: '#008439',
    400: '#005424',
  },

  yellow: {
    100: '#E98A15',
    200: '#EA8F1F',
    300: '#CD7A13',
  },

  red: {
    100: '#D00000',
    200: '#A40000',
    300: '#5A0000',
  },

  neutral: {
    100: '#FFFFFF',
    200: '#e4e4e4',
    300: '#d0d0d0',
    400: '#939393',
    500: '#4a4b53',
    600: '#3d3d3d',
    700: '#2d2d2d',
    800: '#212121',
    900: '#1d1d1d',
    1000: '#000000',
  },

  dev: {
    debug: 'pink',
    error: 'red',
  },

  status: {
    warning: '#ed6c02',
    error: '#d32f2f',
    success: '#2e7d32',
    info: '#0288d1',
  },
};

export const transparency = {
  100: 'FF',
  90: 'E6',
  80: 'CC',
  70: 'B3',
  60: '99',
  50: '80',
  40: '66',
  30: '4D',
  20: '33',
  10: '1A',
  0: '00',
};

// components dont point to globals directly - only from theme
export const global = {
  fontFamily: "'Roboto', 'sans-serif'",
  color: colors.neutral[400],
  backgroundColor: 'transparent',
  padding: '10px',
  margin: '1rem',
  gap: '5px',

  headingColor: colors.neutral[500],
  headingFontFamily: 'Arial, Helvetica, sans-serif',

  borderWidth: '1px',
  border: `1px solid ${colors.neutral[500]}`,
  borderRadius: '5px',

  inputHeight: '40px',
  inputPadding: '0 10px',

  dividerColor: colors.neutral[200],
  componentIcons: colors.neutral[400],
};

export type ThemeType = typeof darkTheme;

// theme - styling for components
export const darkTheme = {
  name: 'darkTheme',

  Layout: {
    section: {
      padding: '50px',
      borderBottom: `1px solid ${global.dividerColor}`,
    },
    block: {
      padding: '0 0 50px',
    },
  },

  Heading: {
    color: global.headingColor,
    margin: '0 0 1rem',
    lineHeight: '1.3',
    fontWeight: '400',
    fontFamily: global.headingFontFamily,

    fontSize: {
      h1: '3.209rem',
      h2: '2.757rem',
      h3: '2.069rem',
      h4: '1.677rem',
      h5: '1.333rem',
      h6: '1.1rem',
    },
  },

  Button: {
    primary: 'bg-green-500 hover:bg-green-600',

    contained: {
      color: colors.neutral[100],
      background: colors.neutral[400],
      hover: colors.neutral[500],
      border: `1px solid ${colors.neutral[100]}`,
    },

    outlined: 'bg-transparent text-white border-white',
    text: {
      color: colors.neutral[500],
    },
  },

  Icon: {
    stroke: 'black',
    fill: '',
    fillOpacity: 0,
  },

  Input: {
    color: global.color,
    inputHeight: global.inputHeight,
    backgroundColor: colors.neutral[100],
    border: global.border,
    borderRadius: global.borderRadius,
  },

  Text: {
    color: global.color,
    marginBottom: global.padding,
  },

  Accordion: {
    title: {
      color: global.headingColor,
    },
    content: {
      color: global.color,
    },
    componentIcons: {
      stroke: global.componentIcons,
      fill: 'none',
    },
  },

  LabelSomething: {
    gap: global.gap,
  },

  Separator: {
    color: global.dividerColor,
    borderColor: global.dividerColor,
    backgroundColor: global.dividerColor,
    margin: global.margin,
    border: `${global.borderWidth} solid ${global.dividerColor}`,
  },

  Select: {
    padding: global.padding,
    inputHeight: global.inputHeight,
    inputPadding: global.inputPadding,
    color: global.color,
    backgroundColor: global.backgroundColor,
    border: global.border,
    borderRadius: global.borderRadius,
  },

  Slider: {
    formElementBackground: '#000000',
  },

  Checkbox: {
    borderRadius: global.borderRadius,
    border: global.border,
    backgroundColor: global.backgroundColor,
  },

  RadioButton: {
    borderRadius: global.borderRadius,
    border: global.border,
    backgroundColor: global.backgroundColor,
  },

  Counter: {
    height: global.inputHeight,
    border: global.border,
    borderRadius: global.borderRadius,
    backgroundColor: global.backgroundColor,
  },
};
