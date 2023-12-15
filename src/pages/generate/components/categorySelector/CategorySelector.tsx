import { SelectChangeEvent } from '@mui/material';
import { ICategory } from 'api';
import * as S from './categorySelector.style';

interface CategoriesSelectorProps {
  categories?: ICategory[];
  categoryId: string | null;
  onSelect: (id: string) => void;
}

export const CategoriesSelector = ({
  categories,
  categoryId,
  onSelect,
}: CategoriesSelectorProps): JSX.Element => (
  <S.StyledSelect
    variant="outlined"
    color="success"
    value={categoryId ?? ''}
    onChange={(e: SelectChangeEvent<unknown>) =>
      onSelect(e.target.value as string)
    }
  >
    {categories?.map(({ id, name }) => (
      <S.StyledItem key={id} value={id}>
        {name}
      </S.StyledItem>
    ))}
  </S.StyledSelect>
);
