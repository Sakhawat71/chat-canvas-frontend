import PropTypes from 'prop-types';
import { auth } from '../firebase/firebase.config';
import { createContext } from 'react';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {





    auth

    return (
        {children}
    );
};

AuthProvider.propTypes = {
    children : PropTypes.node, 
};

export default AuthProvider;