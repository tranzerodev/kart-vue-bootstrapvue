const companyDetails = state => state.CompanySelected.details

const companyBenefitsList = state => state.CompanySelected.benefitsList

const companyPhotosList = state => state.CompanySelected.photosList

const companyPostList = state => state.CompanySelected.postList

const companyPeopleList = state => state.CompanySelected.peopleList

const errorMsg = state => state.errorMsg

const total = state => state.all.length || 0
export default {
  companyDetails,
  companyBenefitsList,
  companyPhotosList,
  companyPostList,
  companyPeopleList,
  total,
  errorMsg,
}
