<template>
  <div style="background-color: white;">
    <h5 class="card-header">Drag To Verify</h5>
    <div class="card-body">
      <div id="captcha"></div>
    </div>
  </div>
</template>

<script>
import '@/assets/js/longbow.slidercaptcha.js'
export default {
  name: 'slidercaptcha',
  data() {
    return {
      onSuccess: null,
    }
  },
  mounted: function() {
    var self = this
    $('#captcha').sliderCaptcha({
      width: 280,
      height: 155,
      sliderL: 42,
      sliderR: 9,
      offset: 5,
      loadingText: 'Loading...',
      failedText: 'Try It Again',
      barText: 'Slide the Puzzle',
      repeatIcon: 'fa fa-repeat',
      maxLoadCount: 3,
      localImages: function() {
        // uses local images instead
        return require('@/assets/images/captures/bukhara.jpg')
      },
      onSuccess: function() {
        this.onSuccess = true
        self.$emit('onSuccess1')
        $('#captcha').sliderCaptcha('reset')
      },
      onFail: function() {},
      onRefresh: function() {},
    })
  },
  created() {
    $('#captcha').sliderCaptcha('reset')
  },
}
</script>

<style scoped>
@import '../assets/css/slidercaptcha.css';
.card-body {
  min-height: 240px !important;
  max-height: 240px !important;
}
</style>
