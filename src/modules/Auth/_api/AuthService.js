import API from '../../../api/API'

const AUTH_URL = '/account'

const signin = options => API.post(`${AUTH_URL}/signin/`, options)
const signup = options => API.post(`${AUTH_URL}/signup/`, options)
const signout = options => API.post(`${AUTH_URL}/signout/`, options)
const passwordReset = options =>
  API.post(`${AUTH_URL}/password_reset/`, options)
const passwordResetConfirm = options =>
  API.post(`${AUTH_URL}/password_reset_confirm/`, options)

const setPassword = options => API.post(`${AUTH_URL}/set_password/`, options)

export default {
  signin,
  signup,
  signout,
  passwordReset,
  passwordResetConfirm,
  setPassword,
}
