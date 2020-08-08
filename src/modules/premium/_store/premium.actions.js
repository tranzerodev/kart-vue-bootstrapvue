import MainAPi from '@/api/MAIN_API'

const loadServicePackageList = async ({ commit }, payload) => {
  commit('LOAD_SERVICE_PACKGE_LIST_REQUEST')
  try {
    let response = await MainAPi.get('/billing/package/', payload)
    if (!response) {
      commit('LOAD_SERVICE_PACKGE_LIST_FAILED', response)
      throw new Error(response)
    }
    commit('LOAD_SERVICE_PACKGE_LIST_SUCCESS', response)
    return response
  } catch (e) {
    commit('LOAD_SERVICE_PACKGE_LIST_FAILED', e.response)
    return
  }
}

export default {
  loadServicePackageList,
}
