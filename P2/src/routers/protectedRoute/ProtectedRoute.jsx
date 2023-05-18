import React from 'react'
import { useAuth } from '@authentication/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'
import { PropTypes } from 'prop-types'

export default function ProtectedRoute({ children }) {
  const { user } = useAuth()
  const location = useLocation()
  if (!user) {
    if (location.pathname === '/signIn') {
      return <>{children}</>
    }
    return <Navigate to="/logIn" />
  }
  return <>{children}</>
}
