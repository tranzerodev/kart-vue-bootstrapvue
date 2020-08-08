import CandidatesService from '../_api/CandidatesService'

const getCandidateList = async ({ commit }, searchText) => {
  let response = await CandidatesService.getCandidateList(searchText)
  commit('setCandidates', response.data)
}

const getCandidateProfile = async ({ commit }, id) => {
  let response = await CandidatesService.getCandidateProfile(id)
  commit('setCandidateProfile', response.data)
}

const getEmployerProfile = async ({ commit }, id) => {
  let response = await CandidatesService.getEmployerProfile(id)
  commit('setEmployerProfile', response.data)
}

const getJobSeekerProfile = async ({ commit }, id) => {
  let response = await CandidatesService.getJobSeekerProfile(id)
  commit('setJobSeekerProfile', response.data)
}

const addCandidateExperience = async ({ commit }, experienceInput) => {
  let response = await CandidatesService.addCandidateExperience(experienceInput)
  commit('setCandidateExperience', response.data)
}

const editCandidateExperience = async ({ commit }, experienceInput) => {
  let response = await CandidatesService.editCandidateExperience(
    experienceInput
  )
  commit('setCandidateExperience', response.data)
}

const addCandidateProfile = async ({ commit }, profileInput) => {
  let response = await CandidatesService.addCandidateProfile(profileInput)
  commit('setCandidateProfile', response.data)
}

const addCandidateResume = async ({ commit }, resumeInput) => {
  let response = await CandidatesService.editCandidateResume(resumeInput)
  commit('setCandidateResume', response.data)
}

const editCandidateProfile = async ({ commit }, profileInput) => {
  let response = await CandidatesService.editCandidateProfile(profileInput)
  commit('setCandidateProfile', response.data)
}

const addCandidateEducation = async ({ commit }, educationInput) => {
  let response = await CandidatesService.addCandidateEducation(educationInput)
  commit('setCandidateEducation', response.data)
}

const editCandidateEducation = async ({ commit }, educationInput) => {
  let response = await CandidatesService.editCandidateEducation(educationInput)
  commit('setCandidateEducation', response.data)
}

const addCandidateLanguage = async ({ commit }, languageInput) => {
  let response = await CandidatesService.addCandidateLanguage(languageInput)
  commit('setCandidateLanguage', response.data)
}

const editCandidateLanguage = async ({ commit }, languageInput) => {
  let response = await CandidatesService.editCandidateLanguage(languageInput)
  commit('editCandidateLanguage', response.data)
}

const addCandidateCertification = async ({ commit }, certificationInput) => {
  let response = await CandidatesService.addCandidateCertification(
    certificationInput
  )
  commit('setCandidateCertification', response.data)
}

const editCandidateCertification = async ({ commit }, certificationInput) => {
  let response = await CandidatesService.editCandidateCertification(
    certificationInput
  )
  commit('setCandidateCertification', response.data)
}

export default {
  getCandidateList,
  getCandidateProfile,
  addCandidateProfile,
  editCandidateProfile,
  addCandidateExperience,
  editCandidateExperience,
  addCandidateEducation,
  editCandidateEducation,
  addCandidateLanguage,
  editCandidateLanguage,
  addCandidateCertification,
  editCandidateCertification,
  addCandidateResume,
  getEmployerProfile,
  getJobSeekerProfile,
}
