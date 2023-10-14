import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const AuthRedirect = ({requireAuth=false}) => {
    const connectedUser=useSelector(state=>state.user.user)
    const location=useLocation()
  return (
    (requireAuth===false) ? 
      (connectedUser===null) ? <Outlet/> : <Navigate to="/" state={{from:location}} replace/>
    : 
    connectedUser!==null ? <Outlet/> : <Navigate to="/connexion" replace/>
    
    
  )
}

export default AuthRedirect
