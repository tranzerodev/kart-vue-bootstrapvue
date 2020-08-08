<template>
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section id="sidebar-menu" class="sidebar-menu" style="height:auto;">
      <!-- Sidebar user panel (optional) -->

      <!-- /.search form -->

      <!-- Sidebar Menu -->
      <sidebar-menu />
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
import SidebarMenu from './SidebarMenu'

export default {
  name: 'Sidebar',
  components: { SidebarMenu },
  data() {
    return { inputs: { email: '' }, theme: 'aqua' }
  },
  created() {},
}
</script>
<style scoped>
.main-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100vh;
  width: 80px;
  min-height: 620px;
  z-index: 810;
  -webkit-transition: -webkit-transform 0.3s ease-in-out, width 0.3s ease-in-out;
  -moz-transition: -moz-transform 0.3s ease-in-out, width 0.3s ease-in-out;
  -o-transition: -o-transform 0.3s ease-in-out, width 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
  background: linear-gradient(to bottom, #3cb0e6 16%, #4ad9d9 97%);
}
.main-sidebar.purple {
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 70px;
  min-height: 920px;
  width: 80px;
  z-index: 810;
  -webkit-transition: -webkit-transform 0.3s ease-in-out, width 0.3s ease-in-out;
  -moz-transition: -moz-transform 0.3s ease-in-out, width 0.3s ease-in-out;
  -o-transition: -o-transform 0.3s ease-in-out, width 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
  background: linear-gradient(to bottom, #2f19b2 16%, #ff99cc 97%);
}
@media screen and (max-height: 620px) {
  .main-sidebar {
    position: absolute;
  }
}
</style>
