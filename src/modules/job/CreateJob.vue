<template>
  <div>
    <div class="job-body">
      <span class="job-main-title">{{ $t('job-details') }}</span>
      <div class="row col-md-12 pl-0">
        <div class="col-md-6">
          <div class="form-group">
            <label for="title">{{ $t('position-title') }}</label>
            <input
              type="text"
              class="form-control"
              autocomplete="off"
              id="title"
              name="title"
              placeholder="Required Field"
              v-model="jobForm.title"
              v-validate="'required'"
              @change="onChange($event)"
              :class="{
                'is-invalid': veeErrors.has('title'),
              }"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="jobProfile">{{ $t('job-profile') }}</label>
            <input
              type="text"
              class="form-control"
              autocomplete="off"
              id="jobProfile"
              name="jobProfile"
              v-model="jobForm.metadata.jobProfile"
              @change="onChange($event)"
            />
          </div>
        </div>
      </div>
      <div class="row col-md-12 pl-0">
        <div class="col-md-6">
          <div class="form-group">
            <label for="location">{{ $t('location') }}</label>
            <input
              type="text"
              class="form-control"
              autocomplete="off"
              id="location"
              name="location"
              placeholder="Required Field"
              v-model="jobForm.location"
              v-validate="'required'"
              @change="onChange($event)"
              :class="{
                'is-invalid': veeErrors.has('location'),
              }"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="industry">{{ $t('industry') }}</label>
            <select
              v-model="jobForm.industry"
              class="form-control selectpicker"
              autocomplete="off"
              id="industry"
              name="industry"
              placeholder="Required Field"
              v-validate="'required'"
              @change="onChange($event)"
              :class="{
                'is-invalid': veeErrors.has('industry'),
              }"
            >
              <option
                v-for="job in industryList"
                :key="job.code"
                :value="job.code"
                >{{ job.name }}</option
              >
            </select>
          </div>
        </div>
      </div>
      <div class="row col-md-12 pl-0">
        <div class="col-md-6">
          <div class="form-group">
            <label for="seniority">{{ $t('seniority') }}</label>
            <select
              v-model="jobForm.seniority"
              class="form-control"
              autocomplete="off"
              id="probationEndDate"
              name="probationEndDate"
              @change="onChange($event)"
            >
              <option
                v-for="seniority in seniorityList"
                :key="seniority.id"
                :value="seniority.value"
                >{{ seniority.value }}</option
              >
            </select>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="employmentType">{{ $t('employment-type') }}</label>
            <select
              v-model="jobForm.job_type"
              class="form-control"
              autocomplete="off"
              id="job_type"
              name="job_type"
              placeholder="Required Field"
              v-validate="'required'"
              @change="onChange($event)"
              :class="{
                'is-invalid': veeErrors.has('employmentType'),
              }"
            >
              <option
                v-for="job in jobType"
                :key="job.code"
                :value="job.code"
                >{{ job.name }}</option
              >
            </select>
          </div>
        </div>
      </div>
      <div class="row col-md-12 pl-0">
        <div
          class="col-md-6"
          style="display: flex;justify-content: space-between;"
        >
          <div class="form-group col-md-6  pl-0">
            <label for="min_compensation">{{ $t('salary') }}</label>
            <input
              type="number"
              class="form-control"
              autocomplete="off"
              id="min_compensation"
              @change="onChange($event)"
              placeholder="0"
              min="0"
              v-model="jobForm.min_compensation"
              :class="{
                'is-invalid':
                  typeof errorMessage === 'object'
                    ? errorMessage['min_compensation']
                    : false,
              }"
            />
          </div>
          <div class="form-group col-md-6 pl-0 pr-0">
            <label for="max_compensation">&nbsp;</label>
            <input
              type="number"
              class="form-control"
              autocomplete="off"
              id="max_compensation"
              placeholder="0"
              v-model="jobForm.max_compensation"
              @change="onChange($event)"
              min="0"
              :class="{
                'is-invalid':
                  typeof errorMessage === 'object'
                    ? errorMessage['max_compensation']
                    : false,
              }"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="worker_type">{{ $t('worker-type') }}</label>
            <input
              type="text"
              class="form-control"
              autocomplete="off"
              id="worker_type"
              name="worker_type"
              v-model="jobForm.metadata.worker_type"
              @change="onChange($event)"
            />
          </div>
        </div>
      </div>
      <div class="row col-md-12 pl-0">
        <div class="col-md-6">
          <div class="form-group">
            <label for="probationEndDate">{{ $t('probation-end-date') }}</label>
            <select
              v-model="jobForm.metadata.probation_end_date"
              class="form-control"
              autocomplete="off"
              id="probationEndDate"
              name="probationEndDate"
              @change="onChange($event)"
            >
              <option
                v-for="probation in probationList"
                :key="probation.id"
                :value="probation.id"
                >{{ probation.name }}</option
              >
            </select>
          </div>
        </div>

        <div class="col-md-6">
          <div v-if="!jobId" class="form-group">
            <label for="company">{{ $t('company') }}</label>
            <input
              type="text"
              class="form-control"
              autocomplete="off"
              id="company_name"
              name="company_name"
              v-model="jobForm.company_name"
              @change="onChange($event)"
              list="company-list-id"
            />
            <b-form-datalist
              id="company-list-id"
              :options="companyNameList"
            ></b-form-datalist>
          </div>
        </div>
      </div>
      <div class="row col-md-12 pl-0">
        <div id="editor" class="form-group col-md-12">
          <label for="description">{{ $t('job-description') }}</label>
          <quill-editor
            v-model="jobForm.description"
            ref="myQuillEditor"
            name="description"
            placeholder="Required Field"
            required
            v-validate="'required'"
            :class="{
              'quill-invalid': veeErrors.has('description'),
            }"
          >
          </quill-editor>
        </div>
      </div>
      <div class="row col-md-12 pl-0">
        <div class="col-md-12 group-button">
          <template v-if="!jobId">
            <button
              type="button"
              class="btn btn-lg btn-job"
              @click="saveJobForm(true, 'Open')"
            >
              <i class="fa fa-check" /> {{ $t('post-job') }}
            </button>
            <button
              type="button"
              class="btn btn-lg btn-job"
              @click="saveJobForm(false, 'Draft')"
            >
              {{ $t('save-for-later') }}
            </button>
          </template>
          <template v-if="jobId">
            <button
              type="button"
              class="btn btn-lg btn-job"
              v-if="jobForm.status == 'Draft'"
              @click="saveJobForm(true, '')"
            >
              {{ $t('save-changes') }}
            </button>
            <button
              type="button"
              class="btn btn-lg btn-job"
              v-if="jobForm.status == 'Open'"
              @click="takeOffLine()"
            >
              {{ $t('take-offline') }}
            </button>
            <button
              type="button"
              class="btn btn-lg btn-job"
              v-if="jobForm.status == 'Draft'"
              @click="takeOnLine()"
            >
              {{ $t('take-online') }}
            </button>
            <button
              type="button"
              class="btn btn-lg btn-job"
              v-if="jobForm.status == 'Draft'"
              @click="takeClose()"
            >
              {{ $t('take-close') }}
            </button>
            <button
              type="button"
              class="btn btn-lg btn-job"
              v-if="jobForm.status == 'Closed'"
              @click="takeOffLine()"
            >
              {{ $t('take-draft') }}
            </button>
          </template>
          <button
            type="button"
            class="btn btn-lg btn-job btn-cancel"
            @click="cancel()"
          >
            <i class="fa fa-close" /> CANCEL
          </button>
        </div>
      </div>
    </div>
    <b-modal
      id="upgradeToPremium"
      hide-header
      hide-footer
      size="md"
      centered
      body-class="p-0"
      no-close-on-backdrop
    >
      <div class="up">
        <img
          :src="img('close-icon-02.png')"
          alt="image"
          class="cursor"
          style="position: absolute; right: -30px;"
          @click="hideModal()"
        />
        <p class="up-title">
          {{ $t('upgrade-to-premium') }}
        </p>
        <p class="up-subtitle">
          {{ errorMessage['message'] }}
        </p>
        <div class="up-footer">
          <button type="button" class="btn btn-lg btn-job">
            upgrade
          </button>
          <button
            type="button"
            class="btn btn-lg btn-job btn-cancel"
            @click="hideModal()"
          >
            cancel
          </button>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      jobUpdForm: {},
      jobForm: {
        title: '',
        location: '',
        industry: '',
        seniority: '',
        job_type: 'FT',
        min_compensation: '0',
        max_compensation: '0',
        scheduledWeeklyHours: '',
        probationEndDate: '',
        company_name: null,
        company: null,
        description: '',
        is_posted: true,
        metadata: {
          worker_type: '',
          probation_end_date: 0,
          jobProfile: null,
        },
      },
      companyNameList: [],
      companyList: [],
      industryList: null,
      probationList: [
        { id: '0', name: this.$t('n_a') },
        { id: '1', name: '1 month' },
        { id: '2', name: '2 months' },
        { id: '3', name: '3 months' },
        { id: '4', name: '4 months' },
        { id: '5', name: '5 months' },
        { id: '6', name: '6 months' },
        { id: '7', name: '7 months' },
      ],
      seniorityList: [
        { value: 'Unpaid' },
        { value: 'Training' },
        { value: 'Entry-level' },
        { value: 'Senior' },
        { value: 'Manager' },
        { value: 'Director' },
        { value: 'Vice President (VP)' },
        { value: 'Chief X Officer (CxO)' },
        { value: 'Partner' },
        { value: 'Owner' },
      ],
    }
  },
  components: {
    quillEditor,
  },
  props: {
    jobId: null,
  },
  async mounted() {
    this.$store.dispatch('catalog/getJobType')
    if (this.jobId != undefined) {
      await this.$store.dispatch('job/getJob', this.jobId)
      this.jobForm = this.$store.getters['job/job']
      if (this.jobForm.metadata == null) {
        this.jobForm.metadata = {
          worker_type: '',
          probation_end_date: null,
        }
      }
    }
    this.companyList = await this.$store.dispatch(
      'companyprofile/getCompanyNameList'
    )
    this.industryList = await this.$store.dispatch('catalog/loadJobCategory')
    this.loadCompanyNameList()
  },
  computed: {
    ...mapState({
      errorMessage: state =>
        state.job.addJobError ? state.job.addJobError : '',
    }),
    jobType() {
      return this.$store.getters['catalog/jobType']
    },
  },
  watch: {
    errorMessage: function(newVal) {
      if (newVal['status'] == '402') {
        this.$root.$emit('bv::show::modal', 'upgradeToPremium', '#btnShow')
      }
    },
  },
  methods: {
    async loadCompanyNameList() {
      this.companyList = await this.$store.dispatch(
        'companyprofile/getCompanyNameList'
      )
      if (this.companyList && this.companyList.length) {
        this.companyNameList = this.companyList.map(company => company.name)
      }
    },
    validateState(ref) {
      if (
        this.veeFields[ref] &&
        (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      ) {
        return !this.veeErrors.has(ref)
      }
      return null
    },
    goToJob() {
      this.refreshJobList()
      this.$router.push('/job')
    },
    hideModal() {
      this.$root.$emit('bv::hide::modal', 'upgradeToPremium', '#btnShow')
    },
    img(image) {
      if (image == '') {
        return null
      } else {
        return require('../../assets/images/' + image)
      }
    },
    onChange: function(event) {
      let value = event.target.value
      let name = event.target.name
      if (name == 'probationEndDate') {
        this.jobUpdForm['metadata.probationEndDate'] = value
      } else if (name == 'worker_type') {
        this.jobUpdForm['metadata.worker_type'] = value
      } else if (name == 'jobProfile') {
        this.jobUpdForm['metadata.jobProfile'] = value
      } else {
        this.jobUpdForm[name] = value
      }
    },
    redo() {
      self.editor.history.redo()
    },
    async takeOffLine() {
      await this.$store
        .dispatch('job/saveJob', {
          id: this.jobId,
          is_posted: 'false',
          status: 'Draft',
        })
        .then(result => {
          if (result) {
            this.goToJob()
          }
        })
    },
    async takeClose() {
      await this.$store
        .dispatch('job/saveJob', {
          id: this.jobId,
          is_posted: 'false',
          status: 'Closed',
        })
        .then(result => {
          if (result) {
            this.goToJob()
          }
        })
    },
    async takeOnLine() {
      await this.$store
        .dispatch('job/saveJob', {
          id: this.jobId,
          is_posted: 'true',
          status: 'Open',
        })
        .then(result => {
          if (result) {
            this.goToJob()
          }
        })
    },
    async saveJobForm(is_internal, status) {
      await this.$validator.validateAll()
      if (!this.veeErrors.any()) {
        if (this.jobId != undefined) {
          this.jobUpdForm['id'] = this.jobId
          this.jobUpdForm['description'] = this.jobForm.description
          await this.$store
            .dispatch('job/saveJob', this.jobUpdForm)
            .then(result => {
              if (result) {
                this.goToJob()
              }
            })
        } else {
          this.jobForm.is_posted = is_internal
          this.jobForm.status = status
          let currentCompany = this.companyList.find(
            company => company.name === this.jobForm.company_name
          )
          if (currentCompany) {
            delete this.jobForm.company_name
            this.jobForm.company = currentCompany.id
          }
          await this.$store
            .dispatch('job/saveJob', this.jobForm)
            .then(result => {
              if (result) {
                this.goToJob()
              }
            })
        }
      }
    },
    async refreshJobList() {
      await this.$store.dispatch('job/getJobList', {
        limit: localStorage.getItem('limit'),
        offset: localStorage.getItem('offset'),
        status: localStorage.getItem('status'),
      })
      await this.$store.dispatch('job/getJobSummary')
    },
    cancel() {
      this.$router.push('/job')
    },
  },
}
</script>
<style lang="scss">
.up {
  margin-left: 48px;
  margin-top: 36px;
  margin-right: 61px;
  position: relative;
}
.up-title {
  font-weight: 600;
  font-size: 40px;
  line-height: 65px;
  display: flex;
  align-items: center;
  color: #4d4f5c;
  margin: 0px;
}
.up-subtitle {
  font-size: 16px;
  line-height: 24px;
  color: #4d4f5c;
  margin: 0px;
}
.up-subtitle-1 {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-decoration-line: underline;
  color: #3cb1e5;
  margin-top: 20px;
}
.up-footer {
  justify-content: space-between;
  display: flex;
  margin-top: 24px;
  margin-bottom: 32px;
  .btn-cancel {
    border: 2px solid #3cb1e5;
    box-sizing: border-box;
    border-radius: 4px;
    color: #3cb1e5;
  }
}
button {
  text-transform: uppercase;
}

.btn-job {
  background: #3cb1e5;
  width: 170px;
  height: 44px;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
}
.btn-cancel {
  background: #ffffff;
  color: #adadad;
}
.btn:focus,
.btn.focus {
  box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.25);
}
.job-body {
  input {
    text-transform: capitalize;
  }
  .quill-invalid {
    border: 1px solid #dc3545;
  }
  .job-main-title {
    font-weight: 600;
    font-size: 40px;
    line-height: 65px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #404040;
  }
  .ql-omega:after {
    content: 'f01e';
  }
  .quill-editor {
    background-color: white;
    .ql-container,
    .ql-editor {
      height: 200px;
    }
    .ql-toolbar {
      line-height: 1.5;
    }
  }

  .quill-editor-disabled {
    img {
      pointer-events: none;
    }

    .ql-toolbar {
      display: none;
    }

    .ql-container {
      border-top: 10px solid #ccc !important;
    }
  }
  .ql-container {
    min-height: inherit;
    border: inherit;
  }
  .ql-blank {
    border: 0px solid #ccc;
  }
  .group-button {
    display: flex;
    button:first-child {
      margin: 10px 10px 10px 0;
    }
    button:last-child {
      margin: 10px 0 10px 10px;
    }
    button {
      margin: 10px;
    }
  }
}
</style>
