<template>
  <div class="jobs-list">
    <div v-for="job in jobs" :key="job.id">
      <HpCard
        :title="job.title"
        :description="job.description"
        :url="job.url"
        :image="job.image"
      />
    </div>
    <!-- <HpCard title="Title" description="lorem ipsum" url="/" image="Business-Goals.png"/>
    <HpCard title="Title" description="lorem ipsum" url="/" image="Business-Goals.png"/>
    <HpCard title="Title" description="lorem ipsum" url="/" image="Business-Goals.png"/> -->
  </div>
</template>
<script>
import HpCard from '../../shared/components/HpCard'

export default {
  components: {
    HpCard,
  },
  computed: {
    jobs: function() {
      return this.$store.getters['jobs/jobs']
    },
  },
  mounted() {
    this.$store.dispatch('jobs/getJobs')
  },
}
</script>
<style lang="scss" scoped>
.jobs-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin: 0px 85px;
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
