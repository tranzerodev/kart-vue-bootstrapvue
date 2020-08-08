<template>
  <div class="main-content-background">
    <AuthPageHeader />
    <b-container class="px-lg-5 px-md-2 px-2 background-section" fluid>
      <b-row class="px-md-3 px-2 mx-lg-4 mx-sm-3 mx-2 pb-4">
        <b-col class="content-section">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'AuthIndex',
  components: {
    AuthPageHeader: () => import('./AuthHeader'),
  },
  created() {},
}
</script>
<style lang="scss" scoped>
.main-content-background {
  height: fit-content;
}

.background-section {
  background: #f4f4fc;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('../../assets/background-pattern.png');
  height: fit-content;
  min-height: calc(100vh - 96px);
}
</style>
