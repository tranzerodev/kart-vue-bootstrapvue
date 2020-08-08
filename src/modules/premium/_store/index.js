import actions from './premium.actions'
import mutations from './premium.mutations'
import getters from './premium.getters'

const state = {
  servicePackageList: [],
  isLoadingServicePackageList: false,
  loadServicePackageListError: null,
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}
