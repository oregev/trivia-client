import { Alert, styled } from '@mui/material';

export const CompletedContainer = styled('div')`
  width: 75%;
  height: 25rem;

  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const TitleContainer = styled('div')`
  text-align: center;
  margin-bottom: 0.8rem;
`;

export const Title = styled('h3')`
  font-size: 2rem;
`;

export const ContentContainer = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledAlert = styled(Alert)`
  width: 100%;
  font-size: 1.4rem;
  font-weight: 500;
`;

export const ErrorText = styled('p')`
  font-size: 1.4rem;
`;

export const ResultContainer = styled('div')`
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

export const ResultText = styled('p')`
  font-size: 5rem;
  font-weight: bold;
  margin-inline-end: 0.8rem;
  color: rgb(40, 160, 249);
  height: fit-content;
  line-height: 1;
`;

export const Slash = styled('p')`
  font-size: 2.2rem;
  line-height: 1.6;
  color: gray;
`;

export const AnswersCount = styled('p')`
  font-size: 2.5rem;
  font-weight: 400;
  margin-inline-start: 0.8rem;
  color: rgb(118, 118, 118);
`;
