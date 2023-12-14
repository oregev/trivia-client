import { useContext, useState } from 'react';
import { IAnswer, useGetQuiz } from 'api';
import { AppContext } from 'AppContext';
import { Loader } from 'components';
import { Question, Completed } from './components';
import * as S from './quiz.style';

export const Quiz = (): JSX.Element => {
  const { generateParams } = useContext(AppContext);
  const { quiz, isLoadingQuiz, isQuizError } = useGetQuiz(generateParams);

  const [answers, setAnswers] = useState<IAnswer[]>([]);

  const handlePickAnswer = (newAnswer: IAnswer): void => {
    setAnswers((prev) => [...prev, newAnswer]);
  };

  const isCompleted = answers.length === quiz?.quiz?.length;

  if (isLoadingQuiz) {
    return (
      <S.LoaderContainer>
        <Loader />
      </S.LoaderContainer>
    );
  }

  if (isQuizError) {
    return <S.QuizErrorText>Error loading questions !</S.QuizErrorText>;
  }

  // if (!quiz?.length) {
  //   return (
  //     <S.NoQuestionsText>No questions for this Category !</S.NoQuestionsText>
  //   );
  // }

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
      {isCompleted && <Completed answers={answers} />}
    </>
  );
};
