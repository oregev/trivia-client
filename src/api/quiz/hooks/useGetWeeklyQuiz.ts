import { useQuery } from '@tanstack/react-query';
import { getWeeklyQuiz } from '../quiz.methods';

export const GET_WEEKLY_QUIZ_KEY = 'getWeeklyQuiz';

export const useGetWeeklyQuiz = () => {
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: [GET_WEEKLY_QUIZ_KEY],
    queryFn: getWeeklyQuiz,
    enabled: false,
  });

  return {
    isLoadingWeeklyQuiz: isLoading,
    isWeeklyQuizError: isError,
    weeklyQuiz: data,
    fetchWeeklyQuiz: refetch,
  };
};
