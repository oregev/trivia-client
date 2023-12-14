export interface GenerateParams {
  categoryId: string | null;
  difficulty: string | null;
  amount: string | null;
}

export interface IQuestion {
  id: string;
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct: string;
  incorrect: string[];
}

export interface IQuiz {
  id: string;
  quiz: IQuestion[];
}
