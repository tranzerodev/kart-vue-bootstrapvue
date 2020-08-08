<template>
  <div class="main">
    <Sidebar />
    <Header />
    <div>
      <div class="main-content">
        <CandidatesMain />
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '../../shared/components/layout/Header'
import Sidebar from '../../shared/components/layout/Sidebar/Sidebar'
import Footer from '../../shared/components/layout/Footer'
import CandidatesMain from './CandidatesMain'

export default {
  components: {
    Header,
    Footer,
    Sidebar,
    CandidatesMain,
  },
}
</script>
<style lang="scss" scoped>
.main-content {
  display: flex;
  margin-left: 80px;
  padding-top: 174px;
  background: #d5f6ff;
  background-size: cover;
  min-height: 920px;
  min-width: 85vw;
}
footer {
  margin-left: 80px;
}
</style>
