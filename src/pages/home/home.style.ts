import { styled } from '@mui/material';

export const HomeContainer = styled('div')<{ isOpen: boolean }>`
  height: calc(100vh - 5rem);

  margin-top: ${({ isOpen }) => (isOpen ? 0 : 10)}rem;
  display: flex;
  justify-content: center;
`;

export const HomeForm = styled('div')`
  width: 100%;
  padding: 5rem;
`;
