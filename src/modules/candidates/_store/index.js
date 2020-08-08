import actions from './candidates.actions'
import getters from './candidates.getters'
import mutations from './candidates.mutation'

const state = {
  all: [],
  profile: {},
  resume: null,
  employerProfile: {},
  jobSeekerProfile: {},
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}
