const setJob = (state, job) => {
  state.jobSelected.job = job
}
const setJobList = (state, Jobs) => {
  state.all = Jobs
}

const setJobSummary = (state, total) => {
  state.by_status = {
    total: total.total,
    Draft: getStatus(total.by_status, 'Draft'),
    Open: getStatus(total.by_status, 'Open'),
    Closed: getStatus(total.by_status, 'Closed'),
  }
}

function getStatus(xJson, xSearch) {
  let x = xJson.filter(x => x.status == xSearch)
  if (x[0] != undefined) return x[0].total
}

const ADD_JOB_REQUEST = state => {
  state.isAddingJob = true
  state.addJobError = ''
}
const ADD_JOB_FAILED = (state, error) => {
  state.isAddingJob = false
  if (error.status === 500 || !error.data) {
    state.addJobError = this.$t('the-request-cannot-be-processed-at-this-time.')
  } else if (error.status === 402 || !error.data) {
    state.addJobError = { status: '402', message: error.data }
  } else {
    state.addJobError = error.data
  }
}
const ADD_JOB_SUCCESS = state => {
  state.isAddingJob = false
  state.addJobError = ''
}
export default {
  setJob,
  setJobList,
  setJobSummary,
  ADD_JOB_REQUEST,
  ADD_JOB_FAILED,
  ADD_JOB_SUCCESS,
}
