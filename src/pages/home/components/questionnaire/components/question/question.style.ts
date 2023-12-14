import styled from 'styled-components';

export const QuestionContainer = styled.div`
  max-width: 60rem;
  min-width: 30rem;
  padding: 2rem;
  box-shadow: 0 0 1rem #ddd;
  background: white;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const CountContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const QuestionNumber = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

export const TotalQuestions = styled.span`
  color: black;
`;

export const ImageContainer = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

export const Image = styled.img`
  /* max-width: 30rem; */
  /* min-width: 20rem; */
  width: 42rem;
`;

export const QuestionTitleContainer = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
`;

export const QuestionText = styled.h3`
  font-size: 2.4rem;
  color: #333;
`;
