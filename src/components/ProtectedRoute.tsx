import React, { useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import { SSO_URL } from '../config/sso'

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoggedIn } = useAuth()

  useEffect(() => {
    if (!isLoggedIn) {
      window.location.href = SSO_URL
    }
  }, [])

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p className="text-gray-400">Redirecting to IITB SSO...</p>
      </div>
    )
  }

  return <>{children}</>
}

export default ProtectedRoute