import { useQuery } from '@tanstack/react-query';
import { getQuiz } from '../quiz.methods';
import { GenerateParams } from '../quiz.types';

export const GET_QUIZ_KEY = 'getQuiz';

export const useGetQuiz = (generateParams: GenerateParams) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: [GET_QUIZ_KEY],
    queryFn: () => getQuiz(generateParams),
  });

  return {
    isLoadingQuiz: isLoading,
    isQuizError: isError,
    quiz: data,
  };
};
