import { Alert, Button, CircularProgress } from '@mui/material';
import { Refresh } from '@mui/icons-material';
import { useGetWeeklyQuiz } from 'api';
import * as S from './weekly.style';

export const Weekly = (): JSX.Element => {
  const {
    weeklyQuiz,
    isLoadingWeeklyQuiz,
    isWeeklyQuizError,
    fetchWeeklyQuiz,
  } = useGetWeeklyQuiz();

  return (
    <S.WeeklyContainer>
      <S.WeeklyTitleContainer>
        <S.WeeklyTitle>Weekly quiz</S.WeeklyTitle>
        {!isLoadingWeeklyQuiz && isWeeklyQuizError && (
          <S.IconContainer onClick={() => fetchWeeklyQuiz()}>
            <Refresh sx={{ fontSize: 20 }} />
          </S.IconContainer>
        )}
      </S.WeeklyTitleContainer>
      {!weeklyQuiz && !isLoadingWeeklyQuiz && !isWeeklyQuizError && (
        <Button
          variant="outlined"
          color="success"
          size="large"
          style={{ fontSize: '1.4rem', width: '100%' }}
          onClick={() => fetchWeeklyQuiz()}
        >
          Check
        </Button>
      )}
      {isLoadingWeeklyQuiz && (
        <S.Container>
          <CircularProgress />
        </S.Container>
      )}
      {isWeeklyQuizError && (
        <S.Container>
          <Alert
            style={{ fontSize: '1.6rem', width: '100%', fontWeight: 500 }}
            severity="error"
          >
            Error checking for weekly!
          </Alert>
        </S.Container>
      )}
      {weeklyQuiz?.id && (
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          style={{ fontSize: '1.4rem', width: '100%' }}
        >
          Start
        </Button>
      )}
      {weeklyQuiz && !weeklyQuiz?.id && (
        <S.Container>
          <Alert
            style={{ fontSize: '1.6rem', width: '100%', fontWeight: 500 }}
            severity="error"
          >
            No weekly quiz!
          </Alert>
        </S.Container>
      )}
    </S.WeeklyContainer>
  );
};
