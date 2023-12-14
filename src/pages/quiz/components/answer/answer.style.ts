import styled, { css } from 'styled-components';

export const AnswerContainer = styled.div<{
  $passive: boolean;
  $selected: boolean;
  $correct: boolean;
}>`
  padding: 0.4rem 1.5rem;
  background: #fff;
  border: 0.1rem solid rgb(219, 219, 219);
  border-radius: 3rem;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  &:active {
    background: #ddd;
  }

  ${({ $passive }) =>
    $passive
      ? css`
          color: #ddd;
          cursor: not-allowed;
        `
      : css`
          &:hover {
            background: rgb(204, 235, 255);
          }
        `}

  ${({ $selected, $correct }) =>
    $selected &&
    !$correct &&
    css`
      font-weight: bold;
    `};

  ${({ $correct }) =>
    $correct &&
    css`
      color: #333;
      font-weight: bold;
    `}

  ${({ $selected, $correct }) =>
    $selected &&
    $correct &&
    css`
      font-weight: bold;
    `};
`;

export const AnswerText = styled.p`
  font-size: 1.7rem;
  font-weight: 400;

  @media screen and (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

export const FadeInContainer = styled.div`
  display: flex;
  align-items: center;

  opacity: 0;
  animation: fadeIn 0.5s ease-in forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
