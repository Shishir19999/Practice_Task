import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  if (isAuthenticated !== 'true') {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
