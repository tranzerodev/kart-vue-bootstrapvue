<template>
  <div>
    <div class="background-content">
      <b-container fluid class="pt-2 pb-4">
        <b-row class="mt-2 ml-4 mb-5 pr-sm-4 mr-sm-4 pr-1 mr-1">
          <b-col class="pr-5">
            <PremiumOverviewForJobSeeker v-if="userType === 0" />
            <PremiumOverviewForRecruiter v-if="userType === 1" />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <PremiumOverviewFooter />
  </div>
</template>
<script>
import PremiumOverviewForJobSeeker from './PremiumOverviewForJobSeeker'
import PremiumOverviewForRecruiter from './PremiumOverviewForRecruiter'
import PremiumOverviewFooter from './PremiumOverviewFooter'
export default {
  name: 'PremiumOverview',
  components: {
    PremiumOverviewForJobSeeker,
    PremiumOverviewForRecruiter,
    PremiumOverviewFooter,
  },
  data() {
    return {
      //user type, default 0, jobSeeker
      userType: 0,
    }
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
