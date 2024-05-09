import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { BiLoader } from 'react-icons/bi';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <BiLoader color="#36d7b7" />
            </div>
        )
    }

    if (user) {
        return children;
    }
    return <Navigate to={'/login'}></Navigate>
};


PrivetRoute.propTypes = {
    children: PropTypes.node,
};


export default PrivetRoute;