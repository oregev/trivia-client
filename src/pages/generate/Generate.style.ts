import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

export const GenerateForm = styled('div')`
  height: calc(100vh - 12rem);

  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const TitleContainer = styled('div')``;

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
