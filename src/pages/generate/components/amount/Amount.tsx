import { useContext } from 'react';
import { Slider } from '@mui/material';
import { AppContext } from 'AppContext';
import * as S from './amount.style';

export const Amount = (): JSX.Element => {
  const { generateParams, updateParams } = useContext(AppContext);

  return (
    <S.AmountContainer>
      <S.TitleContainer>
        <S.Title>Amount</S.Title>
        <S.Counter>({generateParams.amount})</S.Counter>
      </S.TitleContainer>
      <Slider
        min={1}
        max={10}
        defaultValue={1}
        onChange={(_event, value) =>
          updateParams({
            amount: value as number,
          })
        }
      />
    </S.AmountContainer>
  );
};
