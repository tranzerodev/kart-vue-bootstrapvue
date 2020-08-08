import API from '../../../api/API'

const AUTH_URL = ''

const getCompanyDetails = CompanyId => {
  return API.get(`${AUTH_URL}/profile/company/${CompanyId}`)
}

const getCompanyBenefitsList = CompanyId => {
  return API.get(`${AUTH_URL}/profile/company/${CompanyId}/benefit/`)
}

const getCompanyPhotosList = CompanyId => {
  return API.get(`${AUTH_URL}/profile/company/${CompanyId}/photo/`)
}

const getCompanyPostList = CompanyId => {
  return API.get(`${AUTH_URL}/profile/company/${CompanyId}/post/`)
}

const getCompanyNameList = () => {
  return API.get(`${AUTH_URL}/profile/company_name/`)
}

const addCompanyPhotos = xInput => {
  return API.post(
    `${AUTH_URL}/profile/company/${xInput.company}/photo/`,
    xInput
  )
}

const updateCompany = xInput => {
  return API.patch(
    `${AUTH_URL}/profile/company/${xInput.get('company')}/`,
    xInput
  )
}

const deletePhoto = xInput => {
  return API.delete(
    `${AUTH_URL}/profile/company/${xInput.company}/photo/${xInput.photoId}`
  )
}

const saveCompanyPosts = xInput => {
  return API.post(`${AUTH_URL}/profile/company/${xInput.company}/post/`, xInput)
}

const getCompanyPeopleList = CompanyId => {
  return API.get(`${AUTH_URL}/profile/company/${CompanyId}/people/`)
}

export default {
  getCompanyBenefitsList,
  getCompanyPhotosList,
  getCompanyPostList,
  addCompanyPhotos,
  getCompanyDetails,
  updateCompany,
  deletePhoto,
  saveCompanyPosts,
  getCompanyPeopleList,
  getCompanyNameList,
}
