import React from 'react';
import { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
export const AuthContext = createContext()
const ProvideAuth = ({children}) => {
    const authValue = useFirebase()
    return (
        <div>
            <AuthContext.Provider value={authValue}>
        {children}
            </AuthContext.Provider>
        </div>
    );
};

export default ProvideAuth;