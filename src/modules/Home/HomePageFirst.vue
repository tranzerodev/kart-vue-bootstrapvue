<template>
  <div v-if="loading">
    <div
      class="jobs-list"
      :style="{ 'margin-top': itemIndex == 5 ? '-300px' : '15px' }"
    >
      <div v-for="job in jobs[itemIndex].descriptions" :key="job.id">
        <HpLandingPageFirst
          :title="job.title"
          :description="job.description"
          :subtitle="job.subtitle"
          :url="job.url"
          :image="job.image"
          :url_button_first="job.url_button_first"
          :url_button_next="job.url_button_next"
          :button_first="job.button_first"
          :button_next="job.button_next"
          :type="job.type"
          :titleFontSize="jobs[itemIndex].titleFontSize"
          :descriptionFontSize="jobs[itemIndex].descriptionFontSize"
          @update-page="updatePage"
          :image-width="job.imageWidth"
        />
      </div>
      <template v-if="itemIndex == 4">
        <p class="grid-title">
          Top 10 benefits of partnering with {{ PROJECT_NAME }}
        </p>
        <div class="homepage-grid">
          <LandingCard
            title="Easy to use"
            image="easy-to-use-landing-card.png"
          />
          <LandingCard
            title="Promotes efficiency"
            image="promotes-efficiency-landing-card.png"
          />
          <LandingCard
            title="Access to qualified professionals"
            image="access-to-qualified-professionals-landing-card.png"
          />
          <LandingCard
            title="Wide-ranging functions"
            image="wide-ranging-functions-landing-card.png"
          />
          <LandingCard title="Integrable" image="integrable-landing-card.png" />
          <LandingCard
            title="Custom workflows"
            image="custom-workflows-landing-card.png"
          />
          <LandingCard
            title="Online assessment tools"
            image="online-assessment-tools-landing-card.png"
          />
          <LandingCard
            title="Cloud-based"
            image="cloud-based-landing-card.png"
          />
          <LandingCard
            title="Data security"
            image="data-security-landing-card.png"
          />
          <LandingCard
            title="Data analytics tools"
            image="data-analytics-tools-landing-card.png"
          />
        </div>
      </template>
    </div>
    <div class="jobs-list-footer">
      <div class="title">{{ jobs[itemIndex].title }}</div>
      <div class="subtitle">{{ jobs[itemIndex].subtitle }}</div>
      <div class="button-footer">
        <a :href="jobs[itemIndex].url_button_footer_title">
          <button type="button" class="btn btn-tertiary">
            {{ jobs[itemIndex].button_footer_title }}
          </button>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import HpLandingPageFirst from '../../shared/components/HpLandingPageFirst'

import LandingCard from '../../shared/components/LandingCard'

export default {
  data() {
    return {
      loading: false,
    }
  },
  props: ['itemIndex'],
  components: {
    HpLandingPageFirst,
    LandingCard,
  },
  computed: {
    jobs: function() {
      return this.$store.getters['jobs/jobs']
    },
  },
  async mounted() {
    await this.$store.dispatch('jobs/getLandingPageFirst')
    this.loading = true
  },
  methods: {
    updatePage(document) {
      this.$emit('update-MainImg', document)
    },
  },
}
</script>
<style lang="scss" scoped>
.grid-title {
  font-weight: 600;
  font-size: 44px;
  line-height: 60px;

  color: #404040;
  width: 600px;
  height: 110px;
  margin-bottom: 40px;
}

.homepage-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 40px;
  margin-bottom: 40px;
}
.jobs-list {
  width: 100%;
  max-width: 95vw;
  margin: 0 auto;
  padding: 0px 62px;
}
.jobs-list-footer {
  width: 100%;
  margin: 0 auto;
  background-color: #3cb1e5;
  height: 306px;
  background-image: url('../../assets/footer-bg.png');
  background-repeat: no-repeat;
  /* Do not repeat the image */
  background-size: cover;
  /* Resize the background image to cover the entire container */
  -webkit-background-size: cover;

  display: block;
  align-items: center;
  text-align: center;
  .title {
    padding-top: 64px;
    font-weight: 600;
    font-size: 50px;
    line-height: 65px;
    color: #ffffff;
  }
  .subtitle {
    padding-top: 24px;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
  }
  .button-footer {
    padding-top: 33px;
    button {
      width: 140px;
      height: 48px;
    }
  }
}
@media screen and (max-width: 995px) {
  .jobs-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
}
</style>
