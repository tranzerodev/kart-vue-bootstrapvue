const setCompanyDetails = (state, details) => {
  state.CompanySelected.details = details
}

const setCompanyBenefitsList = (state, benefitsList) => {
  state.CompanySelected.benefitsList = benefitsList
}

const setCompanyPhotosList = (state, photosList) => {
  state.CompanySelected.photosList = photosList
}

const setCompanyPostList = (state, postList) => {
  state.CompanySelected.postList = postList
}

const setCompanyPeopleList = (state, peopleList) => {
  state.CompanySelected.peopleList = peopleList
}

const SET_COMPANY_NAME_LIST = (state, companyNameList) => {
  state.companyNameList = companyNameList
}

const setErrorMsg = (state, errorMsg) => {
  state.errorMsg = errorMsg
}
export default {
  setCompanyDetails,
  setCompanyBenefitsList,
  setCompanyPhotosList,
  setCompanyPostList,
  setErrorMsg,
  setCompanyPeopleList,
  SET_COMPANY_NAME_LIST,
}
