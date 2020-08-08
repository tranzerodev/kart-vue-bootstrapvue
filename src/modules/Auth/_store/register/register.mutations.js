import Vue from 'vue'
import { i18n } from '@/plugins/i18n'
const ACTIVATION_BEGIN = state => {
  state.activationLoading = true
}

const ACTIVATION_CLEAR = state => {
  state.activationCompleted = false
  state.activationError = false
  state.activationLoading = false
}

const ACTIVATION_FAILURE = state => {
  state.activationError = true
  state.activationLoading = false
}

const ACTIVATION_SUCCESS = state => {
  state.activationCompleted = true
  state.activationError = false
  state.activationLoading = false
}

const REGISTRATION_BEGIN = state => {
  state.registrationLoading = true
  state.processing = true
}

const REGISTRATION_CLEAR = state => {
  state.registrationCompleted = false
  state.registrationError = false
  state.registrationLoading = false
  state.processing = false
  state.errorMessage = ''
}

const REGISTRATION_FAILURE = (state, error) => {
  state.registrationError = true
  state.registrationLoading = false
  if (error.status === 500 || !error.data) {
    state.errorMessage = i18n.t('the-request-cannot-be-processed-this-time')
  } else {
    state.errorMessage = error.data
  }
  state.processing = false
}

const REGISTRATION_SUCCESS = (state, payload) => {
  state.registrationCompleted = true
  state.registrationError = false
  state.registrationLoading = false
  state.processing = false
  state.userId = payload.id
}

const SET_ROLE = (state, payload) => {
  state.currentRoleId = payload
}

const SET_IS_STUDENT = (state, payload) => {
  state.isStudent = payload
}

const ADD_BUSINESS_PROFILE_REQUEST = state => {
  state.isAddingBusinessProfile = true
  state.addBusinessProfileError = null
}
const ADD_BUSINESS_PROFILE_SUCCESS = state => {
  state.isAddingBusinessProfile = false
  state.addBusinessProfileError = null
}
const ADD_BUSINESS_PROFILE_FAILED = (state, error) => {
  state.isAddingBusinessProfile = false
  if (error.status === 500 || !error.data) {
    state.addBusinessProfileError = i18n.t(
      'the-request-cannot-be-processed-this-time'
    )
  } else {
    state.addBusinessProfileError = error.data
  }
}

const ADD_JOB_SEEKER_PROFILE_REQUEST = state => {
  state.isAddingJobSeekerProfile = true
  state.isAddedJobSeekerProfile = false
  state.addJobSeekerProfileError = ''
}
const ADD_JOB_SEEKER_PROFILE_FAILED = (state, error) => {
  state.isAddingJobSeekerProfile = false
  state.isAddedJobSeekerProfile = false
  if (error.status === 500 || !error.data) {
    state.addJobSeekerProfileError = i18n.t(
      'the-request-cannot-be-processed-this-time'
    )
  } else {
    state.addJobSeekerProfileError = error.data
  }
}
const ADD_JOB_SEEKER_PROFILE_SUCCESS = state => {
  state.isAddingJobSeekerProfile = false
  state.isAddedJobSeekerProfile = true
  state.addJobSeekerProfileError = ''
}
const ADD_WORK_EXPERIENCE_REQUEST = state => {
  state.isAddingWorkExperience = true
  state.addWorkExperienceError = []
}
const ADD_WORK_EXPERIENCE_FAILED = (state, error) => {
  state.isAddingWorkExperience = false
  if (error.status === 500 || !error.data) {
    Vue.set(
      state.addWorkExperienceError,
      error.index,
      i18n.t('the-request-cannot-be-processed-this-time')
    )
  } else {
    Vue.set(state.addWorkExperienceError, error.index, error.data)
  }
}
const ADD_WORK_EXPERIENCE_SUCCESS = state => {
  state.isAddingWorkExperience = false
  state.addWorkExperienceError = []
}
const ADD_EDUCATION_HISTORY_REQUEST = state => {
  state.isAddingEducationHistory = true
  state.addEducationHistoryError = []
}
const ADD_EDUCATION_HISTORY_FAILED = (state, error) => {
  state.isAddingEducationHistory = false
  if (error.status === 500 || !error.data) {
    Vue.set(
      state.addEducationHistoryError,
      error.index,
      i18n.t('the-request-cannot-be-processed-this-time')
    )
  } else {
    Vue.set(state.addEducationHistoryError, error.index, error.data)
  }
}
const ADD_EDUCATION_HISTORY_SUCCESS = state => {
  state.isAddingEducationHistory = false
  state.addEducationHistoryError = ''
}

const ADD_LANGUAGE_REQUEST = state => {
  state.isAddingLanguage = true
  state.addLanguageError = []
}
const ADD_LANGUAGE_FAILED = (state, error) => {
  state.isAddingLanguage = false
  if (error.status === 500 || !error.data) {
    Vue.set(
      state.addLanguageError,
      error.index,
      i18n.t('the-request-cannot-be-processed-this-time')
    )
  } else {
    Vue.set(state.addLanguageError, error.index, error.data)
  }
}
const ADD_LANGUAGE_SUCCESS = state => {
  state.isAddingLanguage = false
  state.addLanguageError = ''
}

export default {
  ACTIVATION_BEGIN,
  ACTIVATION_CLEAR,
  ACTIVATION_FAILURE,
  ACTIVATION_SUCCESS,
  REGISTRATION_BEGIN,
  REGISTRATION_CLEAR,
  REGISTRATION_FAILURE,
  REGISTRATION_SUCCESS,
  SET_ROLE,
  ADD_BUSINESS_PROFILE_REQUEST,
  ADD_BUSINESS_PROFILE_FAILED,
  ADD_BUSINESS_PROFILE_SUCCESS,
  ADD_JOB_SEEKER_PROFILE_REQUEST,
  ADD_JOB_SEEKER_PROFILE_FAILED,
  ADD_JOB_SEEKER_PROFILE_SUCCESS,
  ADD_WORK_EXPERIENCE_REQUEST,
  ADD_WORK_EXPERIENCE_FAILED,
  ADD_WORK_EXPERIENCE_SUCCESS,
  ADD_EDUCATION_HISTORY_REQUEST,
  ADD_EDUCATION_HISTORY_FAILED,
  ADD_EDUCATION_HISTORY_SUCCESS,
  ADD_LANGUAGE_REQUEST,
  ADD_LANGUAGE_FAILED,
  ADD_LANGUAGE_SUCCESS,
  SET_IS_STUDENT,
}
