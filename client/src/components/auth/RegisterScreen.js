import React from 'react'
import useForm from '../../hooks/useForm'

const RegisterScreen = () => {
  const [values, handleInputChange] = useForm({
    username: '',
    password: ''
  })

  const { username, password } = values

  const handleRegister = (e) => {
    e.preventDefault()
    fetch('http://localhost:3003/auth/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(values)
    })
  }

  return (
    <form onSubmit={(e) => handleRegister(e)} className='login-container'>
      <label>Username</label>
      <input onChange={handleInputChange} required autoComplete='off' name='username' value={username} />
      <label>Password</label>
      <input onChange={handleInputChange} required autoComplete='off' name='password' value={password} />
      <button className='loginButton'>Register</button>
    </form>
  )
}

export default RegisterScreen
