import React from 'react';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const ProtectRoute = ({ children }) => {
    const userData = useSelector((state) => state.user.user);

    if (userData?.role !== 'admin') {
        toast.error("User is not an admin");
        return <Navigate to="/" />; 
    }

    return children;
}
export default ProtectRoute
