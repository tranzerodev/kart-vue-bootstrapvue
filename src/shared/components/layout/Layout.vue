<template>
  <div class="main">
    <Sidebar />
    <Header />
    <div
      class="main-container"
      :class="{ 'have-sub-header': !isShowSubHeader }"
    >
      <slot name="content"></slot>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from './Header'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer'

export default {
  name: 'Layout',
  components: {
    Header,
    Sidebar,
    Footer,
  },
  props: {
    isShowSubHeader: {
      type: Boolean,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.main-container {
  margin: 90px 80px 0 80px;
  width: calc(100% - 80px);
  &.have-sub-header {
    margin-top: 56px;
  }
}
</style>
