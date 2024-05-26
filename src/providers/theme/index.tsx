import { ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      light: '#6DF2C9',  // Light variant of #19E1AF
      main: '#19E1AF',  // Primary color
      dark: '#12967D',  // Dark variant of #19E1AF
    },
    secondary: {
      light: '#6AC1F7',  // Light complementary color
      main: '#19E1AF',  // Main complementary color
      dark: '#2878A0',  // Dark complementary color
      contrastText: '#FFFFFF',  // Text color to contrast with secondary colors
    },
    //@ts-ignore
    tertiary: {
      light: '#FFB3C7',  // Light contrasting color
      main: '#19E1AF',  // Main contrasting color
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161',
    },
    black: {
      main: '#030517',  // Black color
    },
    white: {
      main: '#FFFFFF',  // White color
      dark: '#FAFAFA',  // Slightly off-white color
    },
    yellow: {
      main: '#FFCC00',  // Yellow color
    },
    success: {
      main: '#43A047',  // Success color
    },
    error: {
      main: '#f44336',  // Error color
    },
    warning: {
      main: '#ff7c30',  // Warning color
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    body1: {
      '@media (max-width: 960px)': {
        fontSize: '14px',
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: '#19E1AF',  // Matching primary color
        },
        containedSecondary: {
          backgroundColor: '#339FD1',  // Matching secondary color
        },
      },
    },
  },
});

interface AppThemeProviderProps {
  children: ReactNode;
}

const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
