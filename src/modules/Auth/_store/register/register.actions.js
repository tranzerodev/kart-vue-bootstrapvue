import AuthService from '../../_api/AuthService'
import MainAPi from '../../../../api/MAIN_API'

const createAccount = async (
  { commit },
  { first_name, last_name, password, email, username, phone }
) => {
  commit('REGISTRATION_BEGIN')
  try {
    let response = await MainAPi.post('/account/signup/', {
      first_name,
      last_name,
      password: btoa(password),
      email,
      username,
      phone,
    })

    if (!response) {
      commit('REGISTRATION_FAILURE', response)
      throw new Error(response)
    }
    commit('REGISTRATION_SUCCESS', response)
    return response
  } catch (e) {
    commit('REGISTRATION_FAILURE', e.response)
    return
  }
}

const createBusinessProfile = async ({ commit }, payload) => {
  commit('ADD_BUSINESS_PROFILE_REQUEST')
  try {
    let response = await MainAPi.post('/profile/employer/', payload)
    if (!response) {
      commit('ADD_BUSINESS_PROFILE_FAILED', response)
      throw new Error(response)
    }
    commit('ADD_BUSINESS_PROFILE_SUCCESS', response)
    return response
  } catch (e) {
    commit('ADD_BUSINESS_PROFILE_FAILED', e.response)
    return
  }
}

const setRole = ({ commit }, roleId) => {
  commit('SET_ROLE', roleId)
}

const setIsStudent = ({ commit }, isStudent) => {
  commit('SET_IS_STUDENT', isStudent)
}

const createJobSeekerProfile = async ({ commit }, payload) => {
  commit('ADD_JOB_SEEKER_PROFILE_REQUEST')
  try {
    let response = await MainAPi.post(`/profile/job/`, payload)
    if (!response) {
      commit('ADD_JOB_SEEKER_PROFILE_FAILED', response)
      throw new Error(response)
    }
    commit('ADD_JOB_SEEKER_PROFILE_SUCCESS', response)
    return response
  } catch (e) {
    commit('ADD_JOB_SEEKER_PROFILE_FAILED', e.response)
    return
  }
}

const uploadResume = async ({ commit }, payload) => {
  const userId = payload.account
  const formData = new FormData()
  formData.append('resume', payload.resume)
  commit('ADD_JOB_SEEKER_PROFILE_REQUEST')
  try {
    let response = await MainAPi.patchMultiForm(
      `/profile/job/${userId}/`,
      formData
    )
    if (!response) {
      commit('ADD_JOB_SEEKER_PROFILE_FAILED', response)
      throw new Error(response)
    }
    commit('ADD_JOB_SEEKER_PROFILE_SUCCESS', response)
    return response
  } catch (e) {
    commit('ADD_JOB_SEEKER_PROFILE_FAILED', e.response)
    return
  }
}

const updateJobSeekerProfile = async ({ commit }, payload) => {
  const userId = payload.account
  delete payload.account
  commit('ADD_JOB_SEEKER_PROFILE_REQUEST')
  try {
    let response = await MainAPi.patch(`/profile/job/${userId}/`, payload)
    if (!response) {
      commit('ADD_JOB_SEEKER_PROFILE_FAILED', response)
      throw new Error(response)
    }
    commit('ADD_JOB_SEEKER_PROFILE_SUCCESS', response)
    return response
  } catch (e) {
    commit('ADD_JOB_SEEKER_PROFILE_FAILED', e.response)
    return
  }
}

const addWorkExperience = async ({ commit }, experience) => {
  const index = experience.index
  delete experience.index
  commit('ADD_WORK_EXPERIENCE_REQUEST')
  try {
    let response = await MainAPi.post('/profile/experience/', experience)
    if (!response) {
      commit('ADD_WORK_EXPERIENCE_FAILED', { ...response, index })
      throw new Error(response)
    }
    commit('ADD_WORK_EXPERIENCE_SUCCESS', response)
    return response
  } catch (e) {
    commit('ADD_WORK_EXPERIENCE_FAILED', { ...e.response, index })
    return
  }
}

const addEducationHistory = async ({ commit }, education) => {
  const index = education.index
  delete education.index
  commit('ADD_EDUCATION_HISTORY_REQUEST')
  try {
    let response = await MainAPi.post('/profile/education/', education)
    if (!response) {
      commit('ADD_EDUCATION_HISTORY_FAILED', { ...response, index })
      throw new Error(response)
    }
    commit('ADD_EDUCATION_HISTORY_SUCCESS', response)
    return response
  } catch (e) {
    commit('ADD_EDUCATION_HISTORY_FAILED', { ...e.response, index })
    return
  }
}

const addLanguages = async ({ commit }, language) => {
  const index = language.index
  delete language.index
  commit('ADD_LANGUAGE_REQUEST')
  try {
    let response = await MainAPi.post('/profile/language/', language)
    if (!response) {
      commit('ADD_LANGUAGE_FAILED', { ...response, index })
      throw new Error(response)
    }
    commit('ADD_LANGUAGE_SUCCESS', response)
    return response
  } catch (e) {
    commit('ADD_LANGUAGE_FAILED', { ...e.response, index })
    return
  }
}

const activateAccount = ({ commit }, { key }) => {
  commit('ACTIVATION_BEGIN')
  return AuthService.verifyAccountEmail(key)
    .then(() => commit('ACTIVATION_SUCCESS'))
    .catch(() => commit('ACTIVATION_FAILURE'))
}

const clearRegistrationStatus = ({ commit }) => {
  commit('REGISTRATION_CLEAR')
}

const clearActivationStatus = ({ commit }) => {
  commit('ACTIVATION_CLEAR')
}

export default {
  createAccount,
  activateAccount,
  clearRegistrationStatus,
  clearActivationStatus,
  setRole,
  createBusinessProfile,
  createJobSeekerProfile,
  addWorkExperience,
  addEducationHistory,
  updateJobSeekerProfile,
  uploadResume,
  addLanguages,
  setIsStudent,
}
