import styled from 'styled-components';

export const LoaderContainer = styled.div<{ size: number; color: string }>`
  border: 0.2rem solid #f3f3f3;
  border-top: 0.2rem solid ${({ color }) => color};
  border-radius: 50%;
  width: ${({ size }) => size}rem;
  height: ${({ size }) => size}rem;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
