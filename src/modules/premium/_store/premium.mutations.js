import { i18n } from '@/plugins/i18n'
const LOAD_SERVICE_PACKGE_LIST_REQUEST = state => {
  state.isLoadingServicePackageList = true
  state.loadServicePackageListError = ''
}
const LOAD_SERVICE_PACKGE_LIST_FAILED = (state, error) => {
  state.isLoadingServicePackageList = false
  if (error.status === 500 || !error.data) {
    state.loadServicePackageListError = i18n.t(
      'the-request-cannot-be-processed-this-time'
    )
  } else {
    state.loadServicePackageListError = error.data
  }
}
const LOAD_SERVICE_PACKGE_LIST_SUCCESS = (state, payload) => {
  state.isLoadingServicePackageList = false
  state.loadServicePackageListError = ''
  state.servicePackageList = payload
}

export default {
  LOAD_SERVICE_PACKGE_LIST_REQUEST,
  LOAD_SERVICE_PACKGE_LIST_FAILED,
  LOAD_SERVICE_PACKGE_LIST_SUCCESS,
}
