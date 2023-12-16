import { useLayoutEffect, useRef } from 'react';
import { IAnswer, usePostResults } from 'api';
import { CircularProgress } from '@mui/material';
import * as S from './completed.style';

interface CompletedProps {
  answers: IAnswer[];
}

export const Completed = ({ answers }: CompletedProps): JSX.Element => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { results, isLoadingResults, isResultsError, postResults } =
    usePostResults();

  useLayoutEffect(() => {
    postResults(answers);
  }, [answers, postResults]);

  return (
    <S.CompletedContainer ref={scrollRef}>
      <S.TitleContainer>
        <S.Title>How you did ?</S.Title>
      </S.TitleContainer>
      <S.ContentContainer>
        {isLoadingResults && (
          <div style={{ marginBottom: '2rem' }}>
            <CircularProgress />
          </div>
        )}
        {isResultsError && (
          <S.StyledAlert severity="error">
            Error calculation results...
          </S.StyledAlert>
        )}
        {results?.count !== undefined && (
          <S.ResultContainer>
            <S.ResultText>{results?.count}</S.ResultText>
            <S.Slash>/</S.Slash>
            <S.AnswersCount>{answers.length}</S.AnswersCount>
          </S.ResultContainer>
        )}
        <div style={{ marginTop: '3rem' }}>
          <p style={{ fontSize: '1.6rem', textAlign: 'center' }}>
            {results?.message}
          </p>
        </div>
      </S.ContentContainer>
    </S.CompletedContainer>
  );
};
