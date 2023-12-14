import { useGetCategories } from 'api';
import { Loader } from 'components';
import { CategoriesSelector } from './CategoriesSelector';
import * as S from './categories.style';

interface CategoriesProps {
  onSelect: (categoryId: string) => void;
}

export const Categories = ({
  onSelect,
}: CategoriesProps): JSX.Element | null => {
  const {
    categories,
    isLoadingCategories,
    isCategoriesError,
    refetchCategories,
  } = useGetCategories();

  if (isLoadingCategories) {
    return <Loader />;
  }

  if (isCategoriesError) {
    return (
      <S.ErrorContainer>
        <S.ErrorText>Error loading categories...</S.ErrorText>
        <S.ErrorButton onClick={async () => await refetchCategories()}>
          Reload
        </S.ErrorButton>
      </S.ErrorContainer>
    );
  }

  return (
    <S.CategoriesContainer>
      <CategoriesSelector categories={categories} onSelect={onSelect} />
    </S.CategoriesContainer>
  );
};
