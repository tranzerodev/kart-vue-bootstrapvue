<template>
  <div class="main">
    <Sidebar />
    <Header />
    <div>
      <div class="main-content">
        <CandidatesListMain />
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '../../../shared/components/layout/Header'
import Sidebar from '../../../shared/components/layout/Sidebar/Sidebar'
import Footer from '../../../shared/components/layout/Footer'
import CandidatesListMain from './CandidatesListMain'

export default {
  components: {
    Header,
    Footer,
    Sidebar,
    CandidatesListMain,
  },
}
</script>
<style lang="scss" scoped>
.main-content {
  display: flex;
  margin-left: 80px;
  padding-top: 174px;
  background: url('../../../assets/images/background.png') no-repeat;
  background-size: cover;
  min-height: 920px;
  min-width: 997px;
}
</style>
