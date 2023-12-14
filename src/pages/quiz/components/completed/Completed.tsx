import { useLayoutEffect, useRef } from 'react';
import { IAnswer, usePostResults } from 'api';
import { Loader } from 'components';
import * as S from './completed.style';

interface CompletedProps {
  answers: IAnswer[];
}

export const Completed = ({ answers }: CompletedProps): JSX.Element => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { results, isLoadingResults, isResultsError, postResults } =
    usePostResults();

  useLayoutEffect(() => {
    if (scrollRef) {
      scrollRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });

      if (answers) {
        postResults(answers);
      }
    }
  }, [answers, postResults]);

  return (
    <S.CompletedContainer ref={scrollRef}>
      <S.TitleContainer>
        <S.Title>How you did ?</S.Title>
      </S.TitleContainer>
      <S.ContentContainer>
        {isLoadingResults && <Loader />}
        {isResultsError && (
          <S.ErrorText>Error calculation results...</S.ErrorText>
        )}
        {results?.count && (
          <S.ResultContainer>
            <S.ResultText>{results?.count}</S.ResultText> <S.Slash>/</S.Slash>
            <S.AnswersCount>{answers.length}</S.AnswersCount>
          </S.ResultContainer>
        )}
      </S.ContentContainer>
    </S.CompletedContainer>
  );
};
