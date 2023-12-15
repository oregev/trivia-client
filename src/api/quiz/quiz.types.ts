export interface GenerateParams {
  categoryId: string | null;
  difficulty: number;
  amount: number;
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
