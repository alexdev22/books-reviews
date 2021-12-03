import AuthReducer from './AuthReducer'

test('Login start is working', () => {
  const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false
  }
  const result = AuthReducer(INITIAL_STATE, 'LOGIN_START')
  const expected = {
    user: null,
    isFetching: true,
    error: false
  }
  expect(result).toEqual(expected)
})
