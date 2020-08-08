<template>
  <b-container fluid>
    <b-row class="mt-4 pt-4">
      <b-col class="text-left">
        <div class="mt-md-5 mt-sm-2">
          <p class="text-dark display-2 font-weight-bold">
            Create your account
          </p>
        </div>
        <div>
          <p class="text-light-grey">
            A comprehensive solution for job seekers and employers alike
          </p>
        </div>

        <img src="../../../assets/user-registration.png" />
      </b-col>
      <b-col>
        <b-card class="px-3 pt-5 pb-1" border-variant="light" no-body>
          <b-container>
            <b-form @submit.prevent="submit">
              <b-row>
                <b-col cols="12">
                  <h4 class="h2 font-weight-bold col-sm-12 mb-4 pl-0">
                    Sign up
                  </h4>
                </b-col>
                <b-col cols="6">
                  <b-form-group class="pl-0 mb-3">
                    <b-form-input
                      v-model="inputs.first_name"
                      id="first_name"
                      class="col-sm-12 mat-form-control"
                      name="first_name"
                      placeholder="First name"
                      aria-describedby="first_name"
                      v-validate="{ required: true }"
                      :state="validateState('first_name')"
                      data-vv-as="first_name"
                      :class="{
                        'is-invalid':
                          typeof errorMessage === 'object'
                            ? errorMessage['first_name']
                            : false,
                      }"
                    />
                    <b-form-invalid-feedback id="input-1-live-feedback">
                      {{ veeErrors.first('first_name') }}
                    </b-form-invalid-feedback>
                    <div
                      v-if="
                        typeof errorMessage === 'object'
                          ? errorMessage['first_name']
                          : false
                      "
                      class="invalid-feedback"
                    >
                      {{
                        typeof errorMessage === 'object'
                          ? errorMessage['first_name'].toString()
                          : false
                      }}
                    </div>
                  </b-form-group>
                </b-col>
                <b-col cols="6">
                  <b-form-group class="pl-0 mb-3">
                    <b-form-input
                      v-model="inputs.last_name"
                      id="last_name"
                      class="col-sm-12 mat-form-control"
                      name="last_name"
                      placeholder="Last name"
                      aria-describedby="last_name"
                      v-validate="{ required: true }"
                      :state="validateState('last_name')"
                      data-vv-as="last_name"
                      :class="{
                        'is-invalid':
                          typeof errorMessage === 'object'
                            ? errorMessage['last_name']
                            : false,
                      }"
                    />
                    <b-form-invalid-feedback id="input-1-live-feedback">
                      {{ veeErrors.first('last_name') }}
                    </b-form-invalid-feedback>
                    <div
                      v-if="
                        typeof errorMessage === 'object'
                          ? errorMessage['last_name']
                          : false
                      "
                      class="invalid-feedback"
                    >
                      {{
                        typeof errorMessage === 'object'
                          ? errorMessage['last_name'].toString()
                          : false
                      }}
                    </div>
                  </b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-form-group>
                    <b-form-input
                      v-model="inputs.phone"
                      id="phone"
                      class="col-12 mat-form-control"
                      name="phone"
                      placeholder="Phone"
                      aria-describedby="phone"
                      v-validate="{ required: true }"
                      :state="validateState('phone')"
                      data-vv-as="phone"
                      :class="{
                        'is-invalid':
                          typeof errorMessage === 'object'
                            ? errorMessage['phone']
                            : false,
                      }"
                    />
                    <b-form-invalid-feedback id="input-1-live-feedback">
                      {{ veeErrors.first('phone') }}
                    </b-form-invalid-feedback>
                    <div
                      v-if="
                        typeof errorMessage === 'object'
                          ? errorMessage['phone']
                          : false
                      "
                      class="invalid-feedback"
                    >
                      {{
                        typeof errorMessage === 'object'
                          ? errorMessage['phone'].toString()
                          : ''
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
                      placeholder="Email"
                      aria-describedby="email"
                      @keyup="keyupEmailHandler()"
                      v-validate="'required|email'"
                      :state="validateState('email')"
                      data-vv-as="email"
                      :class="{
                        'is-invalid':
                          typeof errorMessage === 'object'
                            ? errorMessage['email']
                            : false,
                      }"
                    />
                    <span class="text-light-grey small"
                      >Your email will be used as a username</span
                    >
                    <b-form-invalid-feedback id="input-1-live-feedback">
                      {{ veeErrors.first('email') }}
                    </b-form-invalid-feedback>
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
                      v-model="inputs.password"
                      id="password"
                      class="col-sm-12 mat-form-control"
                      name="password"
                      type="password"
                      placeholder="Password"
                      aria-describedby="password"
                      v-validate="{ required: true }"
                      :state="validateState('password')"
                      data-vv-as="password"
                      :class="{
                        'is-invalid':
                          typeof errorMessage === 'object'
                            ? errorMessage['password']
                            : false,
                      }"
                    />
                    <b-form-invalid-feedback id="input-1-live-feedback">
                      {{ veeErrors.first('password') }}
                    </b-form-invalid-feedback>
                    <div
                      v-if="
                        typeof errorMessage === 'object'
                          ? errorMessage['password']
                          : false
                      "
                      class="invalid-feedback"
                    >
                      {{
                        typeof errorMessage === 'object'
                          ? errorMessage['password'].toString()
                          : false
                      }}
                    </div>
                  </b-form-group>
                </b-col>
                <b-col cols="12">
                  <div class="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      v-model="isCheckedTOS"
                      id="customCheck"
                    />
                    <label class="custom-control-label pl-3" for="customCheck">
                      <a
                        href="#"
                        @click="openTOSWindow"
                        class="text-grey small"
                      >
                        By joining Caravel you agree to our
                        <strong>Terms & Conditions and Privacy Policy.</strong>
                      </a>
                    </label>
                  </div>
                </b-col>
              </b-row>
            </b-form>
            <b-row>
              <div class="col-sm-12 text-center">
                <b-button
                  variant="primary"
                  class="px-5 py-2 mt-2 mb-3"
                  :disabled="!this.isCheckedTOS || registrationLoading"
                  @click="createAccount(inputs)"
                  >SIGN UP</b-button
                >

                <p class="text-light-grey">
                  Already have
                  <strong>
                    <a
                      href="/auth/login"
                      style="text-decoration: none; color: black"
                      >an account?</a
                    >
                  </strong>
                </p>
                <span
                  class="error"
                  v-show="registrationError && typeof errorMessage === 'string'"
                  >{{ errorMessage }}</span
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
export default {
  name: 'AuthRegister',
  data() {
    return {
      inputs: {
        username: null,
        first_name: null,
        last_name: null,
        phone: null,
        password: null,
        email: null,
        accountTypeRecruiter: null,
      },
      isCheckedTOS: false,
    }
  },
  created() {
    this.inputs.email = this.$route.params.key
  },
  computed: {
    registrationError() {
      return this.$store.getters['register/registrationError']
    },
    registrationLoading() {
      return this.$store.getters['register/registrationLoading']
    },
    errorMessage() {
      let errorData = this.$store.getters['register/errorMessage']
      return errorData ? errorData : false
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
    createAccount() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return
        }
        this.$store.dispatch('register/clearRegistrationStatus')
        this.$store
          .dispatch('register/createAccount', this.inputs)
          .then(result => {
            if (result) {
              this.$router.push('/auth/select-role')
            }
          })
          .catch(() => {})
      })
    },

    keyupEmailHandler() {
      this.inputs.username = this.inputs.email
    },
    openTOSWindow() {
      window.open(
        '/pdfs/terms-and-conds.pdf',
        'Terms And Conditions',
        'height=600,width=900'
      )
    },
  },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch('register/clearRegistrationStatus')
    next()
  },
}
</script>

<style lang="scss" scoped>
.custom-control-label {
  padding-top: 2px;
  padding-bottom: 4px;
  padding-right: 4px;
  margin-top: 2px;
  text-indent: -10px;
  a {
    line-height: 20px;
    text-decoration: none;
  }
}

.invalid-feedback {
  display: block;
}

.error {
  color: var(--danger);
  font-size: 12px;
}
</style>
