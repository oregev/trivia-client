import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DarkMode, Home, LightMode } from '@mui/icons-material';
import { AppContext } from 'AppContext';
import * as S from './header.style';

export const Header = (): JSX.Element => {
  const { pathname } = useLocation();
  const { mode, setMode } = useContext(AppContext);

  return (
    <S.HeaderContainer>
      {pathname !== '/' ? (
        <Link to="/">
          <Home sx={{ fontSize: 30 }} color="primary" />
        </Link>
      ) : (
        <div />
      )}
      <S.Container onClick={() => setMode((prev) => !prev)}>
        {mode ? (
          <LightMode sx={{ fontSize: 30 }} color="warning" />
        ) : (
          <DarkMode sx={{ fontSize: 30 }} />
        )}
      </S.Container>
    </S.HeaderContainer>
  );
};
