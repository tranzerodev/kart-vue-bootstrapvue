const isLoggedIn = state => (state.token ? true : false)
const authStatus = state => state.status
const getErrorMsg = state => state.errormsg

export default {
  isLoggedIn,
  authStatus,
  getErrorMsg,
}
