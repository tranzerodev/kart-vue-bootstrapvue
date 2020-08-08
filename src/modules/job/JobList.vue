<template>
  <div class="job-list-main">
    <span class="job-list-main-title">Jobs</span>
    <div class="row col-md-12 p-0 m-0">
      <div class="col-md-12  p-0 m-0">
        <div class="header-buttons">
          <div class="button-post">
            <b-button class="btn btn-light" to="/job/create-job">
              <span>
                <img :src="img('add-icon.png')" class="cursor" />
                {{ $t('post-a-job') }}</span
              >
            </b-button>
          </div>
          <div class="button-post-right">
            <b-button
              class="btn btn-light"
              v-bind:class="{
                active_grid: this.active_grid === 'grid',
              }"
              @click="
                refreshJobList()
                active_grid = 'grid'
              "
            >
              <span> <i class="fa fa-table"></i></span>
            </b-button>
            <b-button
              class="btn btn-light"
              v-bind:class="{
                active_grid: this.active_grid === 'list',
              }"
              @click="
                refreshJobList()
                active_grid = 'list'
              "
            >
              <span> <i class="fa fa-list"></i></span>
            </b-button>
          </div>
        </div>
      </div>
      <div class="job-status col-md-2  p-0 m-0">
        <div class="status-title">
          <span>{{ $t('job-post-status') }}</span>
        </div>
        <div class="status-body" v-if="totalInfo">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="allStatus"
              id="allStatus"
              value="all"
              v-model="postStatus"
              @click="yStatus = ''"
              checked
            />
            <label class="form-check-label" for="allStatus"
              >{{ $t('all-jobs') }} ({{ totalInfo.total }})</label
            >
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="draftStatus"
              id="draftStatus"
              value="draft"
              @click="yStatus = 'Draft'"
              v-model="postStatus"
            />
            <label class="form-check-label" for="draftStatus"
              >{{ $t('draft') }} ({{ totalInfo.Draft }})</label
            >
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="openStatus"
              id="openStatus"
              value="open"
              @click="yStatus = 'Open'"
              v-model="postStatus"
            />
            <label class="form-check-label" for="openStatus"
              >{{ $t('open') }} ({{ totalInfo.Open }})</label
            >
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="closedStatus"
              id="closedStatus"
              value="closed"
              @click="yStatus = 'Closed'"
              v-model="postStatus"
            />
            <label class="form-check-label" for="closedStatus"
              >{{ $t('closed') }} ({{ totalInfo.Closed }})</label
            >
          </div>
        </div>
      </div>
      <div class="job-list col-md-10  pr-0 mr-0">
        <template v-if="active_grid == 'list'">
          <div class="col-md-12">
            <div class="table">
              <div class="row dash-list-header">
                <div class="col-md-3  pr-0">{{ $t('company') }}</div>
                <div class="col-md-3  pl-0 pr-0">{{ $t('job-location') }}</div>
                <div class="col-md-2  pl-0 pr-0">{{ $t('job-title') }}</div>
                <div class="col-md-2  pl-0 pr-0">{{ $t('status') }}</div>
                <div class="col-md-2  pl-0 pr-0">
                  {{ $t('date-of-creation') }}
                </div>
              </div>
              <div class="row dash-list-body">
                <div
                  class="table-row row col-md-12 pt-0"
                  v-for="job in jobs.results"
                  :key="job.id"
                >
                  <div
                    class="col-md-3  pr-0"
                    style="display: flex;align-items: center;"
                  >
                    <div class="empty-img" v-if="!job.company_logo">
                      {{ job.company_name.substring(0, 2) }}
                    </div>
                    <img
                      v-if="job.company_logo"
                      :src="job.company_logo"
                      alt="image"
                      class="job-image"
                    />
                    <div class="company-name">
                      <span>{{ job.company_name }}</span>
                    </div>
                  </div>
                  <div class="col-md-3 pr-0">
                    <div class="job-title">
                      <a @click="goToJob(job.id)">{{ job.title }}</a>
                    </div>
                    <div class="job-place">
                      <i class="fa fa-map-marker"></i>
                      <span>{{ job.location }}</span>
                    </div>
                  </div>
                  <div class="col-md-2 pr-0">
                    <div class="job-job_type">
                      <img :src="img('calendar-icon.png')" />
                      <span>{{ job.job_type }}</span>
                    </div>
                  </div>

                  <div class="col-md-2 pr-0">
                    <i
                      class="fa fa-circle"
                      v-bind:class="{
                        draft: job.status === 'Draft',
                        open: job.status === 'Open',
                        closed: job.status === 'Closed',
                      }"
                    ></i>
                    <span style="margin-left: 8px;font-size: 14px;">{{
                      job.status
                    }}</span>
                  </div>
                  <div class="col-md-2 pr-0">
                    <div class="job-edit">
                      <div class="job-posted">
                        <img :src="img('clock-icon.png')" />
                        <span>{{ job.posted }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="table-row-btn">
                    <img
                      :src="img('pen-icon.png')"
                      alt="image"
                      class="cursor"
                      @click="goToJob(job.id)"
                    />
                    <img
                      :src="img('close-icon.png')"
                      alt="image"
                      class="cursor"
                      v-b-modal.modal-1
                      v-if="job.status === 'Draft'"
                      @click="currentId = job.id"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <!-- grid -->
        <template v-if="active_grid == 'grid'">
          <div class="col-md-12">
            <div class="table">
              <div class="dash-job-grid">
                <div
                  class="dash-job-card"
                  v-for="job in jobs.results"
                  :key="job.id"
                >
                  <div class="row p-0 m-0 centerd">
                    <div class=" col-md-4 p-0 centerd">
                      <div
                        class="empty-img empty-img-grid"
                        v-if="!job.company_logo"
                      >
                        {{ job.company_name.substring(0, 2) }}
                      </div>
                      <img
                        v-if="job.company_logo"
                        :src="job.company_logo"
                        alt="image"
                        class="job-image-grid"
                      />
                    </div>
                    <div class="col-md-8 p-0">
                      <div class="col-md-12 p-0 company-name">
                        <p>{{ job.company_name }}</p>
                      </div>
                      <div class="col-md-12 p-0  job-title">
                        <a @click="goToJob(job.id)">{{ getStr(job.title) }}</a>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div class="col-md-12 pl-0 mb-2">
                    <img :src="img('map-pin-icon.png')" />
                    <span>{{ job.location }}</span>
                  </div>
                  <div class="col-md-12 pl-0 mb-2">
                    <img :src="img('calendar-icon-2.png')" />
                    <span>{{ job.job_type }}</span>
                  </div>

                  <div class="col-md-12 pl-0 mb-2">
                    <i
                      class="fa fa-circle"
                      v-bind:class="{
                        draft: job.status === 'Draft',
                        open: job.status === 'Open',
                        closed: job.status === 'Closed',
                      }"
                    ></i>
                    <span>{{ job.status }}</span>
                  </div>
                  <div class="col-md-12 pl-0 mb-2">
                    <img :src="img('clock-icon-2.png')" />
                    <span>{{ job.posted }}</span>
                  </div>
                  <div class="col-md-12 pl-0 pr-0 mb-2 justify-conten">
                    <img
                      :src="img('edit-icon-grid.png')"
                      class="pr-2 cursor"
                      alt="image"
                      @click="goToJob(job.id)"
                    />
                    <div>
                      <img
                        :src="img('delete-icon.png')"
                        alt="image"
                        v-b-modal.modal-1
                        class="cursor"
                        v-if="job.status === 'Draft'"
                        @click="currentId = job.id"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <div class="table-footer">
          <nav aria-label="Page navigation" class="m-pagination">
            <ul class="pagination justify-content-end">
              <li class="page-item">
                <a
                  class="page-link cursor"
                  @click="selectPage(pagination.currentPage - 1)"
                  v-bind:class="{
                    disabled:
                      pagination.currentPage == pagination.items[0] ||
                      pagination.items.length == 0,
                  }"
                >
                  <img :src="img('arrow-left-icon.png')" />
                </a>
              </li>

              <li class="is-space"></li>

              <li
                class="page-item"
                v-for="item in pagination.items"
                :key="item.id"
              >
                <a
                  class="page-link  cursor"
                  v-on:click="selectPage(item)"
                  v-bind:class="{ 'is-info': item == pagination.currentPage }"
                  >{{ item }}</a
                >
              </li>

              <li class="is-space"></li>

              <li>
                <a
                  class="page-link  cursor"
                  v-on:click="selectPage(pagination.currentPage + 1)"
                  v-bind:disabled="{
                    disabled:
                      pagination.currentPage ==
                        pagination.items[pagination.items.length - 1] ||
                      pagination.items.length == 0,
                  }"
                  ><img :src="img('arrow-right-icon.png')"
                /></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <b-modal
      id="modal-1"
      hide-header
      hide-footer
      size="md"
      centered
      body-class="p-0"
      no-close-on-backdrop
    >
      <p class="my-4">
        {{ $t('delete-job') }}
      </p>
      <a class="modal__ok" style="background: #3CB1E5;" @click="deleteJob()"
        >YES</a
      >
      <a class="modal__ok" style="background: #DD7B7B;" @click="hideModal()"
        >cancel</a
      >
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentId: null,
      postStatus: 'all',
      active_grid: 'list',
      yStatus: '',
      pagination: {
        range: 5,
        currentPage: 1,
        itemPerPage: 9,
        offset: 0,
        items: [],
      },
    }
  },
  async mounted() {
    await this.$store.dispatch('job/getJobList', {
      limit: this.pagination.itemPerPage,
      offset: this.pagination.offset,
      status: '',
    })
    await this.$store.dispatch('job/getJobSummary')
    this.yStatus == ''
  },
  computed: {
    jobs() {
      return this.$store.getters['job/jobList']
    },
    totalInfo() {
      return this.$store.getters['job/by_status']
    },
  },
  watch: {
    totalInfo: function(newVal, oldVal) {
      if (newVal.total != oldVal.total) {
        this.openList()
      }
    },
    yStatus: async function(newVal, oldVal) {
      if (newVal != oldVal) {
        this.pagination.currentPage = 1
        this.pagination.offset = 0
        await this.$store.dispatch('job/getJobSummary')
        await this.refreshJobList()
        this.openList()
      }
    },
  },
  methods: {
    getStr(text) {
      if (text.length > 40) {
        return text.substring(0, 40) + '...'
      } else {
        return text
      }
    },
    async refreshJobList() {
      await this.$store.dispatch('job/getJobList', {
        limit: this.pagination.itemPerPage,
        offset: this.pagination.offset,
        status: this.yStatus,
      })
    },
    async deleteJob() {
      await this.$store.dispatch('job/deleteJob', this.currentId)
      await this.refreshJobList()
      this.$root.$emit('bv::hide::modal', 'modal-1', '#btnShow')
    },
    openList() {
      this.buildPagination()
    },
    hideModal() {
      this.$root.$emit('bv::hide::modal', 'modal-1', '#btnShow')
    },
    img(image) {
      if (image == '') {
        return null
      } else {
        return require('../../assets/images/' + image)
      }
    },
    goToJob(index) {
      localStorage.setItem('limit', this.pagination.itemPerPage)
      localStorage.setItem('offset', this.pagination.offset)
      localStorage.setItem('status', this.yStatus)
      this.$router.push('/job/' + index)
    },
    buildPagination() {
      let numberOfPage = Math.ceil(
        this.jobs.count / this.pagination.itemPerPage
      )
      this.pagination.items = []
      for (var i = 0; i < numberOfPage; i++) {
        this.pagination.items.push(i + 1)
      }
    },
    async selectPage(item) {
      if (item <= 0) {
        item = this.pagination.items[this.pagination.items.length - 1]
      } else if (
        item > this.pagination.items[this.pagination.items.length - 1]
      ) {
        item = 1
      }
      this.pagination.currentPage = item
      this.pagination.offset = (item - 1) * this.pagination.itemPerPage
      await this.$store.dispatch('job/getJobList', {
        limit: this.pagination.itemPerPage,
        offset: this.pagination.offset,
        status: this.yStatus,
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.empty-img {
  color: #a4a4a4;
  width: 48px;
  height: 48px;
  margin: 23px 16px 23px 10px;
  background: #f5f5f5;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
}
.empty-img-grid {
  width: 72px;
  height: 72px;
  margin: 0px;
}
.job-title {
  a {
    font-size: 16px;
    line-height: 19px;
    color: #3cb1e5;
    cursor: pointer;
  }
}
.cursor-pointer {
  cursor: pointer;
}
.m-pagination {
  .is-space {
    width: 20px;
  }
}
p {
  padding: 0;
  margin: 0;
}
.justify-conten {
  display: flex;
  justify-content: flex-end;
}
.centerd {
  vertical-align: middle;
  align-items: center;
}
.dash-job-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  margin-bottom: 24px;
}
.dash-job-card {
  background: #ffffff;
  min-width: 230px;
  border-radius: 5px;
  padding: 16px;
  -webkit-box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  i {
    width: 20px;
    text-align: center;
    opacity: 0.5;
  }
  span {
    font-size: 16px;
    line-height: 19px;
    color: #747474;
    margin-left: 7px;
  }
}
.dash-job-avatar {
  width: 104px;
  text-align: center;
}
.active_grid {
  background: #3cb1e5;
  color: white;
}
.header-buttons {
  display: block;
}
.job-list-main-title {
  font-weight: 600;
  font-size: 40px;
  line-height: 65px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #404040;
}
.job-list {
  &-main {
    width: 100%;
  }
}
.job-list-title {
  a {
    font-size: 18px;
    line-height: 22px;
    color: #3cb1e5;
  }
}
.company-name {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #4d4f5c;
}
.job-place {
  font-size: 14px;
  line-height: 18px;
  color: #747474;
  span {
    margin-left: 8px;
  }
}
.job-job_type,
.job-posted {
  font-size: 16px;
  line-height: 20px;
  color: #747474;
  i {
    opacity: 0.5;
    font-size: 26px;
  }
  span {
    margin-left: 8px;
  }
}
.job-edit {
  display: block;
}
.draft {
  color: #ffc06a;
  opacity: 1 !important;
}
.open {
  color: #65d035;
  opacity: 1 !important;
}
.closed {
  color: #dd7b7b;
  opacity: 1 !important;
}
.danger {
  color: #f07777;
  margin-right: 5px;
}
.dash-list-header {
  background: #3cb1e5;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  color: #ffffff;
  border-radius: 6px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
}
.status-title {
  background: #3cb1e5;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  color: #ffffff;
  font-style: normal;
  font-weight: normal;
  border-radius: 6px;
  font-size: 14px;
  line-height: 17px;
}
.status-body {
  margin-top: 10px;
  background: #ffffff;
  padding-left: 20px;
  height: 200px;
  border-radius: 6px;
}
.dash-list-body {
  margin-top: 10px;
  background: #ffffff;
  padding: 20px;
  border-radius: 6px;
}
.table-row {
  color: #747474;
  align-items: center;
  position: relative;
}
.table-row-btn {
  position: absolute;
  right: 0px;
  display: grid;
  bottom: 34%;
  img {
    margin-bottom: 12px;
  }
}
.table-footer {
  margin-top: 75px;
}
.button-post {
  margin-bottom: 30px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  float: left;
  color: #4d4f5c;
}
.button-post-right {
  background: #ffffff;
  float: right;
  i {
    opacity: 0.5;
  }
}
.job-image {
  width: 48px;
  height: 48px;
  margin: 23px 16px 23px 10px;
}
.job-image-grid {
  width: 72px;
  height: 72px;
  min-height: 72px;
}
.form-check {
  padding-top: 22px;
  &-input {
    margin-top: 0px;
  }
}
.btn-group {
  button {
    padding: 0 !important;
    margin: 0 !important;
  }
}
.btn:focus,
.btn.focus {
  box-shadow: 0 0 0 0 white;
}
.modal__ok {
  display: inline-grid;
  vertical-align: middle;
  padding: 8px 30px;
  border-radius: 0px 0px 0px 4px;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  width: 50%;
  height: 70px;
  text-decoration: none;
  transition: background 0.1s linear, color 0.1s linear;
  cursor: pointer;
}
.modal__ok:hover {
  background-color: #fff;
  color: #333;
}
.my-4 {
  font-size: 22px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #4d4f5c;
  padding-left: 50px;
  padding-right: 50px;
}
.is-info {
  background-color: #3273dc;
  border-width: 0;
  color: #fff;
}
</style>
