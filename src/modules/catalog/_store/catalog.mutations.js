const setJobType = (state, jobType) => {
  state.jobType = jobType
}

const LOAD_JOB_CATEGORY_REQUEST = state => {
  state.isLoadingJobCategory = true
  state.errors = ''
  state.jobCategoryList = []
}
const LOAD_JOB_CATEGORY_FAILED = (state, payload) => {
  state.isLoadingJobCategory = false
  state.errors = payload
  state.jobCategoryList = []
}
const LOAD_JOB_CATEGORY_SUCCESS = (state, payload) => {
  state.isLoadingJobCategory = false
  state.errors = ''
  state.jobCategoryList = payload
}

const LOAD_COUNTRY_REQUEST = state => {
  state.isLoadingCountry = true
  state.errors = ''
  state.countryList = []
}
const LOAD_COUNTRY_FAILED = (state, payload) => {
  state.isLoadingCountry = false
  state.errors = payload
  state.countryList = []
}
const LOAD_COUNTRY_SUCCESS = (state, payload) => {
  state.isLoadingCountry = false
  state.errors = ''
  state.countryList = payload
}

const LOAD_LANGUAGE_REQUEST = state => {
  state.isLoadingLanguage = true
  state.errors = ''
  state.skillList = []
}
const LOAD_LANGUAGE_FAILED = (state, payload) => {
  state.isLoadingLangulage = false
  state.errors = payload
  state.skillList = []
}
const LOAD_LANGUAGE_SUCCESS = (state, payload) => {
  state.isLoadingLanguage = false
  state.errors = ''
  state.skillList = payload
}

const LOAD_SKILL_REQUEST = state => {
  state.isLoadingSkill = true
  state.errors = ''
  state.skillList = []
}
const LOAD_SKILL_FAILED = (state, payload) => {
  state.isLoadingSkill = false
  state.errors = payload
  state.skillList = []
}
const LOAD_SKILL_SUCCESS = (state, payload) => {
  state.isLoadingSkill = false
  state.errors = ''
  state.skillList = payload
}

export default {
  setJobType,
  LOAD_JOB_CATEGORY_REQUEST,
  LOAD_JOB_CATEGORY_FAILED,
  LOAD_JOB_CATEGORY_SUCCESS,
  LOAD_COUNTRY_REQUEST,
  LOAD_COUNTRY_FAILED,
  LOAD_COUNTRY_SUCCESS,
  LOAD_LANGUAGE_REQUEST,
  LOAD_LANGUAGE_FAILED,
  LOAD_LANGUAGE_SUCCESS,
  LOAD_SKILL_REQUEST,
  LOAD_SKILL_FAILED,
  LOAD_SKILL_SUCCESS,
}
