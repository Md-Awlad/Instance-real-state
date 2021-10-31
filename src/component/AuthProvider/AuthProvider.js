import { createContext } from "react";
import useFirebase from "../../hooks/useFirebase";

export const AuthProvider = createContext()
const AuthProviders = ({children}) => {
    const firbaseValue = useFirebase()
    return (
            <AuthProvider.Provider value={firbaseValue}>
            {children}
            </AuthProvider.Provider>
    );
};

export default AuthProviders;