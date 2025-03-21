import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <h3>Loading...</h3>
    }

    if (user) {
        return children;
    }
    return (
        <Navigate to={'/login'}></Navigate>
    );
};

export default PrivateRoute;