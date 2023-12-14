import { useQuery } from '@tanstack/react-query';
import { axiosFn } from 'api/axios';
import type { ICategory } from './categories.types';

export const GET_CATEGORIES_KEY = 'getCategories';

export const useGetCategories = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [GET_CATEGORIES_KEY],
    queryFn: async (): Promise<ICategory[]> => {
      const { data } = await axiosFn.get<ICategory[]>(`categories`);
      return data;
    },
  });

  return {
    refetchCategories: refetch,
    categories: data,
    isLoadingCategories: isLoading,
    isCategoriesError: isError,
  };
};
