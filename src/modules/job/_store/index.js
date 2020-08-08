import actions from './job.actions'
import getters from './job.getters'
import mutations from './job.mutation'

const state = {
  all: [],
  by_status: [],
  jobSelected: {
    job: {},
    approval: {},
  },
  isAddingJob: false,
  addJobError: null,
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}
