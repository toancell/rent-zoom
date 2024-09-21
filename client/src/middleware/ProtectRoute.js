import React from 'react';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const ProtectRoute = ({ children }) => {
    const user = useSelector((state) => state.user.isLogin);
    
    if (!user ) {
        toast.error("Ban chua dang nhap");
        return <Navigate to="/" />; 
    }

    return children;
}
export default ProtectRoute
