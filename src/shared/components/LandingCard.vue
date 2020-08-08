<template>
  <div>
    <div class="dash-card">
      <router-link :to="url" v-if="url">
        <div class="dash-image">
          <img :src="img" :alt="title" />
        </div>
        <div class="dash-card-title">
          <h4 style="font-weight: bold;">{{ title }}</h4>
        </div>
      </router-link>
      <div v-if="!url">
        <div class="dash-image">
          <img :src="img" :alt="title" />
        </div>
        <div class="dash-card-title">
          <h4 style="font-weight: bold;">{{ title }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title', 'image', 'url'],
  computed: {
    img() {
      return require('../../assets/images/' + this.image)
    },
  },
}
</script>
<style lang="scss" scoped>
.dash-card {
  background: #ffffff;
  min-width: 230px;
  height: 190px;
  border-radius: 5px;
  a {
    color: #000000;
  }
  .dash-image {
    display: flex;
    align-content: center;
    img {
      margin: auto;
    }
  }
  .dash-card-title {
    display: flex;
    align-content: center;
    h4 {
      margin: auto;
      font-weight: 500;
      font-size: 20px;
      line-height: 20px;
      display: flex;
      align-items: center;
      text-align: center;

      color: #4a4a4a;
    }
  }
}
</style>
