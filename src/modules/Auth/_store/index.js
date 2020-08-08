import actions from './auth.actions'
import mutations from './auth.mutations'
import getters from './auth.getters'

const state = {
  status: [],
  token: sessionStorage.getItem('token') || '',
  token_refresh: sessionStorage.getItem('token_refresh'),
  user: {
    name: '',
    email: '',
    isJobSeekerPremium: false,
    isEmployerPremium: false,
    isJobSeeker: false,
    isEmployer: false,
    currentType: 0, // 0 : job seeker, 1: employer
  },
  error: false,
  errormsg: null,
  processing: false,
  lang: localStorage.getItem('lang') || 'en',
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}
