import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function ProtectedRoutes({children}) {
    const {isAuthenticated} = useSelector(state=>state.auth)
    const navigate = useNavigate()
    useEffect(()=>{
        if(isAuthenticated && localStorage.getItem('token') && localStorage.getItem('account') === 'Student'){
            return {children}
        }
        else{
            navigate('/login')
        }
    }, [isAuthenticated, localStorage.getItem('token')])
    return children
  
}
