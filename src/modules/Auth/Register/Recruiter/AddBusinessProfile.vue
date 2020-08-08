<template>
  <b-container fluid>
    <b-row class="mt-4 pt-4">
      <b-col class="text-left px-sm-5 pt-5 pt-5" cols="6" md="6" sm="12">
        <b-row class="px-sm-5">
          <img :src="backgroundImgUrl" style="width: 100%" />
        </b-row>
      </b-col>
      <b-col cols="6" sm="12" md="6">
        <b-card class="px-3 pt-5 pb-1" border-variant="light" no-body>
          <b-container>
            <b-form @submit.prevent="submit">
              <b-row>
                <b-col cols="12" class="mb-4">
                  <span class="h3 font-weight-bold col-sm-12 mb-4 pl-0">{{
                    $t('create-your-business-profile')
                  }}</span>
                </b-col>
                <b-col cols="12">
                  <b-form-group class="pl-0 mb-3">
                    <b-form-input
                      v-model="inputs.company_name"
                      id="company_name"
                      class="col-sm-12 mat-form-control auto-complete-control"
                      name="company_name"
                      :placeholder="$t('company-name')"
                      aria-describedby="company_name"
                      v-validate="{ required: true }"
                      :state="validateState('company_name')"
                      :data-vv-as="$t('company-name')"
                      list="company-list-id"
                      :class="{
                        'is-invalid':
                          typeof errorMessage === 'object'
                            ? errorMessage['company_name']
                            : false,
                      }"
                    />
                    <b-form-datalist
                      id="company-list-id"
                      :options="companyNameList"
                    ></b-form-datalist>
                    <b-form-invalid-feedback id="input-1-live-feedback">{{
                      veeErrors.first('company_name')
                    }}</b-form-invalid-feedback>
                    <div
                      v-if="
                        typeof errorMessage === 'object'
                          ? errorMessage['company_name']
                          : false
                      "
                      class="invalid-feedback"
                    >
                      {{
                        typeof errorMessage === 'object'
                          ? errorMessage['company_name'].toString()
                          : false
                      }}
                    </div>
                  </b-form-group>
                </b-col>

                <b-col cols="12">
                  <b-form-group>
                    <b-form-input
                      v-model="inputs.job_title"
                      id="job_title"
                      class="mat-form-control"
                      name="job_title"
                      :placeholder="$t('job-title')"
                      :aria-describedby="$t('job-title')"
                      v-validate="{ required: true }"
                      :state="validateState('job_title')"
                      :data-vv-as="$t('job-title')"
                      :class="{
                        'is-invalid':
                          typeof errorMessage === 'object'
                            ? errorMessage['job_title']
                            : false,
                      }"
                    />
                    <b-form-invalid-feedback id="input-1-live-feedback">{{
                      veeErrors.first('job_title')
                    }}</b-form-invalid-feedback>
                    <div
                      v-if="
                        typeof errorMessage === 'object'
                          ? errorMessage['job_title']
                          : false
                      "
                      class="invalid-feedback"
                    >
                      {{
                        typeof errorMessage === 'object'
                          ? errorMessage['job_title'].toString()
                          : ''
                      }}
                    </div>
                  </b-form-group>
                </b-col>

                <b-col cols="12">
                  <b-form-group id="industry-form-group">
                    <b-form-select
                      id="industry"
                      name="industry"
                      v-model="inputs.industry"
                      v-validate="{ required: true }"
                      :options="industryOptions"
                      :state="validateState('industry')"
                      aria-describedby="industry-live-feedback"
                      :data-vv-as="$t('industry')"
                      :placeholder="$t('industry')"
                      class="mat-form-control"
                      :class="{
                        'is-placeholder': !inputs.industry,
                        'is-invalid':
                          typeof errorMessage === 'object'
                            ? errorMessage['industry']
                            : false,
                      }"
                    ></b-form-select>
                    <b-form-invalid-feedback id="industry-live-feedback">{{
                      veeErrors.first('industry')
                    }}</b-form-invalid-feedback>
                    <div
                      v-if="
                        typeof errorMessage === 'object'
                          ? errorMessage['industry']
                          : false
                      "
                      class="invalid-feedback"
                    >
                      {{
                        typeof errorMessage === 'object'
                          ? errorMessage['industry'].toString()
                          : false
                      }}
                    </div>
                  </b-form-group>
                </b-col>

                <b-col cols="12">
                  <b-form-group id="company-size-form-group">
                    <b-form-select
                      id="company-size"
                      name="company-size"
                      v-model="inputs.company_size"
                      v-validate="{ required: true }"
                      :options="companySizeOptions"
                      :state="validateState('company-size')"
                      aria-describedby="company-size-live-feedback"
                      :data-vv-as="$t('company-size')"
                      :placeholder="$t('company-size')"
                      class="mat-form-control"
                      :class="{
                        'is-placeholder': !inputs.company_size,
                        'is-invalid':
                          typeof errorMessage === 'object'
                            ? errorMessage['company-size']
                            : false,
                      }"
                    ></b-form-select>
                    <b-form-invalid-feedback id="company-size-live-feedback">{{
                      veeErrors.first('company-size')
                    }}</b-form-invalid-feedback>
                    <div
                      v-if="
                        typeof errorMessage === 'object'
                          ? errorMessage['company-size']
                          : false
                      "
                      class="invalid-feedback"
                    >
                      {{
                        typeof errorMessage === 'object'
                          ? errorMessage['company_size'].toString()
                          : false
                      }}
                    </div>
                  </b-form-group>
                </b-col>

                <b-col cols="12">
                  <b-form-group>
                    <b-form-input
                      v-model="inputs.email"
                      id="email"
                      class="col-sm-12 mat-form-control"
                      name="email"
                      :placeholder="$t('email')"
                      aria-describedby="email"
                      v-validate="'required|email'"
                      :state="validateState('email')"
                      :data-vv-as="$t('email')"
                      :class="{
                        'is-invalid':
                          typeof errorMessage === 'object'
                            ? errorMessage['email']
                            : false,
                      }"
                    />
                    <b-form-invalid-feedback id="input-1-live-feedback">{{
                      veeErrors.first('email')
                    }}</b-form-invalid-feedback>
                    <div
                      v-if="
                        typeof errorMessage === 'object'
                          ? errorMessage['email']
                          : false
                      "
                      class="invalid-feedback"
                    >
                      {{
                        typeof errorMessage === 'object'
                          ? errorMessage['email'].toString()
                          : false
                      }}
                    </div>
                  </b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-form-group>
                    <b-form-input
                      v-model="inputs.website"
                      id="website"
                      class="col-sm-12 mat-form-control"
                      name="website"
                      :placeholder="$t('website')"
                      aria-describedby="website"
                      v-validate="{ required: false }"
                      :state="validateState('website')"
                      :data-vv-as="$t('website')"
                      :class="{
                        'is-invalid':
                          typeof errorMessage === 'object'
                            ? errorMessage['website']
                            : false,
                      }"
                    />
                    <b-form-invalid-feedback id="input-1-live-feedback">{{
                      veeErrors.first('website')
                    }}</b-form-invalid-feedback>
                    <div
                      v-if="
                        typeof errorMessage === 'object'
                          ? errorMessage['website']
                          : false
                      "
                      class="invalid-feedback"
                    >
                      {{
                        typeof errorMessage === 'object'
                          ? errorMessage['website'].toString()
                          : false
                      }}
                    </div>
                  </b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-form-group>
                    <b-form-input
                      v-model="inputs.tagline"
                      id="tagline"
                      class="col-sm-12 mat-form-control"
                      name="tagline"
                      :placeholder="$t('tagline')"
                      aria-describedby="tagline"
                      v-validate="{ required: false }"
                      :state="validateState('tagline')"
                      :data-vv-as="$t('tagline')"
                      :class="{
                        'is-invalid':
                          typeof errorMessage === 'object'
                            ? errorMessage['tagline']
                            : false,
                      }"
                    />
                    <b-form-invalid-feedback id="input-1-live-feedback">{{
                      veeErrors.first('tagline')
                    }}</b-form-invalid-feedback>
                    <div
                      v-if="
                        typeof errorMessage === 'object'
                          ? errorMessage['tagline']
                          : false
                      "
                      class="invalid-feedback"
                    >
                      {{
                        typeof errorMessage === 'object'
                          ? errorMessage['tagline'].toString()
                          : false
                      }}
                    </div>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form>
            <b-row
              class="d-flex justify-content-center"
              v-show="typeof errorMessage === 'string'"
            >
              <span class="invlaid-feedback text-danger">
                {{ errorMessage }}
              </span>
            </b-row>
            <b-row>
              <div class="col-sm-12 text-center">
                <b-button
                  variant="primary"
                  class="px-5 py-2 mt-2 mb-3"
                  :disabled="registrationLoading"
                  @click="addBusinessProfile(inputs)"
                  >CREATE</b-button
                >
              </div>
            </b-row>
          </b-container>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import DialogMixin from '../../../../shared/mixins/ModalHandler'
import { mapState } from 'vuex'
export default {
  name: 'AddBusinessProfile',
  mixins: [DialogMixin],
  data() {
    return {
      backgroundImgUrl: require('@/assets/recruiter-business-profile.png'),
      inputs: {
        company_name: null,
        job_title: null,
        industry: null,
        company_size: null,
        email: null,
        website: null,
        tagline: null,
      },
      initialIndustryOptions: [
        { value: null, text: this.$t('please-select-industry-of-work') },
      ],
      industryOptions: [],
      companySizeOptions: [
        { value: null, text: this.$t('company-size') },
        { value: '10', text: '10' },
        { value: '50', text: '50' },
        { value: '100', text: '100' },
        { value: '200', text: '200' },
        { value: '500', text: '500' },
        { value: '1000', text: '1000' },
      ],
      companyNameList: [],
      companyList: [],
    }
  },
  computed: {
    ...mapState({
      userId: state => state.register.userId,
      errorMessage: state =>
        state.register.addBusinessProfileError
          ? state.register.addBusinessProfileError
          : '',
    }),
    registrationLoading() {
      return this.$store.getters['register/registrationLoading']
    },
    registrationError() {
      return this.$store.getters['register/registrationError']
    },
  },
  watch: {},
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

    addBusinessProfile() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return
        }

        let businessProfile = {
          account: this.userId,
          job_title: this.inputs.job_title,
          company_name: this.inputs.company_name,
          category: this.inputs.category,
          metadata: {
            website: this.inputs.website,
            tagline: this.inputs.tagline,
            company_size: this.inputs.company_size,
            work_email: this.inputs.email,
          },
        }

        let currentCompany = this.companyList.find(
          company => company.name === this.inputs.company_name
        )
        if (currentCompany) {
          delete businessProfile.company_name
          businessProfile.company = currentCompany.id
        }

        this.$store
          .dispatch('register/createBusinessProfile', businessProfile)
          .then(async result => {
            if (result) {
              await this.showConfirmModal(
                this.$t('congs-profile-creation'),
                this.$t('okay-upper')
              )

              if (this.confirmResult) {
                this.$router
                  .push('/dashboard')
                  .then(failure => {
                    if (failure) {
                      failure instanceof Error
                      failure.type
                    }
                  })
                  .catch(() => {})
              }
            }
          })
      })
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
  },
  mounted() {
    this.industryOptions = this.initialIndustryOptions
    this.loadCompanyNameList()
    this.loadIndustryList()
  },
}
</script>
