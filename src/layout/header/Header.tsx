import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkMode, Home, LightMode } from '@mui/icons-material';
import { AppContext } from 'AppContext';
import * as S from './header.style';

export const Header = (): JSX.Element => {
  const { mode, setMode } = useContext(AppContext);

  return (
    <S.HeaderContainer>
      <Link to="/">
        <Home sx={{ fontSize: 30 }} color="primary" />
      </Link>
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
