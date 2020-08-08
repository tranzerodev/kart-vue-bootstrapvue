<template>
  <div class="jobs-container">
    <Sidebar :user="user" />
    <Header />
    <div>
      <div class="main-content">
        <h1>Add new Job</h1>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.jobs-container {
  margin: 90px 80px 0 80px;
  background: transparent linear-gradient(180deg, #daf3fe 0%, #c2f2f3 100%) 0%
    0% no-repeat padding-box;
  width: calc(100% - 80px);
  // box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  .jobs-main {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    .jobs-list {
      width: 60%;
    }
    .jobs-detail {
      width: 40%;
    }
  }
}
</style>
