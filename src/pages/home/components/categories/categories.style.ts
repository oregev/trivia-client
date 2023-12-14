import styled from 'styled-components';

export const CategoriesContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

export const CategoriesSelector = styled.select`
  width: 100%;
  padding: 0.5rem;
  color: #333;
  border: 0.1rem solid #aaa;
  border-radius: 0.5rem;
`;

export const ErrorContainer = styled.div`
  height: 15rem;
  margin-top: 2rem;
  padding: 2rem;
  border: 0.1rem solid #aaa;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const ErrorText = styled.p`
  font-size: 1.5rem;
`;

export const ErrorButton = styled.button`
  padding: 0.4rem 0.8rem;
  width: 10rem;
  cursor: pointer;
`;
