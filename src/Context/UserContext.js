import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext({})

const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, Setuser] = useState({ email: "faruk" });
    const [loading, Setloading] = useState(true)
    const signup = (email, password) => {
        Setloading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signin = (email, password) => {
        Setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            Setuser(currentuser);
            Setloading(false)
            console.log('current user', currentuser.email)
        });
        return () => {
            unsubscribe();
        }
    }, [])










    const authinfo = { user, signup, signin, logout, Setuser, loading }
    return (

        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default UserContext;