import React, { createContext } from 'react';
import CSVConvert from '../CSVConvert';

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const allContext = CSVConvert
    return (
        <AuthContext.Provider value={allContext}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;