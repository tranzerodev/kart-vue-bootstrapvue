import JobService from '../_api/JobService'

const getJobs = async ({ commit }) => {
  let response = await JobService.getJobs()
  commit('setJobs', response)
}

const getLandingPageFirst = async ({ commit }) => {
  let response = await JobService.getLandingPageFirst()
  commit('setJobs', response)
}

const getJobsData = async ({ commit }) => {
  let response = await JobService.getJobsData()
  commit('setJobsData', response.data)
}

const setSelectedJob = async ({ commit }, job) => {
  let response = await JobService.setSelectedJob(job)
  commit('setSelectedJob', response.data)
}

export default {
  getJobs,
  getJobsData,
  setSelectedJob,
  getLandingPageFirst,
}
