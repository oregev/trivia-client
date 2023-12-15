import { Dispatch, SetStateAction } from 'react';
import { Amount, Category, Difficulty } from './components';
import * as S from './Generate.style';

interface GenerateProps {
  isOpen: boolean;
  disabled: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export const Generate = ({
  isOpen,
  disabled,
  setIsOpen,
}: GenerateProps): JSX.Element => (
  <S.GenerateForm>
    <S.GenerateTitleContainer isOpen={isOpen}>
      <S.GenerateTitle>{isOpen ? 'Choose...' : 'Random quiz'}</S.GenerateTitle>
    </S.GenerateTitleContainer>
    {isOpen && (
      <>
        <Category />
        <Difficulty />
        <Amount />
        <S.StyledLink to={disabled ? '#' : '/quiz'}>
          <S.StyledButton
            variant="outlined"
            size="large"
            color="success"
            disabled={disabled}
          >
            Start
          </S.StyledButton>
        </S.StyledLink>
      </>
    )}
    {!isOpen && (
      <>
        <S.StyledButton
          variant="outlined"
          color="success"
          size="large"
          onClick={() => setIsOpen(true)}
        >
          Generate
        </S.StyledButton>
      </>
    )}
  </S.GenerateForm>
);
