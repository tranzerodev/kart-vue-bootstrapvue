<template>
  <div class="banner-title">
    <template v-if="mainImg == ''">
      <div class="title">
        <h1>'One platform recruiting and planning'</h1>
        <p>
          Kartmon is helping enterprises around the world solve their biggest
          challenges.
        </p>
      </div>
    </template>
    <template v-if="mainImg == 'findjob'">
      <div class="title-left">
        <h1>Find the right job & get hired</h1>
        <p>
          Explore opportunities
        </p>
        <h2>
          You are most likely to find a job that you desire on
          {{ PROJECT_NAME }} as this platform is designed to identify job
          openings that closely match your academic degree, work history,
          skills, abilities, professional competencies, accomplishments, and
          areas of interest.
        </h2>
      </div>
      <div class="title-right">
        <div class="hp-card-img" v-if="img">
          <img :src="img" class="img1" />
        </div>
      </div>
    </template>

    <template v-if="mainImg == 'community'">
      <div class="title-left">
        <h1>Community insights & industry overview</h1>
        <p>
          Make an informed decision
        </p>
        <h2>
          When it comes to your career you have to make all the right moves and
          that begins with choosing the right company to work at. Just as a
          company leaves no stone unturned when it comes to assessing the
          capabilities and qualities of a job applicant before hiring them you
          too should do due diligence before you choose a company to work at.
        </h2>
      </div>
      <div class="title-right">
        <div class="hp-card-img" v-if="img">
          <img :src="img" class="img1" />
        </div>
      </div>
    </template>
    <template v-if="mainImg == 'career'">
      <div class="title-left">
        <h1>Career planning</h1>
        <p>
          Maximize your potential for professional success
        </p>
        <h2>
          To build a rewarding career you need to think beyond merely finding a
          job that fits. You need to set trackable career goals, periodically
          measure your progress, negotiate a pay rise, network effectively,
          upgrade your skills, push for a promotion, switch jobs at the
          appropriate time, and reassess your career plan as per the changing
          dynamics of your industry.
        </h2>
      </div>
      <div class="title-right">
        <div class="hp-card-img" v-if="img">
          <img :src="img" class="img1" />
        </div>
      </div>
    </template>

    <template v-if="mainImg == 'recruitment'">
      <div class="title-left">
        <h1>Recruitment</h1>
        <p>
          Find and hire employees that are the right fit for your team
        </p>
        <h2>
          Save time and reduce costs by planning and managing each task from
          posting a job opening, reviewing resumes, shortlisting, screening,
          conducting phone and/or video interviews, identifying top candidates,
          communicating the status of the applications, scheduling in-person
          interviews, evaluating & selecting, to making a job offer.
        </h2>
      </div>
      <div class="title-right">
        <div class="hp-card-img" v-if="img">
          <img :src="img" class="img1" />
        </div>
      </div>
    </template>

    <template v-if="mainImg == 'learnmore'">
      <div class="title-left">
        <h1>Premium features</h1>
        <h2>
          Gives your company a competitive edge
        </h2>
        <button
          type="button"
          class="btn btn-tertiary"
          @click="UpdatePage(url_button_first)"
        >
          Choose a plan
        </button>
      </div>
      <div class="title-right">
        <div class="hp-card-img" v-if="img">
          <img :src="img" class="img1" />
        </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  props: ['mainImg'],
  computed: {
    img() {
      switch (this.mainImg) {
        case '':
          return null
        case 'findjob':
          return require('../../assets/images/' + 'find-job-landing-card.png')
        case 'community':
          return require('../../assets/images/' +
            'industry-overview-landing-card.png')
        case 'career':
          return require('../../assets/images/' +
            'career-planning-landing-card-02.png')
        case 'recruitment':
          return require('../../assets/images/' +
            'recruitment-landing-card-02.png')
        default:
          return null
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.banner-title {
  display: flex;
  margin-top: 80px;
  .title {
    margin-top: 121px;
    margin-bottom: 121px;
    width: 50%;
    h1,
    p {
      color: #ffffff;
    }
    h1 {
      font-size: 50px;
    }
    p {
      font-size: 20px;
    }
  }
  .title-left {
    margin-top: 101px;
    padding-right: 30px;
    width: 50%;
    h1 {
      font-weight: 600;
      font-size: 50px;
      line-height: 65px;
      display: flex;
      align-items: center;
      color: #404040;
    }
    p {
      font-weight: 500;
      font-size: 24px;
      line-height: 20px;
      display: flex;
      align-items: center;
      color: #655dc6;
    }
    h2 {
      font-weight: normal;
      font-size: 20px;
      line-height: 24px;
      color: #7e7e7e;
    }
  }
  .title-right {
    width: 50%;
    .img1 {
      max-width: 98%;
      height: 475px;
    }
  }
}
</style>
