<template>
  <div id="home">
    <HomeBanner @update-MainImg="updateMainImg" :mainImg="mainImg" />
    <HomePageFirst @update-MainImg="updateMainImg" :itemIndex="itemIndex" />
    <Footer />
    <GoTop></GoTop>
  </div>
</template>
<script>
import HomeBanner from './HomeBanner'
import Footer from '../../shared/components/layout/Footer'
import HomePageFirst from './HomePageFirst'
import GoTop from '@inotom/vue-go-top'
import { URL_DICT } from '@/utils/constants'
export default {
  data() {
    return {
      itemIndex: 0,
      mainImg: null,
    }
  },
  components: { GoTop, HomeBanner, HomePageFirst, Footer },

  created: function() {
    if (this.$route.params.mainImg == undefined) {
      this.mainImg = ''
    } else {
      this.mainImg = this.$route.params.mainImg
    }
    this.getPageId(this.mainImg)
    this.getPage(this.mainImg)
  },
  methods: {
    updateMainImg(document) {
      this.getPage(document)
      window.scrollTo(0, 0)
    },
    async getPageId(document) {
      this.itemIndex = Object.keys(URL_DICT).indexOf(document)
    },
    async getPage(document) {
      if (this.$route.path !== URL_DICT[document])
        this.$router.push(URL_DICT[document])
    },
  },
}
</script>
<style lang="scss" scoped>
footer {
  margin-left: 80px;
}
</style>
