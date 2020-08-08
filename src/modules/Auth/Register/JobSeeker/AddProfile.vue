<template>
  <b-container fluid>
    <b-row class="mt-4 pt-4">
      <b-col class="text-left mt-4 pt-4">
        <img :src="backgroundImage" />
      </b-col>
      <b-col>
        <div class="row pt-md-5 pt-sm-3 py-3">
          <StepperHeader
            :steps="steps"
            :current-step="currentStep"
          ></StepperHeader>
        </div>
        <div class="row bg-white p-md-4 pt-md-5 p-sm-3 p-3">
          <div class="col-sm-12">
            <AddProfilePersonalData
              v-show="currentStep === 0"
              :current-step="currentStep"
              @go-to-next-step="goToNext"
            />
            <AddProfileWorkExperience
              v-show="currentStep === 1"
              :current-step="currentStep"
              @go-to-next-step="goToNext"
              @go-to-previous-step="goToBefore"
            />
            <AddProfileEducation
              v-show="currentStep === 2"
              :current-step="currentStep"
              @go-to-previous-step="goToBefore"
            />
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapState } from 'vuex'
import StepperHeader from '../../../../shared/components/Stepper/StepperHeader'
import AddProfilePersonalData from './AddProfilePersonalData'
import AddProfileWorkExperience from './AddProfileWorkExperience'
import AddProfileEducation from './AddProfileEducation'
export default {
  name: 'AddProfile',
  components: {
    StepperHeader,
    AddProfilePersonalData,
    AddProfileWorkExperience,
    AddProfileEducation,
  },
  data() {
    return {
      steps: [
        {
          id: 0,
          stepLabel: 'Step 1',
          backgroundImage: require('@/assets/background-job-seeker-add-personal.png'),
        },
        {
          id: 1,
          stepLabel: 'Step 2',
          backgroundImage: require('@/assets/background-job-seeker-add-work-experience.png'),
        },
        {
          id: 2,
          stepLabel: 'Step 3',
          backgroundImage: require('@/assets/background-job-seeker-add-work-education.png'),
        },
      ],
      currentStep: 0,
      backgroundImage: require('@/assets/background-job-seeker-add-personal.png'),
    }
  },
  created() {},
  computed: {
    ...mapState({
      userId: state => state.register.userId,
      errorMesssage: state => state.register.addBusinessProfileError,
    }),
    errorMessage() {
      let errorData = this.$store.getters['register/errorMessage']
      return errorData ? errorData : false
    },
  },
  watch: {
    currentStep: function(newVal) {
      this.backgroundImage = this.steps[newVal].backgroundImage
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

    goToNext(currentStep) {
      this.currentStep = currentStep + 1
    },
    goToBefore(currentStep) {
      this.currentStep = currentStep - 1
    },
  },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch('register/clearRegistrationStatus')
    next()
  },
  mounted() {
    if (!this.userId) {
      this.$router
        .push('/auth/register')
        .then(failure => {
          if (failure) {
            failure instanceof Error
            failure.type
          }
        })
        .catch(() => {})
      return
    }
  },
}
</script>

<style lang="scss" scoped></style>
