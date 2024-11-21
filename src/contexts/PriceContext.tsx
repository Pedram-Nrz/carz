import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import {PricesObject} from "../datatypes/crypto.ts"; 
 
 
type Action =
  | { type: 'update'; payload: PricesObject };
 
const initialState: PricesObject = {
  
};
 
const reducer = (state: PricesObject, action: Action): PricesObject => {
  const {type,payload} = action;
  switch (type) {
    case 'update':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
 
interface ContextProps {
  state: PricesObject;
  dispatch: React.Dispatch<Action>;
}
 
const PriceContext = createContext<ContextProps | undefined>(undefined);
 
export const PriceContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PriceContext.Provider value={{ state, dispatch }}>
      {children}
    </PriceContext.Provider>
  );
};


 

export const usePriceContext = () => {
  const context = useContext(PriceContext);

  if (!context) {
    throw new Error('PriceContext is called outside of its provider');
  }

  const { state, dispatch } = context;

  return {state,dispatch} ;
};

 