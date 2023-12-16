import { useContext } from 'react';
import { AppContext } from 'AppContext';
import { Amount, Category, Difficulty } from './components';
import * as S from './Generate.style';

export const Generate = (): JSX.Element => {
  const {
    generateParams: { categoryId },
  } = useContext(AppContext);

  return (
    <S.GenerateForm>
      <S.TitleContainer>
        <S.GenerateTitle>Choose...</S.GenerateTitle>
      </S.TitleContainer>
      <Category />
      <Difficulty />
      <Amount />
      <S.StyledLink to={!categoryId ? '#' : '/quiz'}>
        <S.StyledButton
          variant="outlined"
          size="large"
          color="success"
          disabled={!categoryId}
        >
          Start
        </S.StyledButton>
      </S.StyledLink>
    </S.GenerateForm>
  );
};
