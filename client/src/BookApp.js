import React from 'react'
import AppRouter from './router/AppRouter'
import { AuthContextProvider } from './context/AuthContext'
import './styles/styles.scss'

const BookApp = () => {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>

  )
}

export default BookApp
