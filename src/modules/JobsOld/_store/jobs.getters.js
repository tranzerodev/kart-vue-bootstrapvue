const jobs = state => state.all
const total = state => state.jobs.length || 0
const jobsData = state => state.jobs
const selectedJob = state => state.selectedJob

export default {
  jobs,
  jobsData,
  selectedJob,
  total,
}
