import actions from './jobs.actions'
import mutations from './jobs.mutations'
import getters from './jobs.getters'

const state = {
  all: [],
  jobs: [],
  selectedJob: null,
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}
