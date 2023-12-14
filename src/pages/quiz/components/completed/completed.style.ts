import styled from 'styled-components';

export const CompletedContainer = styled.div`
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 0.8rem;
`;

export const Title = styled.h3`
  font-size: 2rem;
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ErrorText = styled.p`
  font-size: 1.4rem;
`;

export const ResultContainer = styled.div`
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

  display: flex;
  align-items: end;
`;

export const ResultText = styled.p`
  font-size: 5rem;
  font-weight: bold;
  margin-inline-end: 0.8rem;
  color: rgb(40, 160, 249);
  height: fit-content;
  line-height: 1;
`;

export const Slash = styled.p`
  font-size: 2.2rem;
  line-height: 1.6;
  color: gray;
`;

export const AnswersCount = styled.p`
  font-size: 2.5rem;
  font-weight: 400;
  margin-inline-start: 0.8rem;
  line-height: 1.3;
  color: rgb(118, 118, 118);
`;
