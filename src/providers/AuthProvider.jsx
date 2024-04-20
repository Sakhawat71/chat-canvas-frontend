import PropTypes from 'prop-types';
import { auth } from '../firebase/firebase.config';
import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLaoding] = useState(true);



    // sign up with email password
    const signUpEmailPass = (email, password) => {
        setLaoding(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // social sign up
    const provider = new GoogleAuthProvider()
    const signWithGoogle = () => {
        setLaoding(true);
        return signInWithPopup(auth, provider);
    }

    // login with email password
    const SignInEmailPass = (email, password) => {
        setLaoding(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // log out
    const logout = () => {
        setLaoding(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(' user data in auth state change', currentUser);
            setUser(currentUser);
            setLaoding(false);

        })
        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo = {
        signUpEmailPass,
        signWithGoogle,
        SignInEmailPass,
        logout,
        loading,
        user,
        setLaoding
    }

    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;