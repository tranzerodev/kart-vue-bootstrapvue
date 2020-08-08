import Vue from 'vue'
import IdleVue from 'idle-vue'
import jQuery from 'jquery'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate'
import CountryFlag from 'vue-country-flag'
import ToggleButton from 'vue-js-toggle-button'

import { i18n } from './plugins/i18n'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './styles/scss/theme.scss'
import 'font-awesome/css/font-awesome.min.css'
import { TIMEOUT_TIME } from './utils/constants'
import { PROJECT_NAME } from './utils/constants'
import { COPYRIGHT_YEAR } from '@/utils/constants'
import { BootstrapVueIcons } from 'bootstrap-vue'
import DialogMixin from '@/shared/mixins/ModalHandler'
const eventsHub = new Vue()
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(IdleVue, {
  store,
  eventEmitter: eventsHub,
  events: ['keydown', 'mousedown', 'touchstart'],
  idleTime:
    sessionStorage.getItem('lifetime') == null
      ? TIMEOUT_TIME
      : sessionStorage.getItem('lifetime'),
  startAtIdle: true,
})
Vue.use(ToggleButton)
Vue.use(VeeValidate, {
  inject: true,
  fieldsBagName: 'veeFields',
  errorBagName: 'veeErrors',
})
Vue.component('country-flag', CountryFlag)

Vue.config.productionTip = false

window.jQuery = jQuery
window.$ = jQuery
Vue.prototype.PROJECT_NAME = PROJECT_NAME
Vue.prototype.COPYRIGHT_YEAR = COPYRIGHT_YEAR
new Vue({
  i18n,
  mixins: [DialogMixin],
  router,
  store,
  async onIdle() {
    if (
      sessionStorage.getItem('lifetime') != null &&
      sessionStorage.getItem('refresh_success') == '1' &&
      (await this.$store.getters['auth/isLoggedIn'])
    ) {
      sessionStorage.setItem('refresh_success', 0)
      await this.showConfirmModalTwo(
        this.$t('session-is-to-expire'),
        this.$t('logout-now'),
        'Ok'
      )

      if (this.confirmTwoResult === true) {
        await this.$store.dispatch('auth/logout')
      } else if (this.confirmTwoResult === false) {
        await this.$store.dispatch(
          'auth/token_refresh',
          sessionStorage.getItem('token_refresh')
        )
        location.reload()
      }
    }
  },
  render: h => h(App),
  mounted() {
    // Save data to sessionStorage
    sessionStorage.setItem('refresh_success', 1)
    if (!localStorage.getItem('lang'))
      this.$store.dispatch('auth/setLang', 'en')
    this.$i18n.locale = this.$store.state.auth.lang
    this.$store.watch(
      ({ auth }) => auth.lang,
      lang => {
        this.$i18n.locale = lang
      }
    )
  },
}).$mount('#app')
