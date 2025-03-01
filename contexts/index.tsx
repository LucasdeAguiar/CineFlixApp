import React, {
    createContext,
    useState,
    useMemo,
    Dispatch,
    SetStateAction,
    ReactNode,
  } from 'react';
  
  
  type TRecebedor = {
    nomeRecebedor?: string;
    documentoRecebedor?: string;
  };
  
  type AppState = {
    recebedor?: TRecebedor;
  };
  
  type TAppContext = {
    appState: AppState;
    setAppState: Dispatch<SetStateAction<AppState>>;
  };
  
  const INITIAL_STATE: TAppContext = {
    appState: {
      recebedor: {
        documentoRecebedor: '',
        nomeRecebedor: '',
      },
    },
    setAppState: () => {},
  };
  
  export const AppContext = createContext<TAppContext>(INITIAL_STATE);
  
  type Props = {
    children: ReactNode;
  };
  
  const AppContextProvider = ({ children }: Props) => {
    const [appState, setAppState] = useState<AppState>({});
    const value = useMemo(
      () => ({ appState, setAppState }),
      [appState, setAppState],
    );
  
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
  };
  
  export default AppContextProvider;
  