import React, { useContext } from 'react'
import useForm from '../../hooks/useForm'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { handleLogin } from '../../context/apiCalls'
import { logout } from '../../context/AuthActions'

const LoginScreen = () => {
  const [values, handleInputChange] = useForm({
    username: '',
    password: ''
  })
  const { username, password } = values
  const { isFetching, dispatch } = useContext(AuthContext)

  const handleLogOut = () => {
    dispatch(logout)
  }

  return (
    <>
      <form onSubmit={(e) => handleLogin({ username, password }, dispatch, e)} className='login-container'>
        <input onChange={handleInputChange} name='username' value={username} />
        <input onChange={handleInputChange} name='password' value={password} />
        <button disabled={isFetching}>Login</button>
        <p>Not having an account? <Link to='/register'>Register Here</Link>
        </p>
      </form>
      <button onClick={handleLogOut}>Logout</button>
    </>
  )
}

export default LoginScreen
