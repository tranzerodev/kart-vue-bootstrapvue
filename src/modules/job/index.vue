<template>
  <div class="main">
    <Sidebar />
    <Header />
    <div class="main-content" v-show="!isViewList">
      <router-view></router-view>
    </div>
    <div class="main-content" v-show="isViewList">
      <JobList />
    </div>
    <PlainFooter />
  </div>
</template>
<script>
import Sidebar from '../../shared/components/layout/Sidebar/Sidebar'
import Header from '../../shared/components/layout/Header'
import PlainFooter from '../../shared/components/layout/PlainFooter'
import JobList from './JobList'

export default {
  data() {
    return {
      isViewList: true,
    }
  },
  components: {
    Sidebar,
    Header,
    PlainFooter,
    JobList,
  },
  mounted() {
    this.isViewList = this.$router.currentRoute.name == 'job'
  },
  updated() {
    this.isViewList = this.$router.currentRoute.name == 'job'
  },
}
</script>
<style lang="scss" scoped>
.main {
  background: #d5f6ff;
}
.main-content {
  display: flex;
  width: 100%;
  padding-top: 55px;
  background: #d5f6ff;
  background-size: cover;
  min-height: 100vh;
  max-width: 85vw;
  margin: 0 auto 0 140px;
}
footer {
  margin-left: 80px;
}
</style>
