import API from '../../../api/API-HRM'

const getJobType = () => {
  return API.get(`/catalog/job_type/`)
}
export default {
  getJobType,
}
