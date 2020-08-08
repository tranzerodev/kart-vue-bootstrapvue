const registrationCompleted = store => store.registrationCompleted
const registrationError = store => store.registrationError
const registrationLoading = store => store.registrationLoading
const errorMessage = store => store.errorMessage
const processing = store => store.processing
const getRole = store => {
  if (store.roleList && store.roleList.length && store.currentRoleId > -1) {
    return store.roleList.find(role => role.id === store.currentRoleId)
  } else {
    return {}
  }
}

export default {
  registrationCompleted,
  registrationError,
  registrationLoading,
  errorMessage,
  processing,
  getRole,
}
