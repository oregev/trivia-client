import { styled } from '@mui/material';

export const QuestionContainer = styled('div')`
  max-width: 60rem;
  min-width: 30rem;
  padding: 2rem;
  box-shadow: 0 0 1rem #000;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const CountContainer = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const QuestionNumber = styled('span')`
  font-size: 2rem;
  font-weight: bold;
`;

export const TotalQuestions = styled('span')`
  font-size: 1.4rem;
`;

export const ImageContainer = styled('div')`
  margin-bottom: 2rem;
  text-align: center;
`;

export const Image = styled('img')`
  width: 100%;
`;

export const QuestionTitleContainer = styled('div')`
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
`;

export const QuestionText = styled('h3')`
  font-size: 2.4rem;

  @media screen and (max-width: 600px) {
    font-size: 1.4rem;
  }
`;
