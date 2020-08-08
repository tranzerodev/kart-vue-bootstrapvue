<template>
  <b-container p="0" m="0">
    <b-row class="mb-4">
      <b-col cols="12">
        <h4 class="font-weight-bold form-title">{{ $t('work-experience') }}</h4>
      </b-col>
    </b-row>
    <form
      @submit.prevent="submit"
      v-for="(workExperience, index) in workExperiences"
      :key="index"
    >
      <div class="border-top my-3 mb-4" v-show="index"></div>
      <b-row class="mb-2">
        <b-col cols="12">
          <b-form-group>
            <b-form-input
              v-model="workExperience.job_title"
              :id="'job_title' + index"
              class="col-sm-12 mat-form-control"
              :name="'job_title' + index"
              :placeholder="$t('job-title')"
              aria-describedby="job_title"
              v-validate="{ required: true }"
              :state="validateState('job_title' + index)"
              :data-vv-as="$t('job-title')"
              :class="{
                'is-invalid':
                  typeof errorMessage[index] === 'object'
                    ? errorMessage['job_title']
                    : false,
              }"
            />
            <b-form-invalid-feedback id="input-1-live-feedback">{{
              veeErrors.first('job_title' + index)
            }}</b-form-invalid-feedback>
            <div
              v-if="
                typeof errorMessage[index] === 'object'
                  ? errorMessage['job_title']
                  : false
              "
              class="invalid-feedback"
            >
              {{
                typeof errorMessage[index] === 'object'
                  ? errorMessage['job_title'].toString()
                  : false
              }}
            </div>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group>
            <b-form-input
              v-model="workExperience.location"
              :id="'location' + index"
              class="col-sm-12 mat-form-control"
              :name="'location' + index"
              :placeholder="$t('location')"
              aria-describedby="location"
              v-validate="{ required: true }"
              :state="validateState('location' + index)"
              :data-vv-as="$t('location')"
              :class="{
                'is-invalid':
                  typeof errorMessage[index] === 'object'
                    ? errorMessage['location']
                    : false,
              }"
            />
            <b-form-invalid-feedback id="input-1-live-feedback">{{
              veeErrors.first('location' + index)
            }}</b-form-invalid-feedback>
            <div
              v-if="
                typeof errorMessage[index] === 'object'
                  ? errorMessage['location']
                  : false
              "
              class="invalid-feedback"
            >
              {{
                typeof errorMessage[index] === 'object'
                  ? errorMessage['location'].toString()
                  : false
              }}
            </div>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group class="pl-0 mb-2">
            <b-form-input
              v-model="workExperience.company_name"
              :id="'company_name' + index"
              class="col-sm-12 mat-form-control auto-complete-control"
              :name="'company_name' + index"
              :placeholder="$t('company-name')"
              :aria-describedby="'company_name' + index"
              v-validate="{ required: true }"
              :state="validateState('company_name' + index)"
              :data-vv-as="$t('company-name')"
              list="company-list-id"
              :class="{
                'is-invalid':
                  typeof errorMessage[index] === 'object'
                    ? errorMessage[index]['company']
                    : false,
              }"
            />
            <b-form-datalist
              id="company-list-id"
              :options="companyNameList"
            ></b-form-datalist>
            <b-form-invalid-feedback id="input-1-live-feedback">{{
              veeErrors.first('company_name' + index)
            }}</b-form-invalid-feedback>
            <div
              v-if="
                typeof errorMessage[index] === 'object'
                  ? errorMessage[index]['company']
                  : false
              "
              class="invalid-feedback"
            >
              {{
                typeof errorMessage[index] === 'object'
                  ? errorMessage[index]['company'].toString()
                  : false
              }}
            </div>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col cols="5" class="pr-1">
          <b-form-group class="mb-1">
            <b-input-group class="mat-date-picker">
              <b-form-input
                id="example-input"
                v-model="workExperience.from_dateAsOtherFormatter"
                type="text"
                class="mat-form-control"
                :name="'from_date' + index"
                :placeholder="`${$t('start-date')} (${$t('mm-dd-yyyy')})`"
                autocomplete="off"
                v-validate="'required: true |date_format:MM-dd-yyyy'"
                @change="changeFromDateOtherFormatter(index)"
                aria-describedby="from_date"
                :state="validateState('from_date' + index)"
                :data-vv-as="$t('start-date')"
                :class="{
                  'is-invalid':
                    typeof errorMessage[index] === 'object'
                      ? errorMessage[index]['from_date']
                      : false,
                }"
              ></b-form-input>
              <b-input-group-append>
                <b-form-datepicker
                  :id="'start-date-datepicker' + index"
                  class="mat-form-control py-2 pl-2 date-picker-button"
                  :max="max"
                  menu-class="date-popup"
                  v-model="workExperience.from_date"
                  button-only
                  button-variant="transparent"
                  dropright
                  @input="changeFromDate(index)"
                  offset="10"
                  :date-format-options="{
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                  }"
                ></b-form-datepicker>
              </b-input-group-append>
              <b-form-invalid-feedback id="input-1-live-feedback">{{
                veeErrors.first('from_date' + index)
              }}</b-form-invalid-feedback>
              <div
                v-if="
                  typeof errorMessage[index] === 'object'
                    ? errorMessage[index]['from_date']
                    : false
                "
                class="invalid-feedback"
              >
                {{
                  typeof errorMessage[index] === 'object'
                    ? errorMessage[index]['from_date'].toString()
                    : false
                }}
              </div>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col cols="5" class="pl-1">
          <b-form-group class="mb-1">
            <b-input-group class="mat-date-picker">
              <b-form-input
                id="example-input"
                v-model="workExperience.to_dateAsOtherFormatter"
                type="text"
                class="mat-form-control"
                :name="'to_date' + index"
                :placeholder="`${$t('end-date')} (${$t('mm-dd-yyyy')})`"
                autocomplete="off"
                @change="changeToDateOtherFormatter(index)"
                v-validate="'required: true |date_format:MM-dd-yyyy'"
                aria-describedby="'to_date'"
                :state="validateState('to_date' + index)"
                :data-vv-as="$t('end-date')"
                :class="{
                  'is-invalid':
                    typeof errorMessage[index] === 'object'
                      ? errorMessage[index]['to_date']
                      : false,
                }"
                :disabled="workExperience.is_current"
              ></b-form-input>
              <b-input-group-append>
                <b-form-datepicker
                  :id="'end-date-datepicker' + index"
                  class="mat-form-control py-2 pl-2 date-picker-button"
                  :max="max"
                  menu-class="date-popup"
                  v-model="workExperience.to_date"
                  button-only
                  button-variant="transparent"
                  @input="changeToDate(index)"
                  dropright
                  offset="10"
                  :date-format-options="{
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                  }"
                  :disabled="workExperience.is_current"
                ></b-form-datepicker>
              </b-input-group-append>
              <b-form-invalid-feedback id="input-1-live-feedback">{{
                veeErrors.first('to_date' + index)
              }}</b-form-invalid-feedback>
              <div
                v-if="
                  typeof errorMessage[index] === 'object'
                    ? errorMessage[index]['to_date']
                    : false
                "
                class="invalid-feedback"
              >
                {{
                  typeof errorMessage[index] === 'object'
                    ? errorMessage[index]['to_date'].toString()
                    : false
                }}
              </div>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col cols="2" class="pt-3 pl-0">
          <div class="">
            <b-form-checkbox
              :id="'checkbox-is-current' + index"
              v-model="workExperience.is_current"
              name="checkbox-1"
            >
              {{ $t('current') }}
            </b-form-checkbox>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-form-group id="industry-form-group">
            <b-form-select
              :id="'job_category' + index"
              :name="'job_category' + index"
              v-model="workExperience.job_category"
              v-validate="{ required: true }"
              :options="industryOptions"
              :state="validateState('job_category' + index)"
              aria-describedby="industry-live-feedback"
              :data-vv-as="$t('industry')"
              :placeholder="$t('please-select-industry-of-work')"
              class="mat-form-control"
              :class="{
                'is-placeholder': !workExperience.job_category,
                'is-invalid':
                  typeof errorMessage[index] === 'object'
                    ? errorMessage[index]['job_category']
                    : false,
              }"
            ></b-form-select>
            <b-form-invalid-feedback id="industry-live-feedback">{{
              veeErrors.first('job_category' + index)
            }}</b-form-invalid-feedback>
            <div
              v-if="
                typeof errorMessage[index] === 'object'
                  ? errorMessage[index]['job_category']
                  : false
              "
              class="invalid-feedback"
            >
              {{
                typeof errorMessage[index] === 'object'
                  ? errorMessage[index]['job_category'].toString()
                  : false
              }}
            </div>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group>
            <b-form-textarea
              v-model="workExperience.job_description"
              :id="'job_description' + index"
              class="col-sm-12 mat-form-control textarea"
              :name="'job_description' + index"
              :placeholder="$t('what-did-you-do-here')"
              :aria-describedby="'job_description' + index"
              rows="10"
              max-rows="10"
              v-validate="{ required: true }"
              :state="validateState('job_description' + index)"
              :data-vv-as="$t('job-description')"
              :class="{
                'is-invalid':
                  typeof errorMessage[index] === 'object'
                    ? errorMessage[index]['job_description']
                    : false,
              }"
            />
            <b-form-invalid-feedback id="input-1-live-feedback">{{
              veeErrors.first('job_description' + index)
            }}</b-form-invalid-feedback>
            <div
              v-if="
                typeof errorMessage[index] === 'object'
                  ? errorMessage[index]['job_description']
                  : false
              "
              class="invalid-feedback"
            >
              {{
                typeof errorMessage[index] === 'object'
                  ? errorMessage[index]['job_description'].toString()
                  : false
              }}
            </div>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <span
            class="text-danger"
            v-show="typeof errorMessage[index] === 'string'"
            >{{ errorMessage[index] }}</span
          >
        </b-col>
      </b-row>
      <b-row class="mb-2 px-2" align-h="end" v-if="index">
        <IconButton
          :title="$t('delete-experience')"
          icon-class="fa fa-minus text-danger"
          :right-icon="true"
          @click-icon-button="removeWorkExperience(index)"
        />
      </b-row>
    </form>
    <b-row class="mb-2">
      <b-col cols="12" md="5" sm="12" class="pr-0">
        <IconButton
          :title="$t('add-job-experience')"
          icon-class="fa fa-plus"
          @click-icon-button="addWorkExperience"
        />
      </b-col>
      <b-col cols="12" md="7" sm="12" class="py-0">
        <b-row class="d-flex align-items-center">
          <b-form-group id="fileInput" class="dragdrop mb-0 mr-2 ml-auto">
            <b-form-file v-model="resumeFile" placeholder accept="pdf" />
          </b-form-group>
          <span>{{ $t('upload-resume-up-to-20-megabype') }}</span>
        </b-row>
        <b-row class="d-flex justify-content-end">
          <span>{{ resumeFileName }}</span>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <span
          class="text-danger"
          v-show="
            typeof profileErrorMessage === 'string' && profileErrorMessage
          "
          >{{ $t('resume-upload') }} {{ profileErrorMessage }}</span
        >
        <div
          v-if="
            typeof profileErrorMessage === 'object'
              ? profileErrorMessage['account']
              : false
          "
        >
          <span
            class="text-danger"
            v-for="(accoutError, index) in profileErrorMessage['account']"
            :key="index"
            >{{ accoutError }}</span
          >
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="d-flex justify-content-between">
        <b-button
          variant="outline-grey"
          class="px-4 py-2 mt-2 mb-3 border-2"
          @click="goToBefore()"
        >
          <i class="fa fa-arrow-left mr-3"></i>{{ $t('back') }}
        </b-button>
        <b-button
          variant="outline-primary"
          class="px-4 py-2 mt-2 mb-3 border-2 ml-auto"
          @click="goToNext()"
        >
          {{ $t('next') }}
          <i class="fa fa-arrow-right ml-1"></i>
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapState } from 'vuex'
import moment from 'moment'
import _ from 'lodash'
import IconButton from '@/shared/components/IconButton/IconButton'
export default {
  name: 'AddProfileWorkExperience',
  components: {
    IconButton,
  },
  props: {
    currentStep: {
      type: Number,
      default: 1,
    },
  },
  data() {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const maxDate = new Date(today)
    return {
      max: maxDate,
      initialWorkExperince: {
        job_title: '',
        job_description: '',
        job_category: null,
        from_date: '',
        from_dateAsOtherFormatter: '',
        to_date: '',
        to_dateAsOtherFormatter: '',
        is_current: false,
        company: '',
        location: '',
      },
      workExperiences: [],
      initialIndustryOptions: [
        { value: null, text: this.$t('please-select-industry-of-work') },
      ],
      industryOptions: [],
      companyNameList: [],
      companyList: [],
      resumeFile: null,
      resumeFileName: '',
    }
  },

  created() {},
  computed: {
    ...mapState({
      userId: state => state.register.userId,
      errorMessage: state => state.register.addWorkExperienceError,
      profileErrorMessage: state => state.register.addJobSeekerProfileError,
    }),
  },
  watch: {
    workExperiences: {
      handler(val) {
        val.forEach(experience => {
          if (experience.is_current && experience.to_date) {
            experience.to_date = null
            experience.to_dateAsOtherFormatter = null
          }
        })
      },
      deep: true,
    },
    resumeFile: function(newVal) {
      if (newVal && newVal.name) {
        this.resumeFileName = newVal.name
      }
    },
  },
  methods: {
    validateState(ref) {
      if (
        this.veeFields[ref] &&
        (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      ) {
        return !this.veeErrors.has(ref)
      }
      return null
    },
    async loadCompanyNameList() {
      this.companyList = await this.$store.dispatch(
        'companyprofile/getCompanyNameList'
      )
      if (this.companyList && this.companyList.length) {
        this.companyNameList = this.companyList.map(company => company.name)
      }
    },
    async loadIndustryList() {
      const categoryList = await this.$store.dispatch('catalog/loadJobCategory')
      if (categoryList && categoryList.length) {
        this.industryOptions = this.initialIndustryOptions.concat(
          categoryList.map(category => ({
            value: category.code,
            text: category.name,
          }))
        )
      } else {
        this.initialIndustryOptions = this.initialIndustryOptions
      }
    },

    addWorkExperience() {
      this.workExperiences.push({
        job_title: '',
        job_description: '',
        job_category: null,
        from_date: '',
        to_date: '',
        is_current: false,
        company: '',
      })
    },
    goToBefore() {
      this.$emit('go-to-previous-step', this.currentStep)
    },
    async goToNext() {
      this.$validator.validateAll().then(async result => {
        if (!result) {
          return
        }
        /* eslint-disable no-unused-vars */
        if (this.workExperiences && this.workExperiences.length) {
          let experiences = this.workExperiences.map(experience => {
            let workExperience = {
              account: this.userId,
              job_title: experience.job_title,
              job_description: experience.job_description,
              from_date: moment(experience.from_date).format('YYYY-MM-DD'),
              to_date: moment(experience.to_date).format('YYYY-MM-DD'),
              is_current: experience.is_current,
              company: experience.company_name,
              industry: experience.job_category,
              location: experience.location,
            }
            if (workExperience.is_current) {
              delete workExperience.to_date
            }
            return workExperience
          })

          let isSuccess = false
          if (this.resumeFile) {
            const result = await this.$store.dispatch('register/uploadResume', {
              resume: this.resumeFile,
              account: this.userId,
            })
            if (result) {
              isSuccess = true
            } else {
              isSuccess = false
            }
          }

          await Promise.all(
            experiences.map(async (experience, index) => {
              const result = await this.$store.dispatch(
                'register/addWorkExperience',
                { ...experience, index }
              )
              if (result) {
                isSuccess = true
              } else {
                isSuccess = false
              }
            })
          )

          if (isSuccess) {
            this.$emit('go-to-next-step', this.currentStep)
          }
        }
      })
    },
    initiateWorkExperience() {
      this.workExperiences.push(this.initialWorkExperince)
    },
    changeFromDate(index) {
      if (
        this.workExperiences[index].from_dateAsOtherFormatter !==
        moment(this.workExperiences[index].from_date).format('MM-DD-YYYY')
      ) {
        this.workExperiences[index].from_dateAsOtherFormatter = moment(
          this.workExperiences[index].from_date
        ).format('MM-DD-YYYY')
      }
    },
    changeFromDateOtherFormatter(index) {
      if (
        this.workExperiences[index].from_date !==
        moment(this.workExperiences[index].from_dateAsOtherFormatter).format(
          'YYYY-MM-DD'
        )
      ) {
        this.workExperiences[index].from_date = moment(
          this.workExperiences[index].from_dateAsOtherFormatter
        ).format('YYYY-MM-DD')
      }
    },
    changeToDate(index) {
      if (
        this.workExperiences[index].to_dateAsOtherFormatter !==
        moment(this.workExperiences[index].to_date).format('MM-DD-YYYY')
      ) {
        this.workExperiences[index].to_dateAsOtherFormatter = moment(
          this.workExperiences[index].to_date
        ).format('MM-DD-YYYY')
      }
    },
    changeToDateOtherFormatter(index) {
      if (
        this.workExperiences[index].to_date !==
        moment(this.workExperiences[index].to_dateAsOtherFormatter).format(
          'YYYY-MM-DD'
        )
      ) {
        this.workExperiences[index].to_date = moment(
          this.workExperiences[index].to_dateAsOtherFormatter
        ).format('YYYY-MM-DD')
      }
    },
    removeWorkExperience(key) {
      let experiences = this.workExperiences
      this.workExperiences = _.filter(
        experiences,
        (experience, index) => index !== key
      )
    },
  },

  mounted() {
    this.loadCompanyNameList()
    this.loadIndustryList()
    this.initiateWorkExperience()
  },
}
</script>

<style lang="scss" scoped></style>
