import actions from './companyprofile.actions'
import getters from './companyprofile.getters'
import mutations from './companyprofile.mutation'

const state = {
  CompanySelected: {
    details: {},
    benefitsList: {},
    photosList: {},
    postList: {},
    peopleList: {},
  },
  companyNameList: [],
  errorMsg: null,
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}
