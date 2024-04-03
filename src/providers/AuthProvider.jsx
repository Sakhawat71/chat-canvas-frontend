import PropTypes from 'prop-types';
import { auth } from '../firebase/firebase.config';
import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup } from 'firebase/auth';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('');
    const [loading, setLaoding] = useState(true);

    console.log('auth in provider',auth);


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


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(' user data in auth state change',currentUser);
            setUser(currentUser)
            setLaoding(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    console.log('user info in authProvider ', user);

    const authInfo = {
        signUpEmailPass,
        signWithGoogle,
        loading,
        user,

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