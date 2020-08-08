<template>
  <div class="card-table">
    <div class="card-table-title">
      <h5>{{ title }}</h5>
    </div>
    <div class="card-table-body">
      <table class="table">
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Interviewer</th>
            <th>Schedule Info</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="candidate in candidates" :key="candidate.id">
            <td>
              <div class="list-element">
                <div class="list-img">
                  <span>{{ initial(candidate.first_name) }}</span>
                </div>
                <div class="list-desc">
                  <a class="list-title" :href="`candidates/${candidate.id}`">
                    {{ candidate.first_name + ' ' + candidate.last_name }}</a
                  >
                  <small>{{ candidate.job_title }}</small>
                </div>
              </div>
            </td>
            <td>
              <span>Alex Smith</span>
            </td>
            <td>
              <div class="list-desc">
                <span class="list-title">{{ 'Face to Face' }}</span>
                <small>{{ formatedDate }}</small>
              </div>
            </td>
            <td>
              {{ '' }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import moment from 'moment'

export default {
  props: ['title', 'candidates'],
  data() {
    return {}
  },
  methods: {
    initial(text) {
      if (typeof text === 'string') return text.charAt(0).toUpperCase()
      return ''
    },
  },
  computed: {
    formatedDate() {
      return moment(Date.now()).format('MMMM Do YYYY')
    },
  },
}
</script>
<style lang="scss" scoped>
.card-table {
  display: flex;
  flex-wrap: wrap;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  padding: 40px;
  .card-table-title {
    width: 100%;
  }
  .card-table-body {
    width: 100%;
  }
  .list-element {
    display: flex;
    justify-content: flex-start;
    .list-img {
      width: 40px;
      min-width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #3cb1e5;
      border-radius: 50px;
      color: #ffffff;
      font-weight: bold;
    }
  }
  .list-desc {
    margin-left: 10px;
    display: flex;
    flex-wrap: wrap;
    .list-title,
    small {
      width: 100%;
    }
  }
}
</style>
