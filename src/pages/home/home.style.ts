import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  height: calc(100vh - 5rem);
  padding: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeForm = styled.div``;

// =====
export const GenerateForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GenerateTitleContainer = styled.div``;

export const GenerateTitle = styled.h3`
  text-align: center;
  font-size: 1.6rem;
  color: rgb(100, 100, 100);
`;

export const GenerateButton = styled.button`
  width: 20rem;
  margin-bottom: 4rem;
  padding: 1rem;
  color: #666;
  background: #ddd;
  font-size: 1.6rem;
  border: 0.1rem solid #ddd;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background: #eee;
  }

  &:active {
    background: #bbb;
  }

  &:disabled {
    color: #ccc;
    background: #fff;
    cursor: not-allowed;
  }
`;

export const GenerateLink = styled(Link)`
  width: 20rem;
  margin-bottom: 4rem;
  padding: 1rem;
  color: #666;
  background: #ddd;
  text-align: center;
  text-decoration: none;
  font-size: 1.6rem;
  border: 0.1rem solid #ddd;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background: #eee;
  }

  &:active {
    background: #bbb;
  }
`;

export const DifficultySelector = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 0.1rem solid #aaa;
  border-radius: 0.5rem;
  text-transform: capitalize;

  margin-bottom: 1rem;
`;

export const AmountInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 0.1rem solid #aaa;
  border-radius: 0.5rem;

  margin-bottom: 1rem;
`;

// =====

// =====
export const WeeklyContainer = styled.div`
  width: 100%;
`;

export const WeeklyTitleContainer = styled.div``;

export const WeeklyTitle = styled.h3`
  text-align: center;
  font-size: 1.6rem;
  color: rgb(100, 100, 100);
`;

export const WeeklyButton = styled.button`
  width: 20rem;
  padding: 1rem;
  color: #666;
  font-size: 1.6rem;
  border: 0.1rem solid #ddd;
  border-radius: 0.5rem;
  cursor: pointer;
`;
// =====

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NoQuizContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// =================================================
export const CategoriesContainer = styled.div`
  padding: 2rem;
  border: 0.1rem solid #ddd;
  border-radius: 0.5rem;
`;

export const CategoriesSelector = styled.select`
  padding: 0.5rem;
  color: #333;
  border: 0.1rem solid #aaa;
  border-radius: 0.5rem;
`;
