import { useContext, useState } from 'react';
import { AppContext } from 'AppContext';
import { Generate, Header, Weekly } from './components';
import * as S from './home.style';

export const Home = (): JSX.Element => {
  const { generateParams } = useContext(AppContext);
  const [isGenerateOpen, setIsGenerateOpen] = useState<boolean>(false);

  return (
    <>
      <Header isOpen={isGenerateOpen} onBack={() => setIsGenerateOpen(false)} />
      <S.HomeContainer isOpen={isGenerateOpen}>
        <S.HomeForm>
          <Generate
            isOpen={isGenerateOpen}
            disabled={generateParams.categoryId === null}
            setIsOpen={setIsGenerateOpen}
          />
          {!isGenerateOpen && <Weekly />}
        </S.HomeForm>
      </S.HomeContainer>
    </>
  );
};
