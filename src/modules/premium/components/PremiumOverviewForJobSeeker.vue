<template>
  <b-container fluid>
    <b-row class="mt-5 pt-5 pb-5 ml-1 mb-2">
      <p class="h1 font-weight-bold text-dark full-width">
        {{ $t('premium-career-features') }}
      </p>
      <p class="full-width mb-4">{{ $t('stand-out-from-the-rest') }}</p>
      <b-button variant="primary">{{ $t('choose-a-plan') }}</b-button>
    </b-row>
    <b-row>
      <b-col cols="12" sm="6" class="d-flex align-items-center">
        <div>
          <p class="h2 full-width font-weight-bold mb-3 text-dark">
            {{ $t('featured-professional-profile') }}
          </p>
          <p class="full-width">
            {{ $t('featured-professional-profile-description') }}
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
            :src="require('@/assets/job-alert.png')"
            :alt="labelValue"
            height="250px"
          />
        </div>
      </b-col>
      <b-col cols="12" sm="6" class="d-flex align-items-center">
        <div>
          <p class="h2 full-width font-weight-bold text-dark mb-3">
            {{ $t('optimized-job-alerts') }}
          </p>
          <p class="full-width">
            {{ $t('optimized-job-alerts-description') }}
          </p>
        </div>
      </b-col>
    </b-row>

    <b-row class="mt-5 pt-5">
      <b-col cols="12" sm="6" class="d-flex align-items-center">
        <div>
          <p class="h2 full-width font-weight-bold text-dark mb-3">
            {{ $t('company-reviews-and-community') }}
          </p>
          <p class="full-width">
            {{ $t('company-reviews-and-community-description') }}
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
            :src="require('@/assets/job-applications.png')"
            :alt="labelValue"
            height="350px"
          />
        </div>
      </b-col>
      <b-col cols="12" sm="6" class="d-flex align-items-center">
        <div>
          <p class="h2 full-width font-weight-bold text-dark mb-3">
            {{ $t('unlimited-job-applications') }}
          </p>
          <p class="full-width">
            {{ $t('unlimited-job-applications-description') }}
          </p>
        </div>
      </b-col>
    </b-row>

    <b-row class="mt-5 pt-5">
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
    </b-row>

    <b-row class="mt-5 pt-5">
      <b-col cols="12" sm="6">
        <div class="d-flex flex-row">
          <b-img
            :src="require('@/assets/direct-messaging-landing-card.png')"
            :alt="labelValue"
            height="275px"
          />
        </div>
      </b-col>
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
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: 'PremiumOverviewForJobSeeker',

  data() {
    return {
      labelValue: '',
    }
  },
}
</script>
