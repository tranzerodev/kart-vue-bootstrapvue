<template>
  <div class="jobs-list">
    <div class="jobs-list-title col-md-12">
      <h6>Recent Jobs</h6>
    </div>
    <div class="jobs-list-filter">
      <div class="form-inline">
        <div class="form-group mb-2">
          <label for="selectDistance" class="sr-only">Distance</label>
          <select
            id="selectDistance"
            class="form-control"
            v-model="search.distance"
          >
            <option value="1">10 miles (16km)</option>
            <option value="2">25 miles (40km)</option>
            <option value="3">50 miles (80km)</option>
            <option value="4">75 miles (120km)</option>
            <option value="5">100 miles (160km)</option>
          </select>
        </div>
        <div class="form-group mb-2">
          <label for="selectJobType" class="sr-only">Job Type</label>
          <select
            id="selectJobType"
            class="form-control"
            v-model="search.jobType"
          >
            <option value="0" selected disabled>Job Type</option>
            <option value="1">Freelance</option>
            <option value="2">Internship</option>
            <option value="3">Full Time</option>
            <option value="4">Part Time</option>
            <option value="5">Temporary</option>
            <option value="6">Contract</option>
          </select>
        </div>
        <div class="form-group mb-2">
          <label for="selectSalary" class="sr-only">Salary</label>
          <select
            id="selectSalary"
            class="form-control"
            v-model="search.salary"
          >
            <option value="0" selected disabled>salary</option>
            <option value="1">$30k - $60k</option>
            <option value="2">$70k - $100k</option>
            <option value="3">$110k - $140k</option>
            <option value="4">$150k - $170k</option>
            <option value="5">180k+</option>
          </select>
        </div>
        <div class="form-group mb-2">
          <label for="SelectDateCreated" class="sr-only">Time</label>
          <select
            id="SelectDateCreated"
            class="form-control"
            v-model="search.hours"
          >
            <option value="1" selected>Past 24 Hours</option>
            <option value="2">Past Week</option>
            <option value="3">Past Month</option>
            <option value="4">Anytime</option>
          </select>
        </div>
        <div class="form-group mb-2">
          <label for="selectSort" class="sr-only">Sort</label>
          <select id="selectSort" class="form-control" v-model="search.sort">
            <option value="0" selected disabled>Sort</option>
            <option value="1">Relevance</option>
            <option value="2">Post Date</option>
          </select>
        </div>
      </div>
    </div>
    <div class="jobs-list-recent">
      <div class="list-group">
        <div
          v-for="job in jobs"
          :key="job.id"
          @click="setSelectedJob(job)"
          class="list-group-item list-group-item-action flex-column align-items-start"
          vi-bind:class="{ active: isActive(job.title)}"
        >
          <div class="d-flex w-100">
            <h5 class="mb-1">{{ job.title }}</h5>
          </div>
          <div>
            <small class="company">{{ job.company_name }}</small>
          </div>
          <div class="details">
            <span>
              <i class="fa fa-map-marker"></i>
              {{ job.location }}
            </span>
            <span>
              <i class="fa fa-calendar"></i>
              {{ job.job_type }}
            </span>
            <span>
              <i class="fa fa-clock-o"></i>
              {{ job.posted }}.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: {
        distance: 1,
        jobType: 0,
        salary: 0,
        hours: 1,
        sort: 0,
      },
    }
  },
  created() {
    this.$store.dispatch('jobs/getJobsData', this.search)
  },
  methods: {
    setSelectedJob(job) {
      this.$store.dispatch('jobs/setSelectedJob', job)
    },
  },
  computed: {
    jobs() {
      return this.$store.getters['jobs/jobsData']
    },
    selectedJob() {
      let result = this.$store.getters['jobs/selectedJob']

      if (result) return result
      else return null
    },
    isActive(key) {
      return this.selectedJob && this.selectedJob.title === key
    },
  },
}
</script>
<style lang="scss" scoped>
.jobs-list-filter {
  background: #5db0e6;
  margin: 0 20px;
  .form-inline {
    display: flex;
    align-content: space-between;

    .form-group {
      margin: 10px;
    }
  }
}
.jobs-list-recent {
  margin: 20px;
}
.active {
  background: #f0fafd;
}
h5 {
  color: #3cb1e5;
}
.company {
  color: #4d4f5c;
}
.details {
  color: #747474;
}
</style>
