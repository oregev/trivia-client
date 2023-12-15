import { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { AppContext } from 'AppContext';
import { queryClient } from 'api';
import { AppRouter } from './router';
import { MuiProvider } from 'style';

export const App = (): JSX.Element => {
  const { mode } = useContext(AppContext);

  return (
    <MuiProvider mode={mode}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </QueryClientProvider>
    </MuiProvider>
  );
};
