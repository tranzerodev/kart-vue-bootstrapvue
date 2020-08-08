<template>
  <div class="Header">
    <b-navbar toggleable="lg">
      <!-- <b-navbar-brand href="/">
        <img src="../../../assets/emblem.png" alt="logo" />
      </b-navbar-brand> -->
      <!-- <b-collapse> -->
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form @submit.stop.prevent="searchCandidateOnDashboard()">
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <img src="../../../assets/search-icon.svg" alt="icon" />
              </div>
            </div>
            <b-input
              type="text"
              placeholder="Search for actions or people"
              class="form-control"
              v-model="searchInput"
            />
          </div>
          <!-- <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
        </b-nav-form>
        <b-nav-item
          href="#"
          right
          class="ml-2 d-flex align-items-center"
          @click="goToPremium"
          v-if="checkPremium"
        >
          <i>
            <img src="@/assets/images/monarchy.svg" />
          </i>
        </b-nav-item>
        <b-nav-item href="#" right class="d-flex align-items-center">
          <i class="fa fa-lg fa-comments" aria-hidden="true"></i>
          <i
            class="fa fa-circle notification"
            aria-hidden="true"
            v-show="hasMessage"
          ></i>
        </b-nav-item>

        <b-nav-item href="#" right class="d-flex align-items-center">
          <i class="fa fa-lg fa-bell" aria-hidden="true"></i>
          <i
            class="fa fa-circle notification"
            aria-hidden="true"
            v-show="hasNotification"
          ></i>
        </b-nav-item>

        <b-nav-item-dropdown right class="d-flex align-items-center">
          <!-- Using 'button-content' slot -->
          <template slot="button-content">
            <em>User</em>
          </template>
          <b-dropdown-item @click="goToProfile()">My Profile</b-dropdown-item>
          <b-dropdown-item @click="switchProfile()"
            >Switch profile</b-dropdown-item
          >
          <b-dropdown-item @click="goTojob()"
            >View Job Applications</b-dropdown-item
          >
          <b-dropdown-item @click="logout()">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>

        <SwitchLanguage />
      </b-navbar-nav>
      <!-- </b-collapse> -->
    </b-navbar>
    <div class="main-header" v-show="message">
      <h1>Hello, John D.</h1>
      <h6>Welcome to Hiring Platform</h6>
    </div>
  </div>
</template>
<script>
import SwitchLanguage from '@/shared/components/SwitchLanguage'
import DialogMixin from '@/shared/mixins/ModalHandler'
import { mapState } from 'vuex'
export default {
  mixins: [DialogMixin],
  components: {
    SwitchLanguage,
  },
  data() {
    return {
      hasMessage: false,
      hasNotification: true,
      searchInput: '',
    }
  },
  props: ['message'],
  computed: {
    ...mapState({
      user: state => state.auth.user,
    }),
    checkPremium: function() {
      if (this.user.currentType === 0 && !this.user.isJobSeekerPremium) {
        return true
      } else if (this.user.currentType === 1 && !this.user.isEmployerPremium) {
        return true
      } else return false
    },
  },
  watch: {
    user: {
      handler(newVal, oldVal) {
        if (newVal.email !== oldVal.email && oldVal) {
          let userId = localStorage.getItem('id')
          if (newVal.isJobSeeker) {
            this.$store.dispatch('candidates/getJobSeekerProfile', userId)
          }

          if (newVal.isEmployer) {
            this.$store.dispatch('candidates/getEmployerProfile', userId)
          }
        }
      },
      deep: true,
    },
  },
  async mounted() {
    let userId = localStorage.getItem('id')
    if (this.user.email) {
      if (this.user.isJobSeeker) {
        this.$store.dispatch('candidates/getJobSeekerProfile', userId)
      }
      if (this.user.isEmployer) {
        this.$store.dispatch('candidates/getEmployerProfile', userId)
      }
    }
  },

  methods: {
    logout: function() {
      this.$store.dispatch('auth/logout')
    },
    goToProfile: function() {
      let userId = localStorage.getItem('id')
      this.$router.push(`/candidates/${userId}`)
    },
    goTojob: () => {
      this.$router.push(`/job`)
    },
    async switchProfile() {
      if (this.user.currentType === 0) {
        let userType = this.$t('recruiter')
        await this.showConfirmModal(
          this.$t('profile-changed', { userType }),
          'Ok'
        )
        if (this.confirmResult) {
          this.$store.dispatch('auth/setUserType', 1)
        }
      } else {
        let userType = this.$t('job-seeker')
        await this.showConfirmModal(
          this.$t('profile-changed', { userType }),
          'Ok'
        )
        if (this.confirmResult) {
          this.$store.dispatch('auth/setUserType', 0)
        }
      }
    },
    goToPremium: function() {
      if (this.user.currentType === 0 && !this.user.isJobSeekerPremium) {
        this.$router.push(`/premium/summary/job-seeker`)
      } else if (this.user.currentType === 1 && !this.user.isEmployerPremium) {
        this.$router.push(`/premium/summary/recruiter`)
      }
    },
    searchCandidateOnDashboard() {
      if (this.$router.currentRoute.name === 'dashboard') {
        this.$store.dispatch('candidates/getCandidateList', this.searchInput)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
b-navbar {
  background-color: rgba(255, 255, 255, 0.9);
}
.navbar {
  padding-left: 0;
  padding-right: 0;
}

.Header {
  position: fixed;
  top: 0;
  width: calc(100% - 80px);
  margin-left: 80px;
  padding-left: 60px;
  padding-right: 60px;
  background: #d5f6ff;
  z-index: 1040;
  .main-header {
    min-height: 100px;
  }
}
.input-group-text {
  background: #ffffff;
  border: solid1px #ffffff;
}
input.form-control {
  border-left: none;
  color: #4d4f5c;
  width: 30vw;
}
.fa {
  color: #3cb1e5;
}
.notification {
  color: #ffc06a;
  border: solid 2px #ffffff;
  border-radius: 10px;
  transform: translate(-8px, -5px);
}
.fa-search {
  color: #5d5d5d;
}
.dropdown-item {
  div {
    width: 20px;
    margin-top: -5px;
    float: left;
  }
  .flag-label {
    margin-left: 20px;
    margin-top: 10px;
  }
}
</style>
