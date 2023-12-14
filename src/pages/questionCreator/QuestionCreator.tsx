import { ChangeEvent, useState } from "react";
import * as S from "./questionCreator.style";

interface NewQuestion {
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  image: string;
}

export const QuestionCreator = (): JSX.Element => {
  const [newQuestion, setNewQuestion] = useState<NewQuestion>({
    question: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    image: "",
  });

  const handleUpdateQuestion = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewQuestion({ ...newQuestion, [e.target.name]: e.target.value });
  };

  const isDisabled: boolean =
    !newQuestion.question ||
    !newQuestion.answer1 ||
    !newQuestion.answer2 ||
    !newQuestion.answer3 ||
    !newQuestion.answer4 ||
    !newQuestion.image;

  return (
    <S.CreatorContainer>
      <S.CreatorTitleContainer>
        <S.CreatorTitle>Question Creator</S.CreatorTitle>
      </S.CreatorTitleContainer>
      <S.CreatorInputContainer>
        <S.CreatorInputLabel>Question</S.CreatorInputLabel>
        <S.CreatorInput
          name="question"
          type="text"
          placeholder="Add question"
          value={newQuestion.question}
          onChange={handleUpdateQuestion}
        />
      </S.CreatorInputContainer>
      <S.CreatorInputContainer>
        <S.CreatorInputLabel>Answers</S.CreatorInputLabel>
        <S.CreatorInput
          name="answer1"
          type="text"
          placeholder="Add answer 1"
          className="textInput"
          value={newQuestion.answer1}
          onChange={handleUpdateQuestion}
        />
        <S.CreatorInput
          name="answer2"
          type="text"
          placeholder="Add answer 2"
          className="textInput"
          value={newQuestion.answer2}
          onChange={handleUpdateQuestion}
        />
        <S.CreatorInput
          name="answer3"
          type="text"
          placeholder="Add answer 3"
          className="textInput"
          value={newQuestion.answer3}
          onChange={handleUpdateQuestion}
        />
        <S.CreatorInput
          name="answer4"
          type="text"
          placeholder="Add answer 4"
          className="textInput"
          value={newQuestion.answer4}
          onChange={handleUpdateQuestion}
        />
      </S.CreatorInputContainer>
      <S.CreatorInputContainer>
        <S.CreatorInputLabel>Image</S.CreatorInputLabel>
        <S.CreatorInput
          name="image"
          type="file"
          placeholder="import image"
          onChange={handleUpdateQuestion}
        />
      </S.CreatorInputContainer>
      <S.CreatorButton disabled={isDisabled}>Add Question</S.CreatorButton>
    </S.CreatorContainer>
  );
};
