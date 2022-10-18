import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext({})

const auth = getAuth(app);

const UserContext = ({ children }) => {
    const user = { displayname: "faruk" };
    const authinfo = { user }
    return (

        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default UserContext;