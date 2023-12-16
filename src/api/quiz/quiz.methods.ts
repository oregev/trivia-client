import { axiosFn } from 'api/axios';
import { GenerateParams, IQuiz } from './quiz.types';

export const getQuiz = async (
  params: GenerateParams,
  resetParams: () => void,
): Promise<IQuiz> => {
  const { data } = await axiosFn.get<IQuiz>('quiz', { params });
  if (data) {
    resetParams();
  }
  return data;
};

export const getWeeklyQuiz = async (): Promise<IQuiz> => {
  const { data } = await axiosFn.get<IQuiz>('quiz/weekly');
  return data;
};
