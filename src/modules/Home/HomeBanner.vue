<template>
  <div id="HomeBanner" :class="mainImg">
    <div class="banner-container">
      <HomeBannerHeader />
      <HomeBannerTitle :mainImg="mainImg" />
    </div>
  </div>
</template>
<script>
import HomeBannerHeader from './HomeBannerHeader'
import HomeBannerTitle from './HomeBannerTitle'

export default {
  props: ['mainImg'],
  components: {
    HomeBannerHeader,
    HomeBannerTitle,
  },
  computed: {
    getUrlMap() {
      return this.mainImg
    },
  },
}
</script>
<style lang="scss" scoped>
.banner-container {
  padding: 20px 62px;
  width: 100%;
  max-width: 95vw;
  margin: 0 auto;
}
#HomeBanner {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  //height: 100vh;
  max-width: 100vw;
  background: url('../../assets/banner.png') no-repeat center center fixed;
  background-size: 100% 100% !important;
  .banner-container {
    height: inherit;
  }
}
.first {
  background: url('../../assets/banner.png') no-repeat center center fixed !important;
}
.community {
  background: url('../../assets/images/landingpage-bg.png') no-repeat center
    center fixed !important;
  background-size: 100% 100% !important;
}
.career {
  background: url('../../assets/images/landingpage-bg.png') no-repeat center
    center fixed !important;
  background-size: 100% 100% !important;
}
.findjob {
  background: url('../../assets/images/landingpage-bg.png') no-repeat center
    center fixed !important;
  background-size: 100% 100% !important;
}
.recruitment {
  background: url('../../assets/images/landingpage-bg.png') no-repeat center
    center fixed !important;
  background-size: 100% 100% !important;
}
.learnmore {
  background: url('../../assets/images/landingpage-bg.png') no-repeat center
    center fixed !important;
  background-size: 100% 100% !important;
}
/** 
 * iPad with portrait orientation.
 */
@media all and (device-width: 768px) and (device-height: 1024px) and (orientation: portrait) {
  #HomeBanner {
    height: 1024px;
  }
}

/** 
 * iPad with landscape orientation.
 */
@media all and (device-width: 768px) and (device-height: 1024px) and (orientation: landscape) {
  #HomeBanner {
    height: 768px;
  }
}

/**
 * iPhone 5
 * You can also target devices with aspect ratio.
 */
@media screen and (device-aspect-ratio: 40/71) {
  #HomeBanner {
    height: 500px;
  }
}
</style>
