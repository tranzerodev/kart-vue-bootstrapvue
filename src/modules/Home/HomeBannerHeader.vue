<template>
  <div class="banner-header">
    <div class="logo">
      <a href="/"
        ><img src="../../assets/emblem.png" alt style="max-width: 18vw;" />
      </a>
    </div>
    <HomeBannerSearch />
    <div class="signup">
      <!-- <b-button variant="outline-light" @click="goLogin()">SIGN IN</b-button> -->
      <b-button variant="outline-light" @click="goLogin()">SIGN IN</b-button>
      <b-dropdown
        id="dropdown-1"
        text="EN"
        class="m-md-2"
        style=" height: 48px;"
        variant="outline-light"
      >
        <b-dropdown-item href="#" class="flag-select-item">
          <div>
            <country-flag country="usa" />
          </div>
          <span class="flag-label">EN</span>
        </b-dropdown-item>
        <b-dropdown-item href="#">
          <div>
            <country-flag country="rus" />
          </div>
          <span class="flag-label">RU</span>
        </b-dropdown-item>
        <b-dropdown-item href="#">
          <div>
            <country-flag country="uzb" />
          </div>
          <span class="flag-label">UZ</span>
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
import HomeBannerSearch from './HomeBannerSearch'
export default {
  components: {
    HomeBannerSearch,
  },
  methods: {
    goLogin() {
      this.$router.push('/auth/login')
    },
    goSignUp() {
      this.$router.push('/register')
    },
  },
}
</script>

<style lang="scss" scoped>
.banner-header {
  display: flex;
  justify-content: space-between;
  .logo {
    width: 240px;
  }
  .signup {
    width: 21%;
    display: flex; // justify-content: space-between;
    justify-content: flex-end;
    align-items: center;
    .btn {
      height: 48px;
      width: 108px;
    }
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
}
</style>
