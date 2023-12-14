export interface IQuestion {
  id: string;
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct: string;
  incorrect: string[];
}
