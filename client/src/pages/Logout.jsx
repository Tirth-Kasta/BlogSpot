import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, clean } from '../store/auth.slice'
import { Navigate } from 'react-router-dom';
const Logout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clean());
    }, [])
    return <Navigate to='/login'></Navigate>
}

export default Logout