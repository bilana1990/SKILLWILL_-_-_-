// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useAuth();

    return (
        isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" replace />
    );
};

export default ProtectedRoute;