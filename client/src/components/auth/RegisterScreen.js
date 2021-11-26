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
    <form onSubmit={(e) => handleRegister(e)} className='register-container'>
      <input onChange={handleInputChange} name='username' value={username} />
      <input onChange={handleInputChange} name='password' value={password} />
      <button>Register</button>
    </form>
  )
}

export default RegisterScreen
