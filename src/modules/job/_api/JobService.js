import API from '../../../api/API'
const urlMocks = ``

const getJob = jobInput => {
  return API.get(`${urlMocks}/job/posting/${jobInput}/`)
}
const deleteJob = jobInput => {
  return API.delete(`${urlMocks}/job/posting/${jobInput}/`)
}
const saveJob = jobInput => {
  if (jobInput.id != undefined) {
    return API.patch(`${urlMocks}/job/posting/${jobInput.id}/`, jobInput)
  } else {
    return API.post(`${urlMocks}/job/posting/`, jobInput)
  }
}

const getJobList = jobList => {
  return API.get(
    `${urlMocks}/job/posting/?limit=${jobList.limit}&offset=${jobList.offset}&paginate&status=${jobList.status}`
  )
}

const getJobSummary = () => {
  return API.get(`${urlMocks}/job/summary/`)
}

export default {
  saveJob,
  getJobList,
  getJobSummary,
  getJob,
  deleteJob,
}
