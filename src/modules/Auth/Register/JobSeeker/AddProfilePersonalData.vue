<template>
  <b-container fluid class="p-0">
    <b-row class="mb-4">
      <b-col cols="12">
        <h4 class="font-weight-bold form-title">
          {{ $t('create-your-profile') }}
        </h4>
      </b-col>
    </b-row>
    <form @submit.prevent="submit">
      <b-row class="mb-3">
        <b-col cols="6">
          <b-form-group class="pl-0 mb-1">
            <b-input-group class="mat-date-picker">
              <b-form-input
                id="example-input"
                v-model="personalData.dateOfBirthOtherFormatter"
                type="text"
                class="mat-form-control"
                :placeholder="`${$t('date-of-birth')} (${$t('mm-dd-yyyy')})`"
                autocomplete="off"
                @change="changeDateOfBirthOtherFormatter"
                aria-describedby="dateOfBirth"
                v-validate="'required: true |date_format:MM-dd-yyyy'"
                :state="validateState('dateOfBirth')"
                :data-vv-as="$t('date-of-birth')"
                name="dateOfBirth"
                :class="{
                  'is-invalid':
                    typeof errorMessage === 'object' && errorMessage.metadata
                      ? errorMessage['metadata']['DOB']
                      : false,
                }"
              ></b-form-input>
              <b-input-group-append>
                <b-form-datepicker
                  id="example-datepicker"
                  class="mat-form-control py-2 pl-2 date-picker-button"
                  :max="max"
                  menu-class="date-popup"
                  v-model="personalData.dateOfBirth"
                  button-only
                  button-variant="transparent"
                  dropright
                  @input="changeDateOfBirth"
                  offset="10"
                  :date-format-options="{
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric',
                  }"
                ></b-form-datepicker>
              </b-input-group-append>
              <b-form-invalid-feedback id="input-1-live-feedback">{{
                veeErrors.first('dateOfBirth')
              }}</b-form-invalid-feedback>
              <div
                v-if="
                  typeof errorMessage === 'object' && errorMessage.metadata
                    ? errorMessage['metadata']['DOB']
                    : false
                "
                class="text-danger"
              >
                {{
                  typeof errorMessage === 'object' && errorMessage.metadata
                    ? errorMessage['metadata']['DOB'].toString()
                    : false
                }}
              </div>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group class="pl-0 mb-1">
            <b-form-select
              class="mat-form-control"
              v-model="personalData.gender"
              :options="genderOptions"
              placeholder="Gender"
              name="gender"
              v-validate="{ required: true }"
              :state="validateState('gender')"
              aria-describedby="gender-live-feedback"
              :data-vv-as="$t('gender')"
              :class="{
                'is-placeholder': !personalData.gender,
                'is-invalid':
                  typeof errorMessage === 'object' && errorMessage.metadata
                    ? errorMessage['metadata']['gender']
                    : false,
              }"
            ></b-form-select>
            <b-form-invalid-feedback id="gender-live-feedback">{{
              veeErrors.first('gender')
            }}</b-form-invalid-feedback>
            <div
              v-if="
                typeof errorMessage === 'object' && errorMessage.metadata
                  ? errorMessage['metadata']['gender']
                  : false
              "
              class="text-danger"
            >
              {{
                typeof errorMessage === 'object' && errorMessage.metadata
                  ? errorMessage['metadata']['gender'].toString()
                  : false
              }}
            </div>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="mb-3">
        <b-col cols="12">
          <b-form-select
            class="mat-form-control"
            v-model="personalData.country"
            :options="countryOptions"
            placeholder="Country"
            name="country"
            v-validate="{ required: true }"
            :state="validateState('country')"
            aria-describedby="country-live-feedback"
            :data-vv-as="$t('country')"
            :class="{
              'is-placeholder': !personalData.country,
              'is-invalid':
                typeof errorMessage === 'object'
                  ? errorMessage['country']
                  : false,
            }"
          ></b-form-select>
          <b-form-invalid-feedback id="country-live-feedback">{{
            veeErrors.first('country')
          }}</b-form-invalid-feedback>
          <div
            v-if="
              typeof errorMessage === 'object' ? errorMessage['country'] : false
            "
            class="invalid-feedback"
          >
            {{
              typeof errorMessage === 'object'
                ? errorMessage['country'].toString()
                : false
            }}
          </div>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col cols="12">
          <b-form-group>
            <b-form-input
              class="mat-form-control"
              v-model="personalData.city"
              :placeholder="$t('city')"
              name="city"
              aria-describedby="city"
              v-validate="{ required: true }"
              :state="validateState('city')"
              :data-vv-as="$t('city')"
              :class="{
                'is-invalid':
                  typeof errorMessage === 'object'
                    ? errorMessage['city']
                    : false,
              }"
            ></b-form-input>
            <b-form-invalid-feedback id="city">{{
              veeErrors.first('city')
            }}</b-form-invalid-feedback>
            <div
              v-if="
                typeof errorMessage === 'object' ? errorMessage['city'] : false
              "
              class="invalid-feedback"
            >
              {{
                typeof errorMessage === 'object'
                  ? errorMessage['city'].toString()
                  : ''
              }}
            </div>
          </b-form-group>
        </b-col>
      </b-row>
    </form>
    <b-row>
      <b-col>
        <span class="error" v-show="typeof errorMessage === 'string'">{{
          errorMessage
        }}</span>
        <div
          v-if="
            typeof errorMessage === 'object' ? errorMessage['account'] : false
          "
        >
          <span
            class="text-danger"
            v-for="(accoutError, index) in errorMessage['account']"
            :key="index"
            >{{ accoutError }}</span
          >
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="d-flex justify-content-between">
        <div class="custom-control custom-checkbox checkbox-lg form-control-lg">
          <input
            type="checkbox"
            class="custom-control-input"
            v-model="isStudent"
            id="customCheck"
          />
          <label class="custom-control-label pl-4 pt-2 h6" for="customCheck">
            {{ $t('i-am-a-student') }}
          </label>
        </div>
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
export default {
  name: 'AddProfilePersonalData',
  components: {},
  props: {
    currentStep: {
      type: Number,
      default: 0,
    },
  },
  data() {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const maxDate = new Date(today)
    return {
      max: maxDate,
      personalData: {
        dateOfBirth: '',
        gender: '',
        country: null,
        city: '',
        dateOfBirthOtherFormatter: '',
      },
      genderOptions: [
        { value: '', text: this.$t('please-select-gender') },
        { value: 'male', text: 'Male' },
        { value: 'female', text: 'Female' },
        { value: 'undisclosed', text: 'Undisclosed' },
        { value: 'non-binary', text: 'Non-binary' },
      ],
      initialCountryOptions: [
        { value: null, text: this.$t('please-select-country') },
      ],
      countryOptions: [],
      isStudent: false,
    }
  },

  created() {},
  computed: {
    ...mapState({
      userId: state => state.register.userId,
      errorMessage: state => state.register.addJobSeekerProfileError,
      isAddedProfile: state => state.register.isAddedJobSeekerProfile,
    }),
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
    async loadCountryList() {
      const countryList = await this.$store.dispatch('catalog/loadCountry')
      if (countryList && countryList.length) {
        this.countryOptions = this.initialCountryOptions.concat(
          countryList.map(country => ({
            value: country.code,
            text: country.name,
          }))
        )
      } else {
        this.countryOptions = this.initialCountryOptions
      }
    },
    goToNext() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return
        }
        /* eslint-disable no-unused-vars */
        let profile = {
          account: this.userId,
          metadata: {
            DOB: moment(this.personalData.dateOfBirth).format('YYYY-MM-DD'),
            gender: this.personalData.gender,
          },
          location: this.personalData.city,
          country: this.personalData.country,
        }

        if (this.isAddedProfile) {
          this.$store
            .dispatch('register/updateJobSeekerProfile', profile)
            .then(result => {
              if (result) {
                if (this.isStudent) {
                  this.$store.dispatch('register/setIsStudent', true)
                  this.$emit('go-to-next-step', this.currentStep + 1)
                } else {
                  this.$emit('go-to-next-step', this.currentStep)
                }
              }
            })
        } else {
          this.$store
            .dispatch('register/createJobSeekerProfile', profile)
            .then(result => {
              if (result) {
                if (this.isStudent) {
                  this.$store.dispatch('register/setIsStudent', true)
                  this.$emit('go-to-next-step', this.currentStep + 1)
                } else {
                  this.$emit('go-to-next-step', this.currentStep)
                }
              }
            })
        }
      })
    },
    loadGeolocation() {
      this.$store.dispatch('catalog/getGeolocation').then(result => {
        if (result) {
          this.personalData.city = result.city ? result.city : ''
          this.personalData.country = result.countryCode
            ? result.countryCode
            : ''
        }
      })
    },
    changeDateOfBirth() {
      if (
        this.personalData.dateOfBirthOtherFormatter !==
        moment(this.personalData.dateOfBirth).format('MM-DD-YYYY')
      ) {
        this.personalData.dateOfBirthOtherFormatter = moment(
          this.personalData.dateOfBirth
        ).format('MM-DD-YYYY')
      }
    },
    changeDateOfBirthOtherFormatter() {
      if (
        this.personalData.dateOfBirth !==
        moment(this.personalData.dateOfBirthOtherFormatter).format('YYYY-MM-DD')
      ) {
        this.personalData.dateOfBirth = moment(
          this.personalData.dateOfBirthOtherFormatter
        ).format('YYYY-MM-DD')
      }
    },
  },

  mounted() {
    this.loadCountryList()
    this.loadGeolocation()
  },
}
</script>

<style lang="scss" scoped></style>
