import PropTypes from 'prop-types';
import useAdmin from '../hooks/useAdmin';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';

const AdminRoute = ({ children }) => {

    const [isAdmin, isAdminLoading] = useAdmin();
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();

    if (loading || isAdminLoading) {
        return <div className='flex items-center justify-center h-screen'>
            <FadeLoader />
        </div>
    }

    if(user && isAdmin){
        return children;
    }

    return navigate('/');
};

AdminRoute.propTypes = {
    children: PropTypes.node,
};

export default AdminRoute;