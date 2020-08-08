<template>
  <div id="dashboard">
    <Sidebar />
    <DashboardMain />
  </div>
</template>
<script>
import Sidebar from '../../shared/components/layout/Sidebar/Sidebar'
import DashboardMain from './DashboardMain'

export default {
  components: {
    Sidebar,
    DashboardMain,
  },
  computed: {
    user() {
      return {
        displayName: 'faker.name.findName()',
        avatar: 'faker.image.avatar()',
        roles: ['faker.name.jobTitle()', 'faker.name.jobTitle()1'],
      }
    },
  },
}
</script>
<style lang="scss" scoped>
#dashboard {
  // display: flex;
  // Sidebar {
  //   // width: 80px;
  //   // position:fixed;
  //   // background: #3CB0E6;
  // }
}
</style>
