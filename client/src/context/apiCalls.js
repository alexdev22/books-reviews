import { LoginFailure, LoginStart, LoginSuccess } from './AuthActions'

export const handleLogin = async (user, dispatch, e) => {
  e.preventDefault()
  dispatch(LoginStart)
  try {
    const response = await fetch('http://localhost:3003/auth/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    const data = await response.json()
    console.log(data)
    dispatch(LoginSuccess(data))
  } catch (error) {
    dispatch(LoginFailure)
  }
}
