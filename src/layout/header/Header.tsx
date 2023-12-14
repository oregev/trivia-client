import { Link } from 'react-router-dom';
import { HomeIcon } from 'components';
import * as S from './header.style';

export const Header = (): JSX.Element => (
  <S.HeaderContainer>
    <Link to="/">
      <HomeIcon width={35} height={35} stroke="#ddd">
        Home
      </HomeIcon>
    </Link>
  </S.HeaderContainer>
);
