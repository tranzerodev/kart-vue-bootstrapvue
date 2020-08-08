<template>
  <div class="background-content">
    <b-container fluid class="pt-5 pb-5">
      <b-row align-h="center" class="d-flex flex-column justify-content-center">
        <h1 class="text-white text-center">{{ $t('buy-a-plan-right-now') }}</h1>
        <p class="text-white text-center mt-3">
          {{ $t('only-amount-per-month', { amount: premiumMonthlyFee }) }}
        </p>
        <div class="text-center mt-3">
          <b-button variant="light" class="text-primary py-3 px-4">{{
            $t('choose-a-plan')
          }}</b-button>
        </div>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PremiumOverview',
  components: {},
  data() {
    return {}
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
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
.background-content {
  background: linear-gradient(180deg, #3cb1e5 0%, #b2e1f5 100%);
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('../../../assets/footer-bg.png');
  background-image: url('../../../assets/footer-bg.png'),
    linear-gradient(126.66deg, #3cb0e6 19.65%, #4ad9d9 76.28%);
  height: 100%;
}
</style>
