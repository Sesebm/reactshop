import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

const Protected = () => {
  const token = useSelector(state => state.token)
  if(token!=0){
    return <Outlet />
} else { 
    return <Navigate to='/login' />
}    
}

export default Protected