const jobList = state => state.all
const total = state => state.all.length || 0
const by_status = state => state.by_status
const job = state => state.jobSelected.job

export default {
  jobList,
  total,
  by_status,
  job,
}
