import { useMutation } from '@tanstack/react-query';
import { axiosFn } from 'api/axios';
import type { IAnswer, IResult } from './results.types';
import { AxiosResponse } from 'axios';

export const POST_RESULTS_KEY = 'postResults';

export const usePostResults = () => {
  const { isPending, isError, data, mutate } = useMutation({
    mutationKey: [POST_RESULTS_KEY],
    mutationFn: async (payload: IAnswer[]): Promise<IResult> => {
      const data = await axiosFn
        .post<IAnswer[], AxiosResponse<IResult>>('results', {
          data: payload,
        })
        .then((response) => response.data);
      return data;
    },
  });

  return {
    isLoadingResults: isPending,
    isResultsError: isError,
    results: data,
    postResults: mutate,
  };
};
