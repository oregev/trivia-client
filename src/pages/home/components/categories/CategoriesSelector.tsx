import { ICategory } from 'api';
import * as S from './categories.style';

interface CategoriesSelectorProps {
  categories?: ICategory[];
  onSelect: (id: string) => void;
}

export const CategoriesSelector = ({
  categories,
  onSelect,
}: CategoriesSelectorProps): JSX.Element => (
  <S.CategoriesSelector onChange={(e) => onSelect(e.target.value)}>
    <option value="" disabled hidden>
      Choose here
    </option>
    {categories?.map(({ id, name }) => (
      <option key={id} value={id}>
        {name}
      </option>
    ))}
  </S.CategoriesSelector>
);
