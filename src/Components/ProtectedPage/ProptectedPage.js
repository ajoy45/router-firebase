import { getAuth } from 'firebase/auth';
import React, { children } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import app from '../../firebase.init';
const auth=getAuth(app)
const ProptectedPage = ({ children }) => {
    let [user] = useAuthState(auth);
    let location = useLocation();
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default ProptectedPage;