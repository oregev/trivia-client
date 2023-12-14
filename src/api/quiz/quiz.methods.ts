import { axiosFn } from 'api/axios';
import { GenerateParams, IQuiz } from './quiz.types';

export const getQuiz = async (params: GenerateParams): Promise<IQuiz> => {
  const { data } = await axiosFn.get<IQuiz>('quiz', { params });
  return data;
};

export const getWeeklyQuiz = async (): Promise<IQuiz> => {
  const { data } = await axiosFn.get<IQuiz>('quiz/weekly');
  return data;
};
