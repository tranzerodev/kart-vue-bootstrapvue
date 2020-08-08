const candidates = state => state.all
const total = state => state.all.length
const candidateProfile = state => state.profile
const skills = state => (!state.profile ? state.profile.skills : '[]')
const experience = state => (!state.profile ? state.profile.experience : {})
const language = state => (!state.profile ? state.profile.language : {})
const education = state => (!state.profile ? state.profile.education : {})
const certification = state =>
  !state.certification ? state.profile.certification : {}
const resume = state => state.resume
const employerProfile = state => state.employerProfile

export default {
  candidates,
  candidateProfile,
  experience,
  language,
  education,
  certification,
  skills,
  resume,
  total,
  employerProfile,
}
