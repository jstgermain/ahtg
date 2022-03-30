import { createTheme } from '@mui/material/styles';
import common from '@mui/material/colors/common';
import 'typeface-roboto';
import 'typeface-open-sans';
import Blue from './constants/colors/Blue';
import Grey from './constants/colors/Grey';

const defaultTheme = createTheme();

const AHTGTheme = createTheme({
  type: 'light',
  palette: {
    primary: {
      light: Blue[300],
      main: Blue[500],
      dark: Blue[700],
      contrastText: Blue[100],
    },
    secondary: {
      light: Grey[400],
      main: Grey[600],
      dark: Grey[800],
      contrastText: Grey[100],
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
      primary: Grey[800],
      secondary: Grey[100],
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
      color: Grey[800],
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '3.25rem',
      '&.styled--link, &.styled--link a, & .styled--link': {
        color: Grey[800],
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
        textDecoration: 'none',
        width: 'unset',
        '&:hover': {
          textDecoration: 'underline',
          '@media (hover: none)': {
            textDecoration: 'underline',
          },
        },
      },
      '&.mega': {
        fontSize: '4.5rem',
        [defaultTheme.breakpoints.down('md')]: {
          fontSize: '3rem',
        },
        [defaultTheme.breakpoints.down('sm')]: {
          fontSize: '2.25rem',
        },
        '& span': {
          display: 'block',
          fontSize: '2.5rem',
          [defaultTheme.breakpoints.down('md')]: {
            fontSize: '2rem',
          },
          [defaultTheme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
          },
        },
      },
    },
    h2: {
      color: Grey[800],
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '3rem',
      '&.styled--link, &.styled--link a, & .styled--link': {
        color: Grey[800],
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
        textDecoration: 'none',
        width: 'unset',
        '&:hover': {
          textDecoration: 'underline',
          '@media (hover: none)': {
            textDecoration: 'underline',
          },
        },
      },
    },
    h3: {
      color: Grey[800],
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '2.25rem',
      '&.styled--link, &.styled--link a, & .styled--link': {
        color: Grey[800],
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
        textDecoration: 'none',
        width: 'unset',
        '&:hover': {
          textDecoration: 'underline',
          '@media (hover: none)': {
            textDecoration: 'underline',
          },
        },
      },
    },
    h4: {
      color: Grey[800],
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '1.5rem',
      '&.styled--link, &.styled--link a, & .styled--link': {
        color: Grey[800],
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
        textDecoration: 'none',
        width: 'unset',
        '&:hover': {
          textDecoration: 'underline',
          '@media (hover: none)': {
            textDecoration: 'underline',
          },
        },
      },
    },
    h5: {
      color: Grey[800],
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '1.25rem',
      '&.styled--link, &.styled--link a, & .styled--link': {
        color: Grey[800],
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
        textDecoration: 'none',
        width: 'unset',
        '&:hover': {
          textDecoration: 'underline',
          '@media (hover: none)': {
            textDecoration: 'underline',
          },
        },
      },
    },
    subtitle1: {
      color: Grey[600],
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      '&.styled--link, &.styled--link a, & .styled--link': {
        color: Grey[800],
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
        textDecoration: 'none',
        width: 'unset',
        '&:hover': {
          textDecoration: 'underline',
          '@media (hover: none)': {
            textDecoration: 'underline',
          },
        },
      },
    },
    subtitle2: {
      color: Grey[600],
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      '&.styled--link, &.styled--link a, & .styled--link': {
        color: Grey[800],
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
        textDecoration: 'none',
        width: 'unset',
        '&:hover': {
          textDecoration: 'underline',
          '@media (hover: none)': {
            textDecoration: 'underline',
          },
        },
      },
    },
    body1: {
      color: Grey[800],
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      fontSize: '1rem',
      '&.styled--link, &.styled--link a, & .styled--link': {
        color: Grey[800],
        fontFamily: '"Helvetica Neue Regular", Helvetica, Arial, sans-serif;',
        textDecoration: 'none',
        width: 'unset',
        '&:hover': {
          textDecoration: 'underline',
          '@media (hover: none)': {
            textDecoration: 'underline',
          },
        },
      },
    },
    body2: {
      color: Grey[800],
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      fontSize: '1rem',
      fontWeight: 700,
      '&.styled--link, &.styled--link a, & .styled--link': {
        color: Grey[800],
        fontFamily: '"Helvetica Neue Regular", Helvetica, Arial, sans-serif;',
        textDecoration: 'none',
        width: 'unset',
        '&:hover': {
          textDecoration: 'underline',
          '@media (hover: none)': {
            textDecoration: 'underline',
          },
        },
      },
    },
    caption: {
      color: Grey[800],
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      fontSize: '0.75rem',
      '&.styled--link, &.styled--link a, & .styled--link': {
        color: Grey[800],
        fontFamily: '"Helvetica Neue Regular", Helvetica, Arial, sans-serif;',
        textDecoration: 'none',
        width: 'unset',
        '&:hover': {
          textDecoration: 'underline',
          '@media (hover: none)': {
            textDecoration: 'underline',
          },
        },
      },
    },
    button: {
      color: Blue[500],
      fontSize: '0.875rem',
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      textTransform: 'capitalize',
      '&.styled--link, &.styled--link a, & .styled--link': {
        color: Grey[800],
        fontFamily: '"Helvetica Neue Regular", Helvetica, Arial, sans-serif;',
        textDecoration: 'none',
        width: 'unset',
        '&:hover': {
          textDecoration: 'underline',
          '@media (hover: none)': {
            textDecoration: 'underline',
          },
        },
      },
    },
    overline: {
      color: Grey[800],
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      fontSize: '0.625rem',
      textTransform: 'capitalize',
      '&.styled--link, &.styled--link a, & .styled--link': {
        color: Grey[800],
        fontFamily: '"Helvetica Neue Regular", Helvetica, Arial, sans-serif;',
        textDecoration: 'none',
        width: 'unset',
        '&:hover': {
          textDecoration: 'underline',
          '@media (hover: none)': {
            textDecoration: 'underline',
          },
        },
      },
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
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          alignSelf: 'baseline',
          '&.mgc-icon': {
            fontSize: '3rem',
          },
        },
        fontSizeLarge: {
          '&.mgc-icon': {
            fontSize: '12.5rem',
            '&.mega': {
              fontSize: '24rem',
              [defaultTheme.breakpoints.down('md')]: {
                fontSize: '18rem',
              },
              [defaultTheme.breakpoints.down('sm')]: {
                fontSize: '21.5rem',
              },
            },
          },
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
