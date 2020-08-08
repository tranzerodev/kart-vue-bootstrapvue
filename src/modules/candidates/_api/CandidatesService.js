import API from '../../../api/API'

const url = '/candidate'

export default {
  getCandidateList(searchText) {
    let query = searchText ? `?search=${searchText}` : ''
    return API.get(`${url}/profile${query}`)
  },

  getCandidateProfile(id) {
    return API.get(`${url}/profile/${id}`)
  },

  getEmployerProfile(id) {
    return API.get(`/profile/employer/${id}`)
  },

  getJobSeekerProfile(id) {
    return API.get(`/profile/job/${id}`)
  },

  addCandidateExperience(experienceInput) {
    return API.post(`${url}/experience/`, experienceInput)
  },

  editCandidateExperience(experienceInput) {
    return API.put(`${url}/experience/${experienceInput.id}/`, experienceInput)
  },

  addCandidateProfile(profileInput) {
    return API.post(`${url}/profile/`, {}, profileInput)
  },

  editCandidateProfile(profileInput) {
    return API.put(`${url}/profile/${profileInput.id}/`, profileInput)
  },

  editCandidateResume(profileInput) {
    let formData = new FormData()
    let skills = profileInput.skills
    for (let i = 0; i < skills.length; i++) {
      formData.set(`skills[${i}]`, skills[i])
    }
    if (profileInput.resume) {
      formData.append('resume', profileInput.resume)
    }
    if (profileInput.image) {
      formData.append('image', profileInput.image)
    }
    formData.set('account', profileInput.id)
    formData.set('email', profileInput.email)
    formData.set('location', profileInput.location)
    formData.set('phone', profileInput.phone)
    formData.set('personal_website', profileInput.personal_website)
    formData.set('profile_summary', profileInput.profile_summary)

    return API.put(`${url}/profile/${profileInput.id}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },

  addCandidateEducation(educationInput) {
    return API.post(`${url}/education/`, educationInput)
  },

  editCandidateEducation(educationInput) {
    return API.put(`${url}/education/${educationInput.id}/`, educationInput)
  },

  addCandidateLanguage(languageInput) {
    return API.post(`${url}/language/`, languageInput)
  },

  editCandidateLanguage(languageInput) {
    return API.put(`${url}/language/${languageInput.id}/`, languageInput)
  },

  addCandidateCertification(certificationInput) {
    return API.post(`${url}/certification/`, certificationInput)
  },

  editCandidateCertification(certificationInput) {
    return API.put(
      `${url}/certification/${certificationInput.id}/`,
      certificationInput
    )
  },
}
