import { useQuery } from '@tanstack/react-query';
import { axiosFn } from 'api/axios';
import type { IQuestion } from './questions.types';

export const GET_QUESTIONS_KEY = 'getQuestions';

export const useGetQuestions = (id?: string) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: [GET_QUESTIONS_KEY, id],
    queryFn: async (): Promise<IQuestion[]> => {
      const { data } = await axiosFn.get<IQuestion[]>('questions', {
        params: { categoryId: id },
      });
      return data;
    },
    enabled: !!id,
  });

  return {
    isLoadingQuestions: isLoading,
    isQuestionsError: isError,
    questions: data,
  };
};
