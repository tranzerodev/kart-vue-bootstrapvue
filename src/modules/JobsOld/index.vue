<template>
  <div class="main">
    <Sidebar />
    <Header />
    <div>
      <div class="main-content">
        <JobsMain v-if="pathName !== 'AddNew'" />
        <JobsAddNew v-if="pathName === 'AddNew'" />
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '../../shared/components/layout/Header'
import Sidebar from '../../shared/components/layout/Sidebar/Sidebar'
import Footer from '../../shared/components/layout/Footer'
import JobsMain from './JobsMain'
import JobsAddNew from './add/AddJob'
export default {
  components: {
    Header,
    Sidebar,
    Footer,
    JobsMain,
    JobsAddNew,
  },
  computed: {
    pathName() {
      return this.$router.currentRoute.name
    },
  },
}
</script>
<style lang="scss" scoped>
footer {
  margin-left: 80px;
}
</style>
