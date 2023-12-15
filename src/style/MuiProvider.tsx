import { ReactNode } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from './muiTheme';

interface MuiProvider {
  children: ReactNode;
  mode: boolean;
}

export const MuiProvider = ({ children, mode }: MuiProvider): JSX.Element => (
  <ThemeProvider theme={mode ? lightTheme : darkTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
