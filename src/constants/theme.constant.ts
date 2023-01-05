export const color = {
  primary: {
    main: '#52796F',
    dark: '#2F3E46',
  },
  secondary: {
    main: '#CAD2C5',
    dark: '#354F52',
  },
  error: {
    main: '#D32F2F',
    dark: '#c62828',
  },
};

export const theme = {
  palette: {
    type: 'light',
    ...color,
    text: {
      primary: '#2F3E46',
      secondary: '#F8F8F8',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 12,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
  },
};
