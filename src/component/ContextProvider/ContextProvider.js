import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const useContexts = createContext();
const ContextProvider = ({children}) => {
    const contextValue = useFirebase();
    return (
        <div>
            <useContexts.Provider value={contextValue}>
                {children}
            </useContexts.Provider>
        </div>
    );
};

export default ContextProvider;