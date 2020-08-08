<template>
  <div class="top-header">
    <b-navbar toggleable="lg" fixed="top" class="header bg-white">
      <div class="navbar top-header-container">
        <b-navbar-brand href="/">
          <img
            src="@/assets/emblem.png"
            alt="logo"
            style="height:48px"
            class="brand"
          />
        </b-navbar-brand>
        <b-navbar-nav class="ml-auto">
          <div class="d-flex justify-content-center align-items-center">
            <b-button
              variant="outline-primary"
              class="px-4 py-2"
              v-if="!isAddingProfile"
              @click="goSignUp"
              >{{ $t(signInButtonText) }}</b-button
            >
            <SwitchLanguage />
          </div>
        </b-navbar-nav>
      </div>
    </b-navbar>
  </div>
</template>
<script>
import SwitchLanguage from '@/shared/components/SwitchLanguage'
import { mapState } from 'vuex'
export default {
  name: 'AuthHeader',
  components: {
    SwitchLanguage,
  },
  data() {
    return {
      signInButtonText: 'signup',
    }
  },
  computed: {
    ...mapState({
      isAddingProfile: state => state.register.userId,
    }),
  },
  mounted() {
    if (this.$router.currentRoute.name === 'Login') {
      this.signInButtonText = 'signup'
    } else if (this.$router.currentRoute.name === 'Register') {
      this.signInButtonText = 'login'
    }
  },
  watch: {
    $route(to) {
      if (to.name === 'Register') {
        this.signInButtonText = 'login'
      } else if (to.name === 'Login') {
        this.signInButtonText = 'signup'
      }
    },
  },
  methods: {
    goSignUp() {
      if (this.$router.currentRoute.name == 'Register') {
        this.$router.push('/auth/login')
      } else if (this.$router.currentRoute.name == 'Login') {
        this.$router.push('/auth/register')
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.top-header {
  height: 93px;
  .top-header-container {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    .brand {
      height: 48px;
      width: 164px;
    }
  }
}
</style>
