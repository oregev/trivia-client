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

  const value: AppContextObj = {
    generateParams,
    mode,
    setMode,
    updateParams,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
