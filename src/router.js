import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  fallback: false,
  saveScrollPosition: true,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./modules/Home'),
    },
    {
      path: '/home/:mainImg',
      name: 'mainhome',
      component: () => import('./modules/Home'),
      meta: {
        reload: true,
      },
      props: true,
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/auth',
      component: () => import('./modules/Auth'),
      children: [
        {
          name: 'Register',
          path: 'register',
          component: () => import('./modules/Auth/Register/AuthRegister.vue'),
        },
        {
          name: 'SelectRole',
          path: 'select-role',
          component: () => import('./modules/Auth/Register/AuthSelectRole.vue'),
        },
        {
          name: 'AddBusinessProfile',
          path: 'business-profile',
          component: () =>
            import('./modules/Auth/Register/Recruiter/AddBusinessProfile.vue'),
        },
        {
          name: 'AddProfile',
          path: 'add-profile',
          component: () =>
            import('./modules/Auth/Register/JobSeeker/AddProfile.vue'),
        },
        {
          name: 'Login',
          path: 'login',
          component: () => import('./modules/Auth/AuthLogin'),
        },
        {
          path: '/auth/login/:sign',
          name: 'resetPassword',
          component: () => import('./modules/Auth/AuthLogin.vue'),
          meta: {
            guest: true,
          },
        },
        {
          path: '/auth/activate/:uid/:token',
          name: 'activate',
          component: () => import('./modules/Auth/AuthLogin.vue'),
          meta: {
            guest: true,
          },
        },
        {
          path: '/auth/password-reset-confirm/:uid/:token',
          name: 'password-reset-confirm',
          component: () => import('./modules/Auth/AuthLogin.vue'),
          meta: {
            guest: true,
          },
        },
      ],
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./modules/dashboard'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('./modules/Auth/AuthSettings'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/candidates/:id',
      name: 'candidates',
      component: () => import('./modules/candidates'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/candidateslist',
      name: 'candidates list',
      component: () => import('./modules/candidates/list/CandidatesList.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: () => import('./modules/JobsOld'),
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: 'add',
          name: 'AddNew',
          component: () => import('./modules/JobsOld/add/AddJob'),
        },
      ],
    },
    {
      path: '/job',
      name: 'job',
      component: () => import('./modules/job'),
      children: [
        {
          path: 'create-job',
          name: 'Job Details',
          component: () => import('./modules/job/CreateJob'),
        },
        {
          path: ':jobId',
          name: 'Job Edit',
          component: () => import('./modules/job/CreateJob'),
          props: true,
        },
      ],
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/company-profile',
      name: 'company-profile',
      component: () => import('./modules/companyprofile'),
      children: [
        {
          path: 'info',
          name: 'Info',
          component: () =>
            import('./modules/companyprofile/CompanyProfileCreate'),
          children: [
            {
              path: 'home',
              name: 'Home',
              component: () =>
                import('./modules/companyprofile/CompanyProfileHome'),
            },
            {
              path: 'people',
              name: 'People',
              component: () =>
                import('./modules/companyprofile/CompanyProfilePeople'),
            },
            {
              path: 'benefits',
              name: 'Benefits',
              component: () =>
                import('./modules/companyprofile/CompanyProfileBenefits'),
            },
            {
              path: 'photos',
              name: 'Photos',
              component: () =>
                import('./modules/companyprofile/CompanyProfilePhotos'),
            },
          ],
        },
      ],
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/premium',
      name: 'premium',
      component: () => import('./modules/premium/components/Premium'),
      children: [
        {
          path: '/premium/summary/:userType',
          name: 'premium-summary-usertype',
          component: () =>
            import('./modules/premium/components/PremiumSummary'),
        },
        {
          path: '/premium/overview/:userType',
          name: 'premium-overview',
          component: () =>
            import('./modules/premium/components/PremiumOverview'),
        },
      ],
      meta: {
        requiresAuth: true,
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

router.beforeEach(function(to, from, next) {
  try {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters['auth/isLoggedIn']) {
        next()
        return
      }
      next('/auth/login')
    } else {
      next()
    }
  } catch (e) {
    /* eslint-disable no-console */
    console.error('routing error', e)
  }
})

export default router
