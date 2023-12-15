import { useContext } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { AppContext } from 'AppContext';
import { DifficultyEnum } from './difficulty.config';
import * as S from './difficulty.style';

export const Difficulty = (): JSX.Element => {
  const { generateParams, updateParams } = useContext(AppContext);

  return (
    <div>
      <S.LabelTitle>Difficulty</S.LabelTitle>
      <S.StyledSelect
        variant="outlined"
        color="success"
        value={generateParams.difficulty}
        defaultValue={generateParams.difficulty}
        onChange={(event: SelectChangeEvent<unknown>) =>
          updateParams({ difficulty: event.target.value as number })
        }
      >
        {Object.entries(DifficultyEnum).map((item, index) => (
          <S.StyledItem key={item[0]} value={index}>
            {item[1]}
          </S.StyledItem>
        ))}
      </S.StyledSelect>
    </div>
  );
};
