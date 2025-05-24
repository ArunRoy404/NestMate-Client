import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuthContext from '../CustomContexts/UseAuthContext';
import { notifyWarn } from '../utilities/notify';
import Loader from '../Components/Loaders/Loader';

const PrivateRoute = ({ children }) => {

    const { loggedUser, isUserLoading } = useAuthContext()
    const { pathname } = useLocation()

    useEffect(() => {
        if (!isUserLoading && !loggedUser) {
            notifyWarn("You need to log in first.")
        }
    }, [isUserLoading, loggedUser])

    if (isUserLoading) {
        return <div className="h-[80vh] flex items-center justify-center"><Loader></Loader></div>
    }

    if (!loggedUser) {
        return <Navigate to={'/login'} state={pathname}></Navigate>
    }

    return children
};

export default PrivateRoute;