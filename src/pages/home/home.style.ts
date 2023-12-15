import { Button, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const HomeContainer = styled('div')`
  height: calc(100vh - 12rem);

  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  font-size: 1.4rem;
`;

export const TitleContainer = styled('div')`
  margin-bottom: 0.4rem;
`;

export const Label = styled('h3')`
  font-size: 1.8rem;
`;

export const StyledLink = styled(Link)`
  width: 100%;
`;
