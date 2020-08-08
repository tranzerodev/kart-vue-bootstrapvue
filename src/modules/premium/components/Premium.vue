<template>
  <Layout :isShowSubHeader="false">
    <template v-slot:content>
      <router-view />
    </template>
  </Layout>
</template>
<script>
import Layout from '@/shared/components/layout/Layout'
import { mapState } from 'vuex'
export default {
  name: 'PremiumLayout',
  components: {
    Layout,
  },
  computed: {
    ...mapState({
      servicePackageList: state => state.premium.servicePackageList,
    }),
  },
  watch: {},
  async mounted() {
    if (!this.servicePackageList || !this.servicePackageList.length) {
      await this.$store.dispatch('premium/loadServicePackageList')
    }
  },
}
</script>
