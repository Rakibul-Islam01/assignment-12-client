import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location)

    if(loading){
        return <progress className="progress w-56 block mx-auto h-3 my-12"> </progress>
    }

    if(user){
        return children;
    }
    
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;