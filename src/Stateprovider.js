// setup data layer
// we need this to track the basket

import { createContext, useContext, useReducer } from "react";
// this is the data leyer
export const StateContext = createContext();
// Build a provider  
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
        {/* this childer refer to aap */}
    </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);
console.log("usesta" + useStateValue);