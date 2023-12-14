import styled from "styled-components";

export const CreatorContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CreatorTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const CreatorTitle = styled.h3`
  font-size: 30px;
`;

export const CreatorInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  .textInput {
    margin-bottom: 10px;
  }
`;

export const CreatorInputLabel = styled.label`
  font-size: 12px;
  font-weight: bold;
`;

export const CreatorInput = styled.input`
  width: 300px;
  padding: 5px 8px;
  background: white;
  color: #333;

  border-radius: 5px;
  border: 1px solid lightgray;
`;

export const CreatorButton = styled.button`
  width: 150px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: gray;
  transition: 0.3s;
  cursor: pointer;
  box-shadow: 0 0 20px #aaa;

  &:hover {
    background: lightgray;
    color: gray;
  }

  &:disabled {
    background: #eee;
    color: #aaa;
    border: 1px solid lightgray;
    cursor: not-allowed;
    box-shadow: none;
  }
`;
``;
