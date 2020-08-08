import API from '../../../api/API'

const auth_request = state => {
  state.status = 'loading'
  state.error = false
  state.errormsg = null
  state.processing = true
  state.token_refresh = ''
}
const auth_basic_success = (state, user) => {
  let token = btoa(`${user.username}:${user.password}`)
  sessionStorage.setItem('basic_token', token.toString())
  state.token = token
  API.defaults.headers.Authorization = 'Basic ' + token.toString()
}

const auth_success = (state, data) => {
  state.status = 'success'
  state.token_refresh = data.refresh
  state.token = data.access
  state.user = {
    ...state.user,
    name: data.username ? data.username : '',
    email: data.email ? data.email : '',
    isJobSeekerPremium: data.isPremium ? data.isJobSeekerPremium : false,
    isEmployerPremium: data.isPremium ? data.isEmployerPremium : false,
    isJobSeeker: data.isJobSeeker ? data.isJobSeeker : true,
    isEmployer: data.isEmployer ? data.isEmployer : false,
  }
  state.error = false
  state.errormsg = null
  state.processing = false
  sessionStorage.setItem('token', state.token)
  sessionStorage.setItem('token_refresh', state.token_refresh)
  sessionStorage.setItem('lifetime', data.lifetime * 1000 - 10000)
  API.defaults.headers.Authorization =
    'Bearer ' + sessionStorage.getItem('token')
}
const auth_error = (state, payload) => {
  state.status = 'error'
  state.error = true
  state.errormsg = payload.detail
  state.processing = false
}
const logout = state => {
  sessionStorage.removeItem('token')
  sessionStorage.removeItem('token_refresh')
  sessionStorage.removeItem('lifetime')
  state.status = ''
  state.token = ''
  state.user = ''
  state.token_refresh = ''
  delete API.defaults.headers.common['Authorization']
}
const auth_refresh_success = (state, token) => {
  state.status = 'success'
  state.token = token
  state.error = false
  state.errormsg = null
  state.processing = false
  sessionStorage.setItem('token', token)
  sessionStorage.setItem('refresh_success', 0)
  API.defaults.headers.Authorization =
    'Bearer ' + sessionStorage.getItem('token')
}

const SET_LANGUAGE = (state, payload) => {
  localStorage.setItem('lang', payload)
  state.lang = payload
}

const SET_USERTYPE = (state, userType) => {
  state.user.currentType = userType
}

export default {
  auth_request,
  auth_success,
  auth_error,
  logout,
  auth_basic_success,
  auth_refresh_success,
  SET_LANGUAGE,
  SET_USERTYPE,
}
