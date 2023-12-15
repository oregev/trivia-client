import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

export const GenerateForm = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const GenerateTitleContainer = styled('div')<{ isOpen: boolean }>`
  margin-bottom: ${({ isOpen }) => (isOpen ? 3 : 1)}rem;
`;

export const TitleContainer = styled('div')`
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
`;

export const GenerateTitle = styled('h3')`
  font-size: 1.8rem;
`;

export const StyledLink = styled(Link)`
  width: 100%;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  font-size: 1.4rem;
`;
