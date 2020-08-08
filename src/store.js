import Vue from 'vue'
import Vuex from 'vuex'

import jobs from './modules/JobsOld/_store'
import auth from './modules/Auth/_store'
import register from './modules/Auth/_store/register'
import candidates from './modules/candidates/_store'
import job from './modules/job/_store'
import catalog from './modules/catalog/_store'
import companyprofile from './modules/companyprofile/_store'
import premium from './modules/premium/_store'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    jobs,
    register,
    candidates,
    job,
    catalog,
    companyprofile,
    premium,
  },
  state: {},
  mutations: {},
  actions: {},
})
