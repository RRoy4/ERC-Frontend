import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { SSO_USERDATA_URL } from '../config/sso'

const Callback: React.FC = () => {
  const navigate = useNavigate()
  const [status, setStatus] = useState('Authenticating with IITB SSO...')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const sessionKey = params.get('accessid')

    if (!sessionKey) {
      navigate('/')
      return
    }

    fetch(SSO_USERDATA_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: sessionKey }),
    })
      .then(res => {
        if (!res.ok) throw new Error('SSO fetch failed')
        return res.json()
      })
      .then(userData => {
        Cookies.set('sso_user', JSON.stringify(userData), { expires: 1 / 24 })
        window.history.replaceState({}, '', '/callback')
        navigate('/sor') // redirect to SOR page after login
      })
      .catch(() => {
        setStatus('Login failed. Please try again.')
      })
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <p className="text-gray-300 text-lg">{status}</p>
    </div>
  )
}

export default Callback