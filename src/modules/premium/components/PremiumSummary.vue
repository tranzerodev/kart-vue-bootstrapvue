<template>
  <div class="background-content">
    <b-container fluid class="pt-2 pb-4">
      <b-row class="mt-5 pt-5 pb-5 ml-4 mb-2">
        <b-col>
          <p class="h1 font-weight-bold text-dark">
            {{ $t('try-premium-free-for-one-month') }}
          </p>
        </b-col>
      </b-row>
      <b-row class="mt-2 ml-4 mb-5 pr-sm-5 mr-sm-5 pr-1 mr-1">
        <b-col class="pr-4">
          <SummaryCard
            :title="summaries[userType].title"
            :theme="summaries[userType].theme"
            :right-title="summaries[userType].rightTitle"
            :note="summaries[userType].note"
            :description="summaries[userType].description"
            :imageUrl="summaries[userType].imageUrl"
            :actionText="summaries[userType].actionText"
            @action-click="goToOverview"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import SummaryCard from '@/shared/components/SummaryCard'
import { mapGetters } from 'vuex'
export default {
  name: 'PremiumSummary',
  components: {
    SummaryCard,
  },
  data() {
    return {
      //user type, default 0, jobSeeker
      userType: 0,
    }
  },
  computed: {
    ...mapGetters({
      getPackage: 'premium/getPackage',
    }),
    premiumMonthlyFee: function() {
      let packageItem = this.getPackage('PRM', 'MON')
      if (packageItem) {
        return packageItem.price
      } else {
        return '0'
      }
    },
    summaries: function() {
      return [
        {
          id: 0,
          role: 'jobSeeker',
          title: this.$t('career'),
          theme: 'primary',
          rightTitle: this.$t('fee-per-period', {
            unit: '$',
            amount: this.premiumMonthlyFee
              ? this.premiumMonthlyFee.toString()
              : '0',
            period: 'mo',
          }),
          note: this.$t('get-hired-and-get-ahead'),
          description: [
            this.$t('stand-out-and-get-in-touch-with-hiring-managers'),
            this.$t('see-how-you-compare-with-other-candidates'),
            this.$t('learn-new-skills-to-advance-your-career'),
          ],
          imageUrl: require('@/assets/background-premium-job-seeker-summary.png'),
          actionText: this.$t('learn-more'),
        },
        {
          id: 1,
          role: 'Recruiter',
          title: this.$t('hiring'),
          theme: 'purple',
          rightTitle: this.$t('fee-per-period', {
            unit: '$',
            amount: this.premiumMonthlyFee
              ? this.premiumMonthlyFee.toString()
              : '0',
            period: 'mo',
          }),
          note: this.$t('get-hired-and-get-ahead'),
          description: [
            this.$t('find-great-candidates-faster'),
            this.$t('contact-top-talent-directly'),
            this.$t('build-relationships-with-prospective-hires'),
          ],
          imageUrl: require('@/assets/background-premium-recruiter-summary.png'),
          actionText: this.$t('learn-more'),
        },
      ]
    },
  },
  watch: {
    servicePackageList: function(newVal) {
      this.setPremiumMonthlyFee(newVal)
    },
    $route(to) {
      const type = to.params.userType
      if (!type || type === 'job-seeker') {
        this.userType = 0
      } else {
        this.userType = 1
      }
    },
  },
  methods: {
    goToOverview: function() {
      if (this.userType === 0) {
        this.$router.push('/premium/overview/job-seeker')
      } else if (this.userType === 1) {
        this.$router.push('/premium/overview/recruiter')
      }
    },
  },

  mounted() {
    const type = this.$route.params.userType
    if (!type || type === 'job-seeker') {
      this.userType = 0
    } else {
      this.userType = 1
    }
  },
}
</script>

<style lang="scss" scoped>
.background-content {
  background: linear-gradient(180deg, #daf3fe 0%, #c2f2f3 100%);
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('../../../assets/background-premium.png'),
    linear-gradient(180deg, #daf3fe 0%, #c2f2f3 100%);
  height: 100%;
}
</style>
