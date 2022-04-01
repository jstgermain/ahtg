import { createTheme } from '@mui/material/styles';
import common from '@mui/material/colors/common';
import 'typeface-domine';
import 'typeface-open-sans';
import Blue from './constants/colors/Blue';
import Grey from './constants/colors/Grey';

const AHTGTheme = createTheme({
  type: 'light',
  palette: {
    primary: {
      light: Blue[300],
      main: Blue[500],
      dark: Blue[800],
      contrastText: Blue['A100'],
    },
    secondary: {
      light: Grey[300],
      main: Grey[500],
      dark: Grey[800],
      contrastText: Grey['A100'],
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(0, 0, 0, 0.14)',
      disabled: Grey[500],
      disabledBackground: Grey[300],
    },
    background: {
      paper: common.white,
      default: common.white,
    },
    text: {
      primary: Blue[500],
      secondary: Grey[500],
      disabled: 'rgba(89, 89, 89, 0.38)',
      hint: 'rgba(89, 89, 89, 0.38)',
    },
    divider: 'rgba(89, 89, 89, 0.2)',
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h1: {
      color: Grey[500],
      fontFamily: '"Domine", sans-serif',
      fontSize: '3.375rem',
      fontWeight: 400,
    },
    h2: {
      color: Grey[500],
      fontFamily: '"Domine", sans-serif',
      fontSize: '3rem',
    },
    h3: {
      color: Grey[500],
      fontFamily: '"Domine", sans-serif',
      fontSize: '2.25rem',
    },
    h4: {
      color: Grey[500],
      fontFamily: '"Domine", sans-serif',
      fontSize: '1.5rem',
    },
    h5: {
      color: Grey[500],
      fontFamily: '"Domine", sans-serif',
      fontSize: '1.25rem',
    },
    h6: {
      color: Grey[500],
      fontFamily: '"Domine", sans-serif',
    },
    subtitle1: {
      color: Grey[500],
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    },
    subtitle2: {
      color: Grey[500],
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    },
    body1: {
      color: Grey[800],
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      fontSize: '1rem',
    },
    body2: {
      color: Grey[800],
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      fontSize: '1rem',
    },
    caption: {
      color: Grey[800],
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      fontSize: '0.75rem',
    },
    button: {
      color: Blue[500],
      fontSize: '0.875rem',
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      textTransform: 'capitalize',
    },
    overline: {
      color: Grey[800],
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      fontSize: '0.625rem',
      textTransform: 'capitalize',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: common.white,
          color: Grey[500],
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          margin: '0 auto',
          maxWidth: 1340,
          width: '100%',
        },
      },
    },
  },
});

export default AHTGTheme;
