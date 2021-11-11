import React from 'react'
import useForm from '../../hooks/useForm'

const LoginScreen = () => {
  const [values, handleInputChange] = useForm({
    username: '',
    password: ''
  })

  const { username, password } = values

  const handleLogin = (e) => {
    e.preventDefault()
    fetch('http://localhost:3003/auth/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then(response => response.json())
      .then(data => localStorage.setItem('jwt', data.accessToken))
  }

  return (
    <form onSubmit={(e) => handleLogin(e)}>
      <input onChange={handleInputChange} name='username' value={username} />
      <input onChange={handleInputChange} name='password' value={password} />
      <button>Login</button>
    </form>
  )
}

export default LoginScreen
