import actions from './catalog.actions'
import getters from './catalog.getters'
import mutations from './catalog.mutations'

const state = {
  jobType: {},
  isLoadingJobCategory: false,
  jobCategoryList: [],
  isLoadingCountry: false,
  countryList: [],
  isLoadingLanguage: false,
  languageList: [],
  isLoadingSkill: false,
  skillList: [],
  errors: '',
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}
