import actions from './register.actions'
import mutations from './register.mutations'
import getters from './register.getters'

const state = {
  activationCompleted: false,
  activationError: false,
  activationLoading: false,
  registrationCompleted: false,
  registrationError: false,
  registrationLoading: false,
  isAddingBusinessProfile: false,
  addBusinessProfileError: '',
  isAddingJobSeekerProfile: false,
  isAddedJobSeekerProfile: false,
  addJobSeekerProfileError: '',
  isAddingWorkExperience: false,
  addWorkExperienceError: [],
  isAddingEducation: false,
  addEducationHistoryError: [],
  isAddingLanguage: false,
  addLanguageError: [],
  errorMessage: null,
  processing: false,
  userId: null,
  isStudent: false,
  currentRoleId: 0,
  roleList: [
    {
      id: 0,
      name: 'Job seeker',
      imageUrl: require('@/assets/job-seeker-panel.png'),
      routing: '/auth/add-profile',
    },
    {
      id: 1,
      name: 'Recruiter',
      imageUrl: require('@/assets/recruiter-panel.png'),
      routing: '/auth/business-profile',
    },
  ],
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}
