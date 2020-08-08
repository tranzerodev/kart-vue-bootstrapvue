import MainApi from '@/api/MAIN_API'

const login = async ({ commit }, user) => {
  commit('auth_request')
  try {
    let response = await MainApi.post('/account/signin/', user)
    if (!response) {
      commit('auth_error', response.data)
      throw new Error(response.data)
    }
    localStorage.setItem('id', response.id)
    commit('auth_success', response)
  } catch (e) {
    commit('auth_error', e.response.data)
  }
}

const logout = ({ commit }) => {
  commit('logout')
}

const passwordReset = async ({ commit }, user) => {
  try {
    let response = await MainApi.post('/account/password_reset/', user)
    if (!response) {
      commit('auth_error', response.data)
      throw new Error(response.data)
    }
  } catch (e) {
    commit('auth_error', { detail: e.response.data.email })
  }
}
const passwordResetConfirm = async ({ commit }, user) => {
  try {
    let response = await MainApi.post('/account/password_reset_confirm/', user)
    if (!response) {
      commit('auth_error', response.data)
      throw new Error(response.data)
    }
  } catch (e) {
    if (e.response.data.new_password != undefined)
      commit('auth_error', { detail: e.response.data.new_password })
  }
}

const setPassword = async ({ commit }, user) => {
  try {
    let response = await MainApi.post('/account/set_password/', user)
    if (!response) {
      commit('auth_error', response.data)
      throw new Error(response.data)
    }
  } catch (e) {
    if (e.response.data.new_password != undefined)
      commit('auth_error', { detail: e.response.data.new_password })
  }
}
const token_refresh = async ({ commit }, refresh_token) => {
  commit('auth_request')
  try {
    let response = await MainApi.post('/account/token/refresh/', {
      refresh: refresh_token,
    })
    if (!response) {
      commit('auth_error', response.data)
      throw new Error(response.data)
    }
    const token = response.access
    commit('auth_refresh_success', token)
  } catch (e) {
    commit('auth_error', e.response.data)
  }
}

const setLang = ({ commit }, payload) => {
  commit('SET_LANGUAGE', payload)
}

const setUserType = ({ commit }, userType) => {
  commit('SET_USERTYPE', userType)
}

export default {
  login,
  logout,
  passwordReset,
  passwordResetConfirm,
  setPassword,
  token_refresh,
  setLang,
  setUserType,
}
