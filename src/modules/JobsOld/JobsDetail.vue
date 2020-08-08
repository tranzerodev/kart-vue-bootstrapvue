<template>
  <div class="jobs-detail" v-if="selectedJob !== null">
    <div class="job-panel">
      <div class="job-panel-title">
        <h5>{{ selectedJob.title }}</h5>
        <span>{{ selectedJob.company_name }}</span>
        <div class="title-place">
          <i class="fa fa-map-marker"></i>
          <small>{{ selectedJob.location }}</small>
        </div>
        <div class="date-posted">
          <span>Posted: {{ dateAdded }} &nbsp;&nbsp; 12 Views</span>
        </div>
        <div class="form-group job-btn-section">
          <button class="btn btn-outline-primary">Save</button>
          <button class="btn btn-primary">Apply</button>
        </div>
      </div>
      <div class="job-panel-detail-default">
        <div class="job-details">
          <h6>Job Description</h6>
          <p>{{ selectedJob.description }}</p>
        </div>
        <div class="job-responsabilities">
          <h6>Responsabilities</h6>
          <p>{{ selectedJob.metadata.responsabilities }}</p>
        </div>
        <div class="job-qualifications">
          <h6>Qualifications</h6>
          <p>{{ selectedJob.metadata.qualifications }}</p>
        </div>
        <div class="more-section" v-show="!isShowed">
          <div class="more-link" @click="moreDetails()">
            <span>More</span>
            <i class="fa fa-angle-down"></i>
          </div>
        </div>
      </div>
      <div class="job-panel-detail-full" v-show="isShowed">
        <div class="job-compensation">
          <h6>Compensation</h6>
          <div class="compensations-detail">
            <span>Salary Range</span>
            <span>
              {{
                selectedJob.metadata.salaryRange
                  ? `${selectedJob.metadata.salaryRange}K`
                  : ''
              }}
            </span>
            <div class="job-salary-range">
              <span>${{ selectedJob.min_compensation }}k</span>
              <span>${{ selectedJob.max_compensation }}k</span>
            </div>
          </div>
        </div>
        <div class="job-rating">
          <h6>Rating</h6>
          <div
            class="rating-container"
            v-if="selectedJob && selectedJob.metadata"
          >
            <span class="rating-number">{{ selectedJob.metadata.rating }}</span>
            <!-- eslint-disable-next-line -->
            <span
              class="fa-stack fa-lg rate-used"
              v-if="isRenderedRating(index)"
              v-for="index in 5"
              :key="index"
            >
              <i class="fa fa-square fa-stack-2x"></i>
              <i class="fa fa-star-o fa-stack-1x fa-inverse"></i>
            </span>
            <!-- eslint-disable-next-line -->
            <span
              class="fa-stack fa-lg rate-not-used"
              v-if="!isRenderedRating(index)"
              v-for="index in 5"
              :key="index"
            >
              <i class="fa fa-square fa-stack-2x"></i>
              <i class="fa fa-star-o fa-stack-1x fa-inverse"></i>
            </span>
          </div>
          <div class="benefits">
            <span>Benefits</span>
            <div class="stars">
              <i
                class="fa fa-star fa-2x rate-used"
                v-for="index in 5"
                v-if="isRenderedBenefits(index)"
                :key="index"
              ></i>
              <i
                class="fa fa-star fa-2x rate-not-used"
                v-for="index in 5"
                v-if="!isRenderedBenefits(index)"
                :key="index"
              ></i>
            </div>
          </div>
          <div class="culture">
            <span>Culture</span>
            <div class="stars">
              <i
                class="fa fa-star fa-2x rate-used"
                v-for="index in 5"
                v-if="isRenderedCulture(index)"
                :key="index"
              ></i>
              <i
                class="fa fa-star fa-2x rate-not-used"
                v-for="index in 5"
                v-if="!isRenderedCulture(index)"
                :key="index"
              ></i>
            </div>
          </div>
          <div class="oportunities">
            <span>Oportunities</span>
            <div class="stars">
              <i
                class="fa fa-star fa-2x rate-used"
                v-for="index in 5"
                v-if="isRenderedOportunities(index)"
                :key="index"
              ></i>
              <i
                class="fa fa-star fa-2x rate-not-used"
                v-for="index in 5"
                v-if="!isRenderedOportunities(index)"
                :key="index"
              ></i>
            </div>
          </div>
          <div class="balance">
            <span>Work/Life Balance</span>
            <div class="stars">
              <i
                class="fa fa-star fa-2x rate-used"
                v-for="index in 5"
                v-if="isRenderedBalance(index)"
                :key="index"
              ></i>
              <i
                class="fa fa-star fa-2x rate-not-used"
                v-for="index in 5"
                v-if="!isRenderedBalance(index)"
                :key="index"
              ></i>
            </div>
          </div>
        </div>
        <div class="reviews" v-if="selectedJob && selectedJob.metadata">
          <div
            class="review-item"
            v-for="review in selectedJob.metadata.reviews"
            :key="review.id"
          >
            <div class="review-header">
              <div class="review-img"></div>
              <div class="review-title">
                <h6>"{{ review.comment }}"</h6>
                <span
                  class="fa-stack fa-lg rate-used"
                  v-for="index in review.rate"
                  :key="index"
                >
                  <i class="fa fa-square fa-stack-2x"></i>
                  <i class="fa fa-star-o fa-stack-1x fa-inverse"></i>
                </span>
              </div>
              <div class="review-desc">
                <p>{{ review.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="isPremium">
          <div class="average">
            <h6>Average years of experience of other applicants</h6>
            <div
              class="average-item"
              v-for="otherAverage in averages"
              :key="otherAverage"
            >
              <div>
                <span>{{ otherAverage }} Years</span>
              </div>
              <div :class="`years col-md-${otherAverage}`">
                <span></span>
              </div>
            </div>
          </div>
          <div class="top-skills">
            <h6>Top Skills</h6>
            <div>
              <p>
                You have {{ skillsLength }} out of
                {{ skillsRequiredLength }} top skills
              </p>
              <div class="skills">
                <span
                  class="skill"
                  v-for="skill in selectedJob.metadata.skillsRequired"
                  :key="skill"
                  >{{ skill }}</span
                >
              </div>
            </div>
          </div>
          <div class="locations">
            <h6>Locations of other applicants</h6>
            <div>
              <div>
                <span>San Francisco Area</span>
                <span>12 Applicants</span>
              </div>
              <div>
                <span>Los Angeles Area</span>
                <span>5 Applicants</span>
              </div>
              <div>
                <span>Los Angeles</span>
                <span>5 Applicants</span>
              </div>
            </div>
          </div>
          <div class="contact-information">
            <h6>Contact Information</h6>
            <ul>
              <li v-if="selectedJob.metadata && selectedJob.metadata.email">
                <i class="fa fa-envelope-open-o"></i>
                <span>{{ selectedJob.metadata.email }}</span>
              </li>
              <li
                v-if="selectedJob.metadata && selectedJob.metadata.phonenumber"
              >
                <i class="fa fa-2x fa-mobile"></i>
                <span>{{ selectedJob.metadata.phonenumber }}</span>
              </li>
              <li v-if="selectedJob.metadata && selectedJob.metadata.website">
                <i class="fa fa-globe"></i>
                <a :href="selectedJob.metadata.website">Website</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="more-section" v-show="isShowed">
        <div class="more-link" @click="moreDetails()">
          <span>Hide</span>
          <i class="fa fa-angle-up"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  data() {
    return {
      isShowed: false,
      isPremium: true,
    }
  },
  computed: {
    selectedJob() {
      let selected = this.$store.getters['jobs/selectedJob']
      if (selected) return selected
      else return null
    },
    dateAdded() {
      return moment(this.selectedJob.dateAdded).format('MMMM Do YYYY')
    },
    averages() {
      if (this.selectedJob.metadata.averages) {
        return this.selectedJob.metadata.averages
      } else {
        return []
      }
    },
    skillsLength() {
      return this.selectedJob.metadata && this.selectedJob.metadata.skills
        ? this.selectedJob.metadata.skills.length
        : 0
    },
    skillsRequiredLength() {
      return this.selectedJob.metadata &&
        this.selectedJob.metadata.skillsRequired
        ? this.selectedJob.metadata.skillsRequired.length
        : 0
    },
  },
  methods: {
    moreDetails() {
      this.isShowed = !this.isShowed
    },
    isRenderedRating(index) {
      return this.selectedJob.metadata.rating
        ? index <= this.selectedJob.metadata.rating
        : false
    },
    isRenderedBenefits(index) {
      return this.selectedJob.metadata.benefits
        ? index <= this.selectedJob.metadata.benefits
        : false
    },
    isRenderedCulture(index) {
      return this.selectedJob.metadata.culture
        ? index <= this.selectedJob.metadata.culture
        : false
    },
    isRenderedOportunities(index) {
      return this.selectedJob.metadata.oportunities
        ? index <= this.selectedJob.metadata.oportunities
        : false
    },
    isRenderedBalance(index) {
      return this.selectedJob.metadata.balance
        ? index <= this.selectedJob.metadata.balance
        : false
    },
  },
}
</script>
<style lang="scss" scoped>
.job-panel {
  background: #ffffff;
  padding: 25px 30px;
  margin-right: 20px;

  p {
    text-align: justify;
    color: #707070;
  }
}
.form-group {
  button {
    margin-right: 10px;
  }
}
.date-posted {
  span {
    margin-right: 10px;
  }
}
h6 {
  font-weight: bold;
  color: #555555;
}
.more-section {
  width: 100%;
  display: flex;
  justify-content: center;
}
.more-link {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  * {
    width: 100%;
    text-align: center;
  }
  &:hover {
    cursor: pointer;
  }
}
.compensations-detail {
  display: flex;
  justify-content: space-between;

  * {
    width: 30%;
  }
}
.rating-container {
  display: flex;
  justify-content: center;
}
.benefits,
.culture,
.oportunities,
.balance {
  display: flex;
  justify-content: space-between;
  span {
    margin-right: 20px;
  }
  .stars {
    width: 50%;
    display: flex;
    justify-content: space-between;
  }
}
.rating-number {
  font-size: 28px;
  margin-right: 5px;
}
.rate-used {
  color: #3cb1e5;
}
.rate-not-used {
  color: #c3c3c3;
}
.average-item {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  div {
    width: 100%;
  }
}
.years {
  width: 80% !important;
  background: #3cb1e5;
  padding: 5px;
}
.skills {
  display: flex;
  flex-wrap: wrap;
}
.skill {
  background: #3cb1e5;
  border-radius: 4px;
  color: #ffffff;
  margin-bottom: 10px;
  margin-left: 10px;
  padding: 5px 10px;
}
.contact-information {
  ul {
    padding-left: 0;
    li {
      list-style: none;
    }
  }
}
.fa-map-marker {
  color: #a1a0ae;
}
.btn-outline-primary {
  border-color: #3cb1e5;
  color: #4d4f5c;
  &:hover {
    background: #3cb1e5;
    color: #ffffff;
  }
}
.btn-outline-primary:not(:disabled):not(.disabled):active {
  background: #3cb1e5;
  color: #ffffff;
}
.job-btn-section {
  margin-top: 15px;
  margin-bottom: 40px;
}
.job-salary-range {
  border-top: solid 4px #3cb1e5;
  display: flex;
  justify-content: space-between;
}
</style>
