import ProfileService from '../_api/profileService'

const getCompanyDetails = async ({ commit }, CompanyId) => {
  let response = await ProfileService.getCompanyDetails(CompanyId)
  commit('setCompanyDetails', response.data)
}

const getCompanyBenefitsList = async ({ commit }, CompanyId) => {
  let response = await ProfileService.getCompanyBenefitsList(CompanyId)
  commit('setCompanyBenefitsList', response.data)
}

const getCompanyPhotosList = async ({ commit }, CompanyId) => {
  let response = await ProfileService.getCompanyPhotosList(CompanyId)
  commit('setCompanyPhotosList', response.data)
}

const getCompanyPeopleList = async ({ commit }, CompanyId) => {
  try {
    let response = await ProfileService.getCompanyPeopleList(CompanyId)
    if (!response) {
      commit('setErrorMsg', response.data)
      throw new Error(response.data)
    } else {
      commit('setCompanyPeopleList', response.data)
      commit('setErrorMsg', '')
    }
  } catch (e) {
    commit('setErrorMsg', e.response.data.detail)
  }
}

const getCompanyNameList = async ({ commit }) => {
  try {
    let response = await ProfileService.getCompanyNameList()
    if (!response) {
      commit('setErrorMsg', response.data)
      throw new Error(response.data)
    } else {
      commit('SET_COMPANY_NAME_LIST', response.data)
      commit('setErrorMsg', '')
      return response.data
    }
  } catch (e) {
    commit('setErrorMsg', e.response.data.detail)
    return
  }
}

const getCompanyPostList = async ({ commit }, CompanyId) => {
  let response = await ProfileService.getCompanyPostList(CompanyId)
  commit('setCompanyPostList', response.data)
}
const addCompanyPhotos = async ({ commit }, xInput) => {
  try {
    let response = await ProfileService.addCompanyPhotos(xInput)
    if (!response) {
      commit('setErrorMsg', response.data)
      throw new Error(response.data)
    } else {
      await getCompanyPhotosList({ commit }, xInput.company)
      commit('setErrorMsg', '')
    }
  } catch (e) {
    commit('setErrorMsg', e.response.data)
  }
}

const updateCompany = async ({ commit }, xInput) => {
  try {
    let response = await ProfileService.updateCompany(xInput)
    if (!response) {
      commit('setErrorMsg', response.data)
      throw new Error(response.data)
    } else {
      commit('setCompanyDetails', response.data)
      commit('setErrorMsg', '')
    }
  } catch (e) {
    commit('setErrorMsg', e.response.data)
  }
}

const deletePhoto = async ({ commit }, xInput) => {
  try {
    let response = await ProfileService.deletePhoto(xInput)
    if (!response) {
      commit('setErrorMsg', response.data)
      throw new Error(response.data)
    } else {
      await getCompanyPhotosList({ commit }, xInput.company)
      commit('setErrorMsg', '')
    }
  } catch (e) {
    commit('setErrorMsg', e.response.data)
  }
}

const saveCompanyPosts = async ({ commit }, xInput) => {
  try {
    let response = await ProfileService.saveCompanyPosts(xInput)
    if (!response) {
      commit('setErrorMsg', response.data)
      throw new Error(response.data)
    } else {
      await getCompanyPostList({ commit }, xInput.company)
      commit('setErrorMsg', '')
    }
  } catch (e) {
    commit('setErrorMsg', e.response.data)
  }
}

export default {
  getCompanyDetails,
  getCompanyBenefitsList,
  getCompanyPhotosList,
  getCompanyPostList,
  addCompanyPhotos,
  updateCompany,
  deletePhoto,
  saveCompanyPosts,
  getCompanyPeopleList,
  getCompanyNameList,
}
