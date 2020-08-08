<template>
  <div class="main">
    <Sidebar :user="user" />
    <Header />
    <div>
      <div class="main-container">
        <h1>Settings</h1>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '../../shared/components/layout/Header'
import Sidebar from '../../shared/components/layout/Sidebar/Sidebar'
import Footer from '../../shared/components/layout/Footer'

export default {
  components: {
    Header,
    Sidebar,
    Footer,
  },
  computed: {
    pathName() {
      return this.$router.currentRoute.name
    },
  },
}
</script>
<style lang="scss" scoped>
.main-container {
  margin: 90px 80px 0 80px;
  background: transparent linear-gradient(180deg, #daf3fe 0%, #c2f2f3 100%) 0%
    0% no-repeat padding-box;
  width: calc(100% - 80px);
}
</style>
