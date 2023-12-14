import { useContext, useState } from 'react';
import { IAnswer, useGetQuestions } from 'api';
import { AppContext } from 'AppContext';
import { Loader } from 'components';
import { Question, Completed } from './components';
import * as S from './question.style';

export const Questionnaire = (): JSX.Element => {
  const { generateParams } = useContext(AppContext);
  const { questions, isLoadingQuestions, isQuestionsError } = useGetQuestions(
    generateParams.categoryId ?? '',
  );

  const [answers, setAnswers] = useState<IAnswer[]>([]);

  const handlePickAnswer = (newAnswer: IAnswer): void => {
    setAnswers((prev) => [...prev, newAnswer]);
  };

  const isCompleted = answers.length === questions?.length;

  if (isLoadingQuestions) {
    return (
      <S.LoaderContainer>
        <Loader />
      </S.LoaderContainer>
    );
  }

  if (isQuestionsError) {
    return (
      <S.QuestionsErrorText>Error loading questions !</S.QuestionsErrorText>
    );
  }

  if (!!generateParams.categoryId && !questions?.length) {
    return (
      <S.NoQuestionsText>No questions for this Category !</S.NoQuestionsText>
    );
  }

  return (
    <>
      {!!generateParams.categoryId && !questions?.length && (
        <S.ChooseCategoryText>Choose a category...</S.ChooseCategoryText>
      )}
      {questions?.length && (
        <S.QuestionsContainer>
          {questions?.map((question, index) => (
            <Question
              key={question.id}
              question={question}
              questionIndex={index}
              selectedAnswerId={
                answers.find((answer) => answer.questionId === question.id)
                  ?.answerId
              }
              onAnswer={handlePickAnswer}
            />
          ))}
        </S.QuestionsContainer>
      )}
      {isCompleted && <Completed answers={answers} />}
    </>
  );
};
