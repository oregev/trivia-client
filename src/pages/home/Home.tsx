import { useContext, useState } from 'react';
import { useGetWeeklyQuiz } from 'api';
import { AppContext } from 'AppContext';
import { Loader } from 'components';
import { Categories } from './components';
import * as S from './home.style';

export const Home = (): JSX.Element => {
  const { generateParams, setGenerateParams } = useContext(AppContext);

  const {
    weeklyQuiz,
    isLoadingWeeklyQuiz,
    isWeeklyQuizError,
    fetchWeeklyQuiz,
  } = useGetWeeklyQuiz();

  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  const isDisabled =
    !generateParams.categoryId ||
    !generateParams.difficulty ||
    !generateParams.amount;

  return (
    <S.HomeContainer>
      <S.HomeForm>
        <S.GenerateForm>
          <S.GenerateTitleContainer>
            <S.GenerateTitle>
              {isFormOpen ? 'Choose...' : 'Random quiz'}
            </S.GenerateTitle>
          </S.GenerateTitleContainer>
          {isFormOpen && (
            <>
              <div>
                <p>Category</p>
                <Categories
                  onSelect={(categoryId) =>
                    setGenerateParams({
                      ...generateParams,
                      categoryId,
                    })
                  }
                />
                <p>Difficulty</p>
                <S.DifficultySelector
                  onChange={(e) =>
                    setGenerateParams({
                      ...generateParams,
                      difficulty: e.target.value,
                    })
                  }
                >
                  <option value={0}>easy</option>
                  <option value={1}>medium</option>
                  <option value={2}>hard</option>
                </S.DifficultySelector>
                <p>Amount</p>
                <span>{generateParams.amount ?? 1}</span>
                <S.AmountInput
                  type="range"
                  defaultValue={1}
                  min={1}
                  max={10}
                  onChange={(e) =>
                    setGenerateParams({
                      ...generateParams,
                      amount: e.target.value,
                    })
                  }
                />
              </div>
              {isDisabled ? (
                <S.GenerateButton disabled={isDisabled}>Start</S.GenerateButton>
              ) : (
                <S.GenerateLink to="/quiz" onClick={() => setIsFormOpen(true)}>
                  Start
                </S.GenerateLink>
              )}
            </>
          )}
          {!isFormOpen && (
            <S.GenerateButton onClick={() => setIsFormOpen(true)}>
              Generate
            </S.GenerateButton>
          )}
        </S.GenerateForm>
        {!isFormOpen && (
          <S.WeeklyContainer>
            <S.WeeklyTitleContainer>
              <S.WeeklyTitle>Weekly quiz</S.WeeklyTitle>
            </S.WeeklyTitleContainer>
            {!weeklyQuiz && !isLoadingWeeklyQuiz && !isWeeklyQuizError && (
              <S.WeeklyButton onClick={() => fetchWeeklyQuiz()}>
                Check
              </S.WeeklyButton>
            )}
            {isLoadingWeeklyQuiz && (
              <S.LoaderContainer>
                <Loader size={3} />
              </S.LoaderContainer>
            )}
            {isWeeklyQuizError && (
              <S.ErrorContainer>
                <p>Error Loading weekly</p>
              </S.ErrorContainer>
            )}
            {weeklyQuiz?.id && <S.WeeklyButton>Start</S.WeeklyButton>}
            {weeklyQuiz && !weeklyQuiz?.id && (
              <S.NoQuizContainer>
                <p>No current quiz</p>
              </S.NoQuizContainer>
            )}
          </S.WeeklyContainer>
        )}
      </S.HomeForm>
    </S.HomeContainer>
  );
};
