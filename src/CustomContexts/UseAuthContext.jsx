import { useContext } from 'react';
import AuthContext from '../Contexts/AuthContext/AuthContext';

const useAuthContext = () => {
    return useContext(AuthContext)
};

export default useAuthContext;