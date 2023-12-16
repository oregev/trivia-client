import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

interface GenerateParams {
  categoryId: string | null;
  difficulty: number;
  amount: number;
}

interface AppContextObj {
  generateParams: GenerateParams;
  mode: boolean;
  resetParams: () => void;
  setMode: Dispatch<SetStateAction<boolean>>;
  updateParams: (payload: Partial<GenerateParams>) => void;
}

export const AppContext = createContext({} as AppContextObj);

export const AppContextProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [mode, setMode] = useState<boolean>(false);
  const [generateParams, setGenerateParams] = useState<GenerateParams>({
    categoryId: null,
    difficulty: 0,
    amount: 1,
  });

  const updateParams = (payload: Partial<GenerateParams>): void => {
    setGenerateParams((prev) => ({ ...prev, ...payload }));
  };

  const resetParams = (): void => {
    setGenerateParams({
      categoryId: null,
      difficulty: 0,
      amount: 1,
    });
  };

  const value: AppContextObj = {
    generateParams,
    mode,
    setMode,
    updateParams,
    resetParams,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
