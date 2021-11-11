import React, { useEffect, useState } from 'react'
import userAuth from './context/login'
import AppRouter from './router/AppRouter'
import './styles/styles.scss'

const BookApp = () => {
  const [loginStatus, setLoginStatus] = useState({ checked: false })

  const getLoginStatus = async () => {
    const token = localStorage.getItem('jwt')

    const response = await fetch('http://localhost:3003/auth/renew', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-token': token
      }
    })
    const data = await response.json()
    const { id, username } = data
    if (!data.ok) {
      console.log('invalid token')
      setLoginStatus({ checked: false })
      console.log(loginStatus)
    } else {
      setLoginStatus({ checked: true, id, username })
    }
  }

  useEffect(() => {
    getLoginStatus()
  }, [])

  return (
    <main>
      <userAuth.Provider value={loginStatus}>
        <AppRouter isAuthenticated={loginStatus.checked} />
      </userAuth.Provider>
    </main>

  )
}

export default BookApp
