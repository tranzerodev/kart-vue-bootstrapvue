<template>
  <div class="jobs-banner">
    <div class="jobs-get-started">
      <h1>The latest jobs are on Kartmon Jobs</h1>
      <p>
        Kartmon is helping enterprises around the world solve their biggest
        challenges.
      </p>
      <div class="jobs-button">
        <button type="button" class="btn btn-tertiary">GET STARTED</button>
        <button type="button" class="btn btn-outline-grey">WATCH DEMO</button>
      </div>
    </div>
    <div class="jobs-image">
      <img src="../../assets/smartphone.png" alt="smart" />
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.jobs-banner {
  height: 816px;
  display: flex;
  align-items: center;
  padding: 20px 0px 20px 85px;

  .jobs-get-started {
    // width: 50%;
    .jobs-button {
      display: flex;
      button {
        margin-right: 50px;
      }
    }
  }
  .jobs-image {
    overflow: hidden;
    img {
      margin: 0 0 0 70px;
    }
  }
}
</style>
