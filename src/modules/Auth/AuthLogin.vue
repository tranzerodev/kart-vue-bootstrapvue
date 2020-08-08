<template>
  <div>
    <div class="main-content">
      <div class="main-content-container">
        <!-- Sign in -->
        <template v-if="sign == 'SIGN IN'">
          <b-card class="login-panel">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-body>
                  <p class="titul">Hello again! <br />We were missing you</p>
                  <b-card-img :src="imgUrl" class="rounded-0"></b-card-img>
                </b-card-body>
              </b-col>
              <b-col md="6">
                <b-card-body class="sign-in-panel">
                  <div class="sign-in-panel-items">
                    <form>
                      <div class="sign-in-panel-items-title">
                        Sign in
                      </div>
                      <b-card-text>
                        <b-form-input
                          placeholder="Username"
                          v-model="inputs.username"
                        ></b-form-input>
                      </b-card-text>
                      <b-card-text>
                        <b-form-input
                          placeholder="Password"
                          v-model="inputs.password"
                          v-on:keyup.enter="validFunction()"
                          name="password"
                          type="password"
                          v-validate="'required'"
                          autocomplete="on"
                        ></b-form-input>
                        <div
                          v-if="(valid && veeErrors.has('password')) || error"
                          class="invalid-feedback"
                        >
                          <img
                            src="../../assets/images/info-icon.png"
                            style="margin-right: 10px;"
                          />
                          {{
                            veeErrors.first('password')
                              ? veeErrors.first('password')
                              : error
                          }}
                        </div>
                      </b-card-text>
                      <b-card-text class="sign-in-panel-items-forgot">
                        <a
                          href="/auth/login/resetPassword"
                          style="text-decoration: none; color: black"
                        >
                          Forgot a password?</a
                        >
                      </b-card-text>
                    </form>
                    <div class="sign-in-panel-items-login">
                      <button
                        class="btn btn-primary"
                        @click="validFunction()"
                        id="login-button"
                        :disabled="processing"
                      >
                        Login
                      </button>
                    </div>
                    <div class="forgot-password">
                      <p class="text-light-grey">
                        Don’t have
                        <strong>
                          <a
                            href="/auth/register"
                            style="text-decoration: none; color: black"
                            >an account?</a
                          >
                        </strong>
                      </p>
                    </div>
                  </div>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </template>
        <!-- for Reset a password -->
        <template v-if="sign == 'resetPassword'">
          <b-card class="login-panel">
            <b-card-body class="sign-in-panel reset-panel">
              <div class="sign-in-panel-items">
                <div class="sign-in-panel-items-title">
                  Reset a password
                </div>
                <b-card-text>
                  <b-form-input
                    placeholder="Email"
                    v-model="email"
                    v-validate="'required'"
                    name="email"
                  ></b-form-input>
                  <div
                    v-if="veeErrors.has('email') || error"
                    class="invalid-feedback"
                  >
                    {{
                      veeErrors.first('email')
                        ? veeErrors.first('email')
                        : error
                    }}
                  </div>
                </b-card-text>

                <b-card-text class="sign-in-panel-items-forgot">
                  We will send a password reset instruction email with a link to
                  reset your password
                </b-card-text>
                <div class="sign-in-panel-items-login">
                  <a href="/auth/login">
                    <button
                      class="btn btn-white float-left"
                      @click="sign = 'SIGN IN'"
                      id="login-button"
                      :disabled="processing"
                    >
                      <span> <i class="fa fa-arrow-left"></i> Back</span>
                    </button>
                  </a>
                  <button
                    class="btn btn-blue"
                    @click="routeToResetPassword()"
                    id="login-button"
                    :disabled="processing"
                  >
                    <span>next <i class="fa fa-arrow-right"></i></span>
                  </button>
                </div>
              </div>
            </b-card-body>
          </b-card>
        </template>
        <!-- Send Message Reset a password -->
        <template v-if="sign == 'resetSendMessage'">
          <b-card class="login-panel">
            <b-card-body class="sign-in-panel reset-panel">
              <div class="sign-in-panel-items ">
                <div class="sign-in-panel-items-title centered">
                  {{ error }}The password reset instruction was sent to your
                  email. Please check in
                </div>
                <div class="centered">
                  <button
                    class="btn btn-white"
                    @click="sign = 'resetPassword'"
                    id="login-button"
                    :disabled="processing"
                  >
                    <span> <i class="fa fa-arrow-left"></i> Back</span>
                  </button>
                </div>
              </div>
            </b-card-body>
          </b-card>
        </template>
        <!-- for Change_Password -->
        <template v-if="sign == 'Change_Password'">
          <b-card class="login-panel">
            <b-card-body class="sign-in-panel reset-panel height-358">
              <div class="sign-in-panel-items">
                <form>
                  <div class="sign-in-panel-items-title">
                    Change password
                  </div>
                  <b-card-text>
                    <b-form-input
                      placeholder="New password"
                      v-model="inputs.new_password"
                      type="password"
                      name="password"
                      v-validate="'required'"
                      autocomplete="on"
                    ></b-form-input>
                  </b-card-text>
                  <b-card-text>
                    <b-form-input
                      placeholder="Retype password"
                      v-model="inputs.re_new_password"
                      type="password"
                      v-validate="'required'"
                      name="re_new_password"
                      autocomplete="on"
                    ></b-form-input>
                    <div
                      v-if="veeErrors.has('re_new_password') || error"
                      class="invalid-feedback"
                    >
                      {{
                        veeErrors.first('re_new_password')
                          ? veeErrors.first('re_new_password')
                          : error
                      }}
                    </div>
                  </b-card-text>
                </form>
                <div class="sign-in-panel-items-login">
                  <button
                    class="btn btn-primary"
                    @click="passwordResetConfirm()"
                    id="login-button"
                  >
                    Change
                  </button>
                </div>
              </div>
            </b-card-body>
          </b-card>
        </template>
        <!-- /* confirm of reset */ -->
        <template v-if="sign == 'ConfirmOfReset'">
          <b-card class="login-panel">
            <b-card-body class="sign-in-panel reset-panel">
              <div class="sign-in-panel-items ">
                <div class="sign-in-panel-items-title centered">
                  Great! Your password has been changed
                </div>
                <div class="centered">
                  <button
                    class="btn btn-primary"
                    @click="sign = 'SIGN IN'"
                    id="login-button"
                    :disabled="processing"
                  >
                    sign in
                  </button>
                </div>
              </div>
            </b-card-body>
          </b-card>
        </template>
        <template id="modal-template">
          <div class="modal" v-show="show">
            <div class="modal-wrapper">
              <div class="modal-container">
                <slidercaptcha @onSuccess1="login" />
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Slidercaptcha from '@/components/Slidercaptcha'
export default {
  components: {
    Slidercaptcha,
  },
  data() {
    return {
      inputs: {
        username: '',
        password: '',
        rememberMe: false,
        new_password: '',
        re_new_password: '',
      },
      valid: false,
      show: false,
      sign: 'SIGN IN',
      email: null,
      uid: null,
      token: null,
    }
  },
  computed: {
    error() {
      return this.$store.getters['auth/getErrorMsg']
    },
    processing() {
      return this.$store.getters['auth/getProcessing']
    },
    isUserAuthenticated() {
      return this.$store.getters['auth/isLoggedIn']
    },
    imgUrl() {
      return require('@/assets/layer.svg')
    },
  },
  watch: {
    isUserAuthenticated(val) {
      if (val === true) this.$router.push('/dashboard')
    },
  },
  methods: {
    routeToResetPassword: async function() {
      if (this.email != '') {
        await this.$store.dispatch('auth/passwordReset', { email: this.email })
        if (this.error == '' || this.error == null) {
          window.location = '/auth/login/resetSendMessage'
        }
      }
    },
    validFunction() {
      if (this.inputs.username != '' && this.inputs.password != '') {
        this.valid = true
        this.$validator.validate().then(valid => {
          if (valid) {
            this.show = true
          }
        })
      } else {
        this.$store.commit('auth/auth_error', {
          detail: 'Password is required.',
        })
      }
    },
    login() {
      this.show = false
      var OSName = 'Unknown OS'
      if (navigator.appVersion.indexOf('Win') != -1) OSName = 'Windows'
      else if (navigator.appVersion.indexOf('Mac') != -1) OSName = 'MacOS'
      else if (navigator.appVersion.indexOf('X11') != -1) OSName = 'UNIX'
      else if (navigator.appVersion.indexOf('Linux') != -1) OSName = 'Linux'
      this.$store.dispatch('auth/login', {
        username: this.inputs.username,
        password: this.inputs.password,
        device: OSName,
      })
    },
    async passwordResetConfirm() {
      if (this.inputs.new_password != this.inputs.re_new_password) {
        this.$store.commit('auth/auth_error', {
          detail: 'Password doesn’t match',
        })
      } else {
        await this.$store.dispatch('auth/passwordResetConfirm', {
          uid: this.uid,
          token: this.token,
          new_password: this.inputs.new_password,
          re_new_password: this.inputs.re_new_password,
        })
        if (this.error == '' || this.error == null) {
          window.location = '/auth/login/ConfirmOfReset'
        }
      }
    },
    goSignUp() {
      window.location = '/auth/register'
    },
  },
  created() {
    if (this.isUserAuthenticated) {
      this.$router.push('/dashboard')
    }
    switch (this.$router.currentRoute.name) {
      case 'password-reset-confirm':
        this.uid = this.$route.params.uid
        this.token = this.$route.params.token
        this.sign = 'Change_Password'
        break
      case 'Login':
        this.sign = 'SIGN IN'
        break
      case 'resetPassword':
        this.sign = this.$route.params.sign
        break
      default:
        this.sign = this.$router.currentRoute.name
    }
    /*   if (this.$route.params.sign == undefined) {
      this.sign = 'SIGN IN'
    } else {
      this.sign = this.$route.params.sign
    } */

    /*     if (this.$route.params.uid != undefined) {
      this.uid = this.$route.params.uid
      this.token = this.$route.params.token
      this.sign = 'Change_Password'
    } */
  },
}
</script>

<style lang="scss" scoped>
.body {
  background: #f4f4fc;
  font-family: Acumin Pro;
  font-style: normal;
  font-weight: 600;
}

.navbar {
  padding-left: 0;
  padding-right: 0;
}
.top-header {
  height: 93px;
  .top-header-container {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
  }

  .signup {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    button {
      min-width: 120px;
      height: 40px;
      border: 2px solid #3cb1e5;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      color: #3cb1e5;
      background-color: transparent;
    }
  }
}
.main-content {
  .main-content-container {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    padding-top: 100px;
  }
  .sign-in-panel {
    background: #ffffff;
    border-radius: 4px;
    margin-top: 40px;
  }
  .reset-panel {
    max-width: 570px;
    width: 100%;
    margin: 0 auto;
    height: 312px;
  }
  .sign-in-panel-items {
    margin-left: 40px;
    width: 90%;
  }
  .sign-in-panel-items-title {
    font-size: 32px;
    /* or 225% */

    display: flex;
    align-items: center;

    color: #404040;
    padding-top: 48px;
    padding-bottom: 32px;
  }
  .sign-in-panel-items-forgot {
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    color: #4a4a4a;
    margin-top: -10px;
  }
  .titul {
    font-weight: 600;
    font-size: 48px;
    line-height: 65px;
    color: #404040;
  }
}

.btn {
  width: 150px;
  background: #3cb1e5 !important;
  border-radius: 4px;
  width: 170px;
  height: 48px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #ffffff;
}
.btn-white {
  background: #ffffff !important;
  border: 2px solid #888888;
  box-sizing: border-box;
  border-radius: 4px;
  color: #888888;
}
.btn-blue {
  background: #ffffff !important;
  border: 2px solid #3cb1e5;
  box-sizing: border-box;
  border-radius: 4px;
  color: #3cb1e5;
  float: right;
}
.card {
  background-color: transparent;
  border: none;
}
.navbar {
  background: #ffffff;
}
.card-body {
  padding-left: 0px;
  padding-top: 0px;
}
.card-img {
  width: 352px;
  height: 363px;
}
.form-control {
  background: #f4f4fc;
  border-radius: 4px;
  max-width: 41vw;
  height: 56px;
}
.sign-in-panel-items-login {
  text-align: center;
  margin-top: 40px;
}
.forgot-password {
  text-align: center;
  margin-top: 16px;
  font-size: 14px;
  line-height: 17px;
  color: #888888;
}
.centered {
  text-align: center;
}
.height-312 {
  height: 312px;
}
.height-358 {
  height: 398px !important;
}
.float-left {
  float: left;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 320px;
  border-radius: 5px;
  transition: all 0.3s ease;
  margin: 0 auto;
  height: 296px;
}
.invalid-feedback {
  display: block;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 320px;
  border-radius: 5px;
  transition: all 0.3s ease;
  margin: 0 auto;
  height: 296px;
}

.btn {
  width: 150px;
}
</style>
