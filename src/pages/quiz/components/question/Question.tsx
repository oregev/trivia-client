import { useMemo, useRef } from 'react';
import testImage from 'assets/test-Image.webp';
import { IAnswer, IQuestion } from 'api';
import { Answer } from '../answer';
import { getAnswers } from '../../quiz.utils';
import * as S from './question.style';

interface QuestionProps {
  question: IQuestion;
  questionIndex: number;
  totalQuestions: number;
  selectedAnswerId?: string;
  onAnswer: (newAnswer: IAnswer) => void;
}

export const Question = ({
  question,
  questionIndex,
  totalQuestions,
  selectedAnswerId,
  onAnswer,
}: QuestionProps): JSX.Element => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (): void => {
    if (containerRef) {
      const nextSibling = containerRef.current?.nextElementSibling;
      if (nextSibling) {
        setTimeout(() => {
          nextSibling.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 3000);
      }
    }
  };

  const answers = useMemo(
    () => getAnswers(question.incorrect, question.correct),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [question.id],
  );

  return (
    <S.QuestionContainer ref={containerRef}>
      <S.CountContainer>
        <S.QuestionNumber>{questionIndex + 1}</S.QuestionNumber>
        <S.TotalQuestions>/{totalQuestions}</S.TotalQuestions>
      </S.CountContainer>
      <S.ImageContainer>
        <S.Image src={testImage} />
      </S.ImageContainer>
      <S.QuestionTitleContainer>
        <S.QuestionText>{question.question}</S.QuestionText>
      </S.QuestionTitleContainer>
      {answers?.map((answer) => (
        <Answer
          key={answer}
          text={answer}
          passive={!!selectedAnswerId}
          selected={answer.toString() === selectedAnswerId}
          correct={!!selectedAnswerId && answer === question.correct}
          onAnswer={(): void => {
            onAnswer({ questionId: question.id, answerId: answer });
            handleScroll();
          }}
        />
      ))}
    </S.QuestionContainer>
  );
};
