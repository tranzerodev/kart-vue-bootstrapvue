<template>
  <div>
    <div class="card-large">
      <div class="card-large-title">
        <h5 v-if="type === 'summary'">Candidates Summary</h5>
        <h5 v-if="type === 'highlights'">Offer To Hire Highlights</h5>
      </div>
      <div class="card-large-left">
        <div>
          <div class="number-large">
            <span class="number" v-if="type === 'summary'">
              <ICountUp :delay="1000" :endVal="totalJob" :options="options" />
            </span>
            <span class="number" v-if="type === 'highlights'">
              <ICountUp :delay="1000" :endVal="totalJobs" :options="options" />
            </span>
          </div>
          <div class="number-description" v-if="type === 'summary'">
            <h6 class="bold">Live Jobs</h6>
            <span>5.0 Days Available</span>
          </div>
          <div class="number-description" v-if="type === 'highlights'">
            <h6 class="bold">Offers Made</h6>
            <span></span>
          </div>
        </div>
      </div>
      <div class="card-large-right">
        <div>
          <div class="number-large">
            <span class="number" v-if="type === 'summary'">
              <ICountUp
                :delay="1000"
                :endVal="totalCandidates"
                :options="options"
              />
            </span>
            <span class="number" v-if="type === 'highlights'">
              <ICountUp
                :delay="1000"
                :endVal="totalCandidates"
                :options="options"
              />
            </span>
          </div>
          <div class="number-description" v-if="type === 'summary'">
            <h6 class="bold">New Applications</h6>
            <span>9.5 Days Available</span>
          </div>
          <div class="number-description" v-if="type === 'highlights'">
            <h6 class="bold">Recent Hires</h6>
            <span></span>
          </div>
        </div>
      </div>
      <div class="card-large-footer">
        <b-button class="btn btn-primary" v-if="type === 'summary'" :href="url">
          Add New Job
        </b-button>
        <b-button
          class="btn btn-primary"
          v-if="type === 'highlights'"
          :href="url"
        >
          Open All Jobs
        </b-button>
      </div>
    </div>
  </div>
</template>
<script>
import ICountUp from 'vue-countup-v2'

export default {
  data() {
    return {
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: '',
      },
    }
  },
  components: {
    ICountUp,
  },
  props: ['title', 'image', 'type', 'url'],
  mounted() {
    this.$store.dispatch('jobs/getJobsData')
  },
  computed: {
    img() {
      return require('../../assets/images/' + this.image)
    },
    totalCandidates() {
      return this.$store.getters['candidates/total']
    },
    totalJobs() {
      return this.$store.getters['jobs/total']
    },
    totalJob() {
      return this.$store.getters['job/total']
    },
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.card-large {
  display: flex;
  flex-wrap: wrap;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  padding: 40px;
  height: 420px;
  h6.bold {
    font-size: 16px;
    font-weight: bold;
    color: #555555;
    margin-bottom: 0;
  }
  h5 {
    font-size: 18px;
  }
  span {
    color: #4d4f5c;
  }
  .card-large-title {
    width: 100%;
  }
  .card-large-left {
    width: 50%;
  }
  .card-large-right {
    width: 50%;
  }
  .card-large-footer {
    width: 100%;
    display: flex;
    align-items: center;
  }
  span.number,
  span.number > span {
    font-weight: bold;
    font-size: 75px;
    color: #42c2e0;
  }
  .number-large {
    text-align: center;
  }
  .number-description {
    text-align: center;
  }
  .card-large-footer {
    text-align: center;
    justify-content: center;
  }
  .card-large-footer {
    margin-top: 75px;
  }
}
@media screen and (max-width: 1024px) {
  .card-large {
    height: auto;
    h5 {
      text-align: center;
    }
    .card-large-left {
      width: 100%;
    }
    .card-large-right {
      width: 100%;
    }
    .card-large-footer {
      margin-top: 0;
    }
  }
}
</style>
