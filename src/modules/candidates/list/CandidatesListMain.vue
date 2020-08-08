<template>
  <div class="candidates-list-container container">
    <div class="row col-md-12">
      <h1>Candidates List</h1>
    </div>
    <div class="row">
      <div class="send-link col-lg-12">
        <b-button v-b-modal.modal-send-link class="btn btn-primary"
          >Send Link for new candidate</b-button
        >
      </div>
    </div>
    <div class="candidates-list-table">
      <table class="table table-borderless ">
        <thead>
          <tr>
            <th>Photo</th>
            <th>FirstName, LastName</th>
            <th>Location</th>
            <th>Application Status</th>
            <th>Date applied</th>
            <th>Attachment</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="candidate in candidates" :key="candidate.id">
            <td></td>
            <td>
              <strong>{{
                candidate.first_name + ', ' + candidate.last_name
              }}</strong
              ><br />
              <small>Mobile: {{ candidate.phone }}</small>
            </td>
            <td v-show="candidate.location">
              <i class="fa fa-map-marker"></i
              ><span>{{ candidate.location ? candidate.location : '' }}</span>
            </td>
            <td v-show="!candidate.location"></td>
            <td>{{ 'Applied' }}</td>
            <td>
              <div class="list-desc">
                <span class="list-title">{{ formatedDate }}</span>
              </div>
            </td>
            <td>
              <a :href="candidate.resume" target="blank">
                <i
                  class="fa fa-2x fa-file-pdf-o"
                  aria-hidden="true"
                  v-if="
                    candidate.resume && candidate.resume.indexOf('.pdf') > 0
                  "
                ></i>
                <i
                  class="fa fa-2x fa-file-word-o"
                  aria-hidden="true"
                  v-if="
                    candidate.resume && candidate.resume.indexOf('.doc') > 0
                  "
                ></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <b-modal
      id="modal-send-link"
      ref="modal"
      title="The user can receive this email would create a new candidate profile"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <p>
        The user can receive this email would create a new candidate profile
      </p>
      <form ref="form" @submit.stop.prevent="send">
        <b-form-group
          :state="emailState"
          label="Email"
          label-for="email-input"
          invalid-feedback="Email is required"
        >
          <b-form-input
            type="email"
            id="email-input"
            v-model="email"
            :state="emailState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>
<script>
import moment from 'moment'

export default {
  data() {
    return {
      email: '',
      emailState: null,
    }
  },
  mounted() {
    this.$store.dispatch('candidates/getCandidateList')
  },
  computed: {
    candidates() {
      return this.$store.getters['candidates/candidates']
    },
    formatedDate() {
      return moment(Date.now()).format('MMMM Do YYYY')
    },
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.emailState = valid
      return valid
    },
    send() {
      if (!this.checkFormValidity()) {
        return
      }
      //  TODO: here add logic of send email link
      this.$nextTick(() => {
        this.$bvModal.hide('modal-send-link')
      })
    },
    resetModal() {
      this.email = ''
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.send()
    },
  },
}
</script>
<style lang="scss" scoped>
.candidates-list-container {
  table {
    background: #ffffff;
    font: Medium 15px/13px Acumin Pro;
    thead {
      background: #3cb1e5;
      color: #ffffff;
    }
    tbody {
      color: #43425d;

      i {
        color: #a1a0ae;
      }
    }
  }
}
.send-link {
  margin-bottom: 10px;
}
</style>
