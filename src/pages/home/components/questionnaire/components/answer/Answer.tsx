import { SuccessIcon, ErrorIcon } from 'components/icons';
import * as S from './answer.style';

interface AnswerProps {
  text: string;
  selected: boolean;
  passive: boolean;
  correct: boolean;
  onAnswer: () => void;
}

export const Answer = ({
  text,
  selected,
  passive,
  correct,
  onAnswer,
}: AnswerProps): JSX.Element => (
  <S.AnswerContainer
    onClick={!passive ? onAnswer : undefined}
    $passive={passive}
    $selected={selected}
    $correct={correct}
  >
    <S.AnswerText>{text}</S.AnswerText>
    {correct && (
      <S.FadeInContainer>
        <SuccessIcon width={24} height={24} fill="rgb(40, 167, 69)" />
      </S.FadeInContainer>
    )}
    {passive && selected && !correct && (
      <S.FadeInContainer>
        <ErrorIcon width={21} height={21} fill="rgb(228, 16, 32)" />
      </S.FadeInContainer>
    )}
  </S.AnswerContainer>
);
