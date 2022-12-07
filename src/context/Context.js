import { createContext, useEffect, useReducer } from 'react';
import { rootReducer } from './Reducer';

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  errors: false,
};

export const Context = createContext(INITIAL_STATE);

export default function ContextProvider ({ children })  {
  const [state, dispatch] = useReducer(rootReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user))
  }, [state.user]);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};
