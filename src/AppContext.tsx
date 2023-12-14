import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

interface GenerateParams {
  categoryId: string | null;
  difficulty: string | null;
  amount: string | null;
}

interface AppContextObj {
  generateParams: GenerateParams;
  setGenerateParams: Dispatch<SetStateAction<GenerateParams>>;
}

export const AppContext = createContext({} as AppContextObj);

export const AppContextProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [generateParams, setGenerateParams] = useState<GenerateParams>({
    categoryId: null,
    difficulty: null,
    amount: null,
  });

  const value: AppContextObj = {
    generateParams,
    setGenerateParams,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
