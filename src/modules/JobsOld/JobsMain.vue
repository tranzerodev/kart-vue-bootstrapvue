<template>
  <div class="jobs-container">
    <div class="jobs-title col-md-12">
      <h1>Jobs</h1>
    </div>
    <div class="jobs-main">
      <JobsList />
      <JobsDetail />
      <JobsFooter />
    </div>
  </div>
</template>
<script>
import JobsList from './JobsList'
import JobsDetail from './JobsDetail'
import JobsFooter from './JobsFooter'

export default {
  components: {
    JobsList,
    JobsDetail,
    JobsFooter,
  },
  computed: {
    jobSelected() {
      return {}
    },
  },
}
</script>
<style lang="scss" scoped>
.jobs-container {
  margin: 90px 80px 0 80px;
  background: transparent linear-gradient(180deg, #daf3fe 0%, #c2f2f3 100%) 0%
    0% no-repeat padding-box;
  width: calc(100% - 80px);
  // box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  .jobs-main {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    .jobs-list {
      width: 70%;
    }
    .jobs-detail {
      width: 30%;
    }
  }
}
@media screen and (max-width: 1024px) {
  .jobs-container {
    .jobs-main {
      .jobs-list {
        width: 50%;
      }
      .jobs-detail {
        width: 50%;
      }
    }
  }
}
</style>
