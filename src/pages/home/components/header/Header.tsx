import { useContext } from 'react';
import { ArrowBack, LightMode, DarkMode } from '@mui/icons-material';
import { AppContext } from 'AppContext';
import * as S from './header.style';

interface HeaderProps {
  isOpen: boolean;
  onBack: () => void;
}

export const Header = ({ isOpen, onBack }: HeaderProps): JSX.Element => {
  const { mode, setMode } = useContext(AppContext);

  return (
    <S.HeaderContainer>
      <S.Container onClick={onBack}>
        {isOpen && <ArrowBack sx={{ fontSize: 30 }} color="primary" />}
      </S.Container>
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
