import { Alert, styled } from '@mui/material';

export const QuizContainer = styled('div')`
  height: calc(100vh - 15rem);
  padding: 1rem 2rem;
  overflow: auto;
`;

export const Container = styled('div')`
  height: calc(100vh - 6.4rem);
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledAlert = styled(Alert)`
  width: 100%;
  font-size: 1.8rem;
  font-weight: 500;
`;

export const Mask = styled('div')`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
