import { useContext } from 'react';
import { Alert, CircularProgress } from '@mui/material';
import { Refresh } from '@mui/icons-material';
import { AppContext } from 'AppContext';
import { useGetCategories } from 'api';
import { CategoriesSelector } from '../categorySelector';
import * as S from './category.style';

export const Category = (): JSX.Element => {
  const { generateParams, updateParams } = useContext(AppContext);
  const {
    categories,
    isLoadingCategories,
    isCategoriesError,
    refetchCategories,
  } = useGetCategories();

  return (
    <>
      <S.TitleContainer>
        <S.LabelTitle>Category</S.LabelTitle>
        {!isLoadingCategories && (
          <S.IconContainer onClick={() => refetchCategories()}>
            <Refresh sx={{ fontSize: 20 }} />
          </S.IconContainer>
        )}
      </S.TitleContainer>
      {isLoadingCategories && (
        <S.Container>
          <CircularProgress />
        </S.Container>
      )}
      {isCategoriesError && (
        <S.Container>
          <Alert style={{ fontSize: '1.4rem', width: '100%' }} severity="error">
            Error loading categories!
          </Alert>
        </S.Container>
      )}
      <S.CategoriesContainer>
        {categories && (
          <CategoriesSelector
            categories={categories}
            categoryId={generateParams.categoryId}
            onSelect={(categoryId) => updateParams({ categoryId })}
          />
        )}
      </S.CategoriesContainer>
    </>
  );
};
