<template>
  <div class="hp-card">
    <div class="hp-card-content">
      <div class="card-title">
        <h6>{{ title }}</h6>
      </div>
      <div class="rating">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
      </div>
      <div class="hp-card-description">
        <p>{{ description }}</p>
      </div>
      <div class="hp-card-button">
        <a :href="url" class="btn btn-primary">Learn More</a>
      </div>
    </div>
    <div class="hp-card-img">
      <img :src="img" :alt="title" />
    </div>
  </div>
</template>
<script>
export default {
  props: ['title', 'rating', 'description', 'url', 'image'],
  computed: {
    img() {
      return require('../../assets/' + this.image)
    },
  },
}
</script>
<style lang="scss" scoped>
.hp-card {
  width: 628px;
  height: 327px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 6px #0000000a;
  border: 1px solid #caced5;
  border-radius: 4px;
  opacity: 1;
  display: flex;
  position: relative;
  justify-content: space-between;
  h6 {
    font-size: 16px;
    font: Bold 16px/12px Acumin Pro;
    letter-spacing: 0;
    color: #43425d;
    opacity: 1;
  }
  .rating {
    margin-bottom: 1rem;
  }
  p {
    width: 262px;
    height: 124px;
    text-align: left;
    font: 13px/18px Acumin Pro !important;
    letter-spacing: 0;
    color: #4d4f5c;
    opacity: 0.5;
  }
  .hp-card-content {
    width: 50%;
    margin: 40px 50px;
  }
  .hp-card-img {
    // width: 50%;

    img {
      width: 244px;
      height: 240px;
    }
    margin-top: 43px;
    margin-right: 32px;
  }
  .fa-star {
    color: #e9e9f0;
    &:hover {
      color: orange;
    }
  }
  .hp-card-button {
    position: absolute;
    bottom: 15px;
  }
}
</style>
