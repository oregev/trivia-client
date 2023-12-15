import { Weekly } from './components';
import * as S from './home.style';

export const Home = (): JSX.Element => (
  <>
    <S.HomeContainer>
      <div>
        <S.TitleContainer>
          <S.Label>Random quiz</S.Label>
        </S.TitleContainer>
        <S.StyledLink to="/generate">
          <S.StyledButton variant="outlined" color="success" size="large">
            Generate
          </S.StyledButton>
        </S.StyledLink>
      </div>
      <Weekly />
    </S.HomeContainer>
  </>
);
