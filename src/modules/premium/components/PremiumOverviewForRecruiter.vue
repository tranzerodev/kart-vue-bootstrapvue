<template>
  <b-container fluid>
    <b-row class="mt-5 pt-5 pb-5 ml-1 mb-2">
      <p class="h1 font-weight-bold text-dark full-width">
        {{ $t('premium-hiring-features') }}
      </p>
      <p class="full-width mb-4">Gives your company a competitive edge</p>
      <b-button variant="purple">Choose a plan</b-button>
    </b-row>
    <b-row>
      <b-col cols="12" sm="6" class="d-flex align-items-center">
        <div>
          <p class="h2 full-width font-weight-bold text-dark mb-3">
            {{ $t('premium-company-profile') }}
          </p>
          <p class="full-width">
            {{ $t('premium-company-profile-description') }}
          </p>
        </div>
      </b-col>
      <b-col cols="12" sm="6">
        <div class="d-flex flex-row-reverse">
          <b-img
            :src="require('@/assets/premium-professional-profile.png')"
            :alt="labelValue"
            class="ml-auto"
            height="350px"
          />
        </div>
      </b-col>
    </b-row>

    <b-row class="mt-5 pt-5">
      <b-col cols="12" sm="6">
        <div class="d-flex flex-row">
          <b-img
            :src="require('@/assets/find-talents-landing-card.png')"
            :alt="labelValue"
            height="350px"
          />
        </div>
      </b-col>
      <b-col cols="12" sm="6" class="d-flex align-items-center">
        <div>
          <p class="h2 full-width font-weight-bold text-dark mb-3">
            {{ $t('find-and-hire-high-caliber-talent') }}
          </p>
          <p class="full-width">
            {{ $t('find-and-hire-high-caliber-talent-description') }}
          </p>
        </div>
      </b-col>
    </b-row>
    <b-row class="mt-5 pt-5">
      <b-col cols="12" sm="6" class="d-flex align-items-center">
        <div>
          <p class="h2 full-width font-weight-bold text-dark">
            {{ $t('optimize-your-online-presence') }}
          </p>
          <p class="h2 full-width font-weight-bold text-dark mb-3">presence</p>
          <p class="full-width">
            {{ $t('optimize-your-online-presence-description') }}
          </p>
        </div>
      </b-col>
      <b-col cols="12" sm="6">
        <div class="d-flex flex-row-reverse">
          <b-img
            :src="require('@/assets/industry-overview.png')"
            :alt="labelValue"
            class="ml-auto"
            height="250px"
          />
        </div>
      </b-col>
    </b-row>

    <b-row class="mt-5 pt-5">
      <b-col cols="12" sm="6">
        <div class="d-flex flex-row">
          <b-img
            :src="require('@/assets/gain-insights-landing-card.png')"
            :alt="labelValue"
            class="ml-5"
            height="314px"
          />
        </div>
      </b-col>
      <b-col cols="12" sm="6" class="d-flex align-items-center">
        <div>
          <p class="h2 full-width font-weight-bold text-dark mb-3">
            {{ $t('gain-insights') }}
          </p>
          <p class="full-width">
            {{ $t('gain-insights-description') }}
          </p>
        </div>
      </b-col>
    </b-row>

    <b-row class="mt-5 pt-5">
      <b-col cols="12" sm="6" class="d-flex align-items-center">
        <div>
          <p class="h2 full-width font-weight-bold text-dark mb-3">
            {{ $t('direct-messaging') }}
          </p>
          <p class="full-width">
            {{ $t('direct-messaging-description') }}
          </p>
        </div>
      </b-col>
      <b-col cols="12" sm="6">
        <div class="d-flex flex-row-reverse">
          <b-img
            :src="require('@/assets/direct-messaging-landing-card.png')"
            :alt="labelValue"
            height="275px"
          />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: 'PremiumOverviewForRecruiter',

  data() {
    return {
      //user type, default 0, jobSeeker
      userType: 0,
    }
  },
}
</script>
