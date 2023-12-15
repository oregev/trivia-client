import { useContext, useEffect, useState } from 'react';
import { CircularProgress, Modal } from '@mui/material';
import { IAnswer, useGetQuiz } from 'api';
import { AppContext } from 'AppContext';
import { Question, Completed } from './components';
import * as S from './quiz.style';

export const Quiz = (): JSX.Element => {
  const { generateParams } = useContext(AppContext);
  const { quiz, isLoadingQuiz, isQuizError } = useGetQuiz(generateParams);

  const [answers, setAnswers] = useState<IAnswer[]>([]);
  const [isCompletedOpen, setIsCompletedOpen] = useState<boolean>(false);

  const handlePickAnswer = (newAnswer: IAnswer): void => {
    setAnswers((prev) => [...prev, newAnswer]);
  };

  useEffect(() => {
    if (answers.length === quiz?.quiz?.length) {
      setTimeout(() => {
        setIsCompletedOpen(true);
      }, 1000);
    }
  }, [answers.length, quiz?.quiz?.length]);

  if (isLoadingQuiz) {
    return (
      <S.Container>
        <CircularProgress />
      </S.Container>
    );
  }

  if (isQuizError) {
    return (
      <S.Container>
        <S.StyledAlert severity="error">
          Error loading questions !
        </S.StyledAlert>
      </S.Container>
    );
  }

  return (
    <>
      {quiz?.id && (
        <S.QuizContainer>
          {quiz?.quiz.map((question, index) => (
            <Question
              key={question.id}
              question={question}
              questionIndex={index}
              totalQuestions={quiz?.quiz?.length}
              selectedAnswerId={
                answers.find((answer) => answer.questionId === question.id)
                  ?.answerId
              }
              onAnswer={handlePickAnswer}
            />
          ))}
        </S.QuizContainer>
      )}
      <Modal open={isCompletedOpen} onClose={setIsCompletedOpen}>
        <S.Mask onClick={() => setIsCompletedOpen(false)}>
          <Completed answers={answers} />
        </S.Mask>
      </Modal>
    </>
  );
};
