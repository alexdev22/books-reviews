import React, { useContext } from 'react'
import useForm from '../../hooks/useForm'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { handleLogin } from '../../context/apiCalls'

const LoginScreen = () => {
  const [values, handleInputChange] = useForm({
    username: '',
    password: ''
  })

  const { username, password } = values
  const { isFetching, dispatch } = useContext(AuthContext)

  return (
    <>
      <form onSubmit={(e) => handleLogin({ username, password }, dispatch, e)} className='login-container'>
        <input onChange={handleInputChange} required autoComplete='off' name='username' value={username} />
        <input onChange={handleInputChange} required autoComplete='off' name='password' value={password} />
        <button disabled={isFetching}>Login</button>
        <p>Not having an account? <Link to='/register'>Register Here</Link>
        </p>
      </form>
    </>
  )
}

export default LoginScreen
