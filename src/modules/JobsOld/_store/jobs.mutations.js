const setJobs = (state, jobs) => {
  state.all = jobs
}

const setJobsData = (state, jobs) => {
  state.jobs = jobs
}

const setSelectedJob = (state, job) => {
  state.selectedJob = job
}
export default {
  setJobs,
  setJobsData,
  setSelectedJob,
}
