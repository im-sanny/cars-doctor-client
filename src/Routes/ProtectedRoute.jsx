import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user?.email) {
        return children
    }
    return (
        <div>
            <Navigate state={location.pathname} to={'/login'} replace></Navigate>
        </div>
    );
};

export default ProtectedRoute;