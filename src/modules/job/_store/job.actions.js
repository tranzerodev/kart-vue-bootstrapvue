import JobService from '../_api/JobService'
import MainApi from '@/api/MAIN_API'
const getJobList = async ({ commit }, jobList) => {
  let response = await JobService.getJobList(jobList)
  commit('setJobList', response.data)
}

const getJobSummary = async ({ commit }) => {
  let response = await JobService.getJobSummary()
  commit('setJobSummary', response.data)
}

const getJob = async ({ commit }, Job) => {
  let response = await JobService.getJob(Job)
  commit('setJob', response.data)
}

const deleteJob = async ({ commit }, Job) => {
  await JobService.deleteJob(Job)
  await getJobSummary({ commit })
}

const saveJob = async ({ commit }, payload) => {
  commit('ADD_JOB_REQUEST')
  try {
    let response = null
    if (payload.id != undefined) {
      response = await MainApi.patch(`/job/posting/${payload.id}/`, payload)
    } else {
      response = await MainApi.post('/job/posting/', payload)
    }
    if (!response) {
      commit('ADD_JOB_FAILED', response)
      throw new Error(response)
    }
    commit('ADD_JOB_SUCCESS', response)
    return response
  } catch (e) {
    commit('ADD_JOB_FAILED', e.response)
    return
  }
}
export default {
  saveJob,
  deleteJob,
  getJobList,
  getJobSummary,
  getJob,
}
