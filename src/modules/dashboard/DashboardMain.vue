<template>
  <div class="main">
    <Header :message="true" />
    <div class="main-container">
      <div class="left-main">
        <HpDashboardLargeCard type="summary" url="/job" />
        <HpListCard title="Latest Applicants" />
        <HpDashboardLargeCard type="highlights" url="/jobs" />
      </div>
      <div class="right-main">
        <div class="dash-grid">
          <HpDashboardCard
            title="Candidates"
            image="Directory.svg"
            url="candidateslist"
          />
          <HpDashboardCard title="Email Response Due" image="Documents.svg" />
          <HpDashboardCard title="Waiting For My Action" image="Training.svg" />
          <HpDashboardCard title="My Pending tasks" image="Survey.svg" />
          <HpDashboardCard
            title="My Recommendations"
            image="OpenPosition.svg"
          />
          <HpDashboardCard title="My Notifications" image="Training.svg" />
        </div>
        <HpTableCard title="Interviews" :candidates="candidates" />
        <div class="dash-grid">
          <HpDashboardCard title="Offers In Progress" image="Training.svg" />
          <HpDashboardCard title="Contacted Candidates" image="Training.svg" />
          <HpDashboardCard title="On Hold" image="Training.svg" />
          <HpDashboardCard title="Referrals" image="Training.svg" />
          <HpDashboardCard title="Offers Accepted" image="Training.svg" />
          <HpDashboardCard title="Offers Declined" image="Training.svg" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '../../shared/components/layout/Header'
import Footer from '../../shared/components/layout/Footer'
import HpListCard from '../../shared/components/HpListCard'
import HpTableCard from '../../shared/components/HpTableCard'
import HpDashboardCard from '../../shared/components/HpDashboardCard'
import HpDashboardLargeCard from '../../shared/components/HpDashboardLargeCard'

export default {
  components: {
    Header,
    Footer,
    HpDashboardCard,
    HpDashboardLargeCard,
    HpListCard,
    HpTableCard,
  },
  mounted() {
    this.$store.dispatch('candidates/getCandidateList')
  },
  computed: {
    candidates() {
      return this.$store.getters['candidates/candidates']
    },
  },
}
</script>
<style lang="scss" scoped>
.main-header {
  margin-left: 80px;
  padding-left: 60px;
  padding-right: 60px;
}
.main {
  background: #d5f6ff;
  background-size: cover;
  min-height: 920px;
  min-width: 997px;
  .main-container {
    display: flex;
    margin-left: 80px;
    padding-top: 174px;
    padding-left: 60px;
    padding-right: 60px;

    .left-main {
      width: 30%;
      margin: 10px;
      margin-right: 20px;
      margin-left: 0;
    }
    .right-main {
      width: 70%;
      margin: 10px;
      margin-left: 20px;
      margin-right: 0;
    }
  }
}
.dash-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  margin-bottom: 40px;
}
footer {
  margin-left: 80px;
}
@media screen and (max-width: 1024px) {
  .dash-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
