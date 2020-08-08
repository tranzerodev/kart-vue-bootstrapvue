const setCandidates = (state, candidates) => {
  state.all = candidates
}

const setCandidateProfile = (state, candidateProfile) => {
  state.profile = candidateProfile
}

const setEmployerProfile = (state, employerProfile) => {
  state.employerProfile = employerProfile
}

const setJobSeekerProfile = (state, jobSeekerProfile) => {
  state.jobSeekerProfile = jobSeekerProfile
}

const setCandidateResume = (state, candidateResume) => {
  state.resume = candidateResume
}

const setCandidateExperience = (state, experience) => {
  state.profile.experience = experience
}

const setCandidateEducation = (state, education) => {
  state.profile.education = education
}

const setCandidateLanguage = (state, language) => {
  state.profile.languages.push(language)
}

const editCandidateLanguage = (state, language) => {
  let index = state.profile.languages.findIndex(lang => lang.id === language.id)
  if (index !== -1) {
    state.profile.languages[index] = language
  }
}

const setCandidateCertification = (state, certification) => {
  state.profile.certification = certification
}

export default {
  setCandidates,
  setCandidateProfile,
  setCandidateExperience,
  setCandidateLanguage,
  setCandidateEducation,
  setCandidateCertification,
  setCandidateResume,
  editCandidateLanguage,
  setEmployerProfile,
  setJobSeekerProfile,
}
