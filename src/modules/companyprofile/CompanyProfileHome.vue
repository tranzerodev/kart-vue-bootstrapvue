<template>
  <div>
    <div class="home-body">
      <!-- Login -->
      <div class="home-body-header">
        <div style="display: flow-root;">
          <div class="home-body-header-leftside">
            <label class="home-body-title">Overview</label>
          </div>
          <div class="home-body-header-rightside">
            <img
              :src="
                showHomebtn
                  ? require('../../assets/images/save-btn-icon.png')
                  : require('../../assets/images/edit-icon.png')
              "
              @click="saveHomeContact()"
              class="cursor"
            />
          </div>
        </div>
        <div>
          <div class="row col-md-12">
            <div class="col-md-3 form-group p-0 m-0">
              Company size
            </div>
            <div class="col-md-3 form-group  p-0 m-0">
              Industry
            </div>
            <div class="col-md-3 form-group  p-0 m-0">
              Founded
            </div>
            <div class="col-md-3 form-group  p-0 m-0">Revenue</div>
          </div>
          <div class="row col-md-12">
            <div class="col-md-3 form-group p-0 m-0" style="display: flex;">
              +<input
                type="text"
                name="company_size"
                v-bind:class="{
                  'home-body-nextrow-disabled': !this.showHomebtn,
                }"
                v-model="companyDetails.company_size"
                style="width: 32px;"
                :disabled="!showHomebtn"
              />
              employees
            </div>
            <div class="col-md-3 form-group p-0 m-0">
              <input
                type="text"
                name="industry"
                v-bind:class="{
                  'home-body-nextrow-disabled': !this.showHomebtn,
                }"
                v-model="companyDetails.industry"
                :disabled="!showHomebtn"
              />
            </div>
            <div class="col-md-3 form-group p-0 m-0">
              <input
                type="text"
                name="founded"
                v-bind:class="{
                  'home-body-nextrow-disabled': !this.showHomebtn,
                }"
                v-model="companyDetails.founded"
                :disabled="!showHomebtn"
              />
            </div>
            <div class="col-md-3 form-group p-0 m-0">
              <input
                type="text"
                name="revenue"
                v-bind:class="{
                  'home-body-nextrow-disabled': !this.showHomebtn,
                }"
                v-model="companyDetails.revenue"
                :disabled="!showHomebtn"
              />
            </div>
          </div>
          <div class=" col-md-12  p-0 m-0">
            <div
              style="font-size: 16px; line-height: 24px;color: #535353;opacity: 0.9;"
            >
              {{ companyDetails.description }}
              <!-- <a href="">Learn more</a> -->
            </div>
          </div>
        </div>
      </div>

      <div class="home-body-div">
        <div class="home-body-div2">
          <div class="col-md-12  p-0 m-0 d-flex align-items-center">
            <div class="col-md-1 form-group p-0 m-0">
              <img :src="companyDetails.logo" class="logo-image" />
            </div>
            <div class="col-md-9 form-group p-0 m-0">
              <input
                type="text"
                class="w-100 mb-1"
                v-model="news.title"
                placeholder="Write you title of news "
              />
              <input
                type="text"
                class="w-100 mb-1"
                v-model="news.content"
                placeholder="Write you company news"
              />
            </div>
            <div class="col-md-1 form-group p-0 m-0  text-right">
              <img
                v-b-modal.modal-get-link
                src="../../assets/images/attachment-bg-icon.png"
                class="cursor"
              />
            </div>
            <div class="col-md-1 form-group p-0 m-0 text-right">
              <img
                src="../../assets/images/right-arrow-icon.png"
                @click="saveCompanyPosts()"
                class="cursor"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="home-body-div">
        <div class="home-body-div2" v-for="post in posts" :key="post.id">
          <div>
            <div class="col-md-12  p-0 m-0 d-flex align-items-center">
              <div class="col-md-1 form-group p-0 m-0">
                <img :src="companyDetails.logo" class="logo-image" />
              </div>
              <div class="col-md-10 form-group p-0 m-0">
                <div style="width:100%;display: flex;align-items: center;">
                  <div style="display: grid;">
                    <span class="home-body-hr2-span-1">{{
                      post.company_name
                    }}</span>
                    <span class="home-body-hr2-span-2">
                      {{ format_date(post.date_modified) }}</span
                    >
                  </div>
                  <span
                    style="width:80%;text-align: center;;"
                    class="home-body-hr2-span-1"
                    >{{ post.title }}</span
                  >
                </div>
              </div>
              <div class="col-md-1 form-group p-0 m-0 text-right">
                <img
                  src="../../assets/images/more-icon.png"
                  @click="saveCompanyPosts()"
                  class="cursor"
                />
              </div>
            </div>
            <div class="col-md-12  p-0 m-0 align-items-center">
              {{ post.content }}
              <a
                v-if="!checkURL(post.content_url) && post.content_url"
                :href="post.content_url"
                target="_blank"
                rel="noopener"
                >read more</a
              >
              <div class="mt-2">
                <img
                  v-if="checkURL(post.content_url)"
                  :src="post.content_url"
                  style="width:99%;"
                  class="cursor"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      &nbsp;
    </div>
    <b-modal
      id="modal-get-link"
      ref="modal-get-link"
      title="Insert Hyperlink"
      hide-footer
      size="lg"
      no-close-on-esc
      no-close-on-backdrop
      centered
    >
      <input type="text" v-model="content_url" class="modal-input" />
      <button type="button" class="btn  modal-save-btn" @click="addlink">
        Add link
      </button>

      <button type="button" class="btn  modal-save-btn" @click="close()">
        Cancel
      </button>
    </b-modal>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  data() {
    return {
      showHomebtn: false,
      news: {
        company: 1,
        title: null,
        content: '',
        content_url: null,
      },
      content_url: null,
    }
  },
  computed: {
    posts() {
      return this.$store.getters['companyprofile/companyPostList']
    },
    companyDetails() {
      return this.$store.getters['companyprofile/companyDetails']
    },
  },
  async mounted() {
    await this.$store.dispatch(
      'companyprofile/getCompanyPostList',
      localStorage.getItem('CompanyId')
    )
  },
  methods: {
    addlink() {
      this.news.content_url = this.content_url
      this.$refs['modal-get-link'].hide()
    },
    close() {
      this.$refs['modal-get-link'].hide()
      this.news.content_url = null
      this.content_url = null
    },
    format_date(value) {
      if (value) {
        return moment(String(value)).format('YYYY-MM-DD')
      }
    },
    checkURL(url) {
      if (url == null) {
        return false
      } else {
        return url.match(/\.(jpeg|jpg|gif|png)$/) != null
      }
    },
    async saveHomeContact() {
      if (this.showHomebtn == true) {
        var postData
        postData = new FormData()
        postData.append('company', localStorage.getItem('CompanyId'))
        postData.append('founded', this.companyDetails.founded)
        postData.append('company_size', this.companyDetails.company_size)
        await this.$store.dispatch('companyprofile/updateCompany', postData)
      }
      this.showHomebtn = !this.showHomebtn
    },
    async saveCompanyPosts() {
      await this.$store.dispatch('companyprofile/saveCompanyPosts', this.news)
    },
  },
}
</script>
<style lang="scss" scoped>
.logo-image {
  width: 60px;
  height: 60px;
}
input {
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  background-color: transparent;
  height: 24px;
}
.modal-input {
  border: 1px solid black;
  border-radius: 3px;
  background-color: white;
  color: var(--fc-dark);
  height: 38px;
  padding: 0px;
  vertical-align: middle;
  width: 550px;
}
.modal-save-btn {
  border-color: var(--primary);
  color: var(--info);
  margin-left: 16px;
}
.edit-text {
  background-color: transparent;
  border: 0;
  width: 100%;
}
.home-body-nextrow-disabled {
  border: 0;
}
.home-body {
  width: 100%;
  margin-top: 60px;
  &-div {
    margin-top: 20px;
    background: #f9f9f9;
    opacity: 0.9;
    border-radius: 4px;
  }
  &-div2 {
    padding: 12px 24px 12px 24px;
  }
  &-hr2 {
    align-items: center;
    font-weight: 500;
    line-height: 25px;
    background: #f9f9f9;
    opacity: 0.9;
    border-radius: 4px;
    text-align: center;
    &-span-1 {
      font-size: 16px;
      color: #4e4e4e;
    }
    &-span-2 {
      font-size: 12px;
      color: #9a9a9a;
    }
  }
  &-hr {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #1b1b1b;
    opacity: 0.9;
  }
  &-nextrow {
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #535353;
    opacity: 0.9;
  }
  &-header {
    background: #f9f9f9;
    opacity: 0.9;
    border-radius: 4px;
    padding: 24px;
    &-leftside {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      display: flex;
      align-items: center;
      color: #9a9a9a;
      opacity: 0.9;
      float: left;
    }
    &-rightside {
      float: right;
    }
  }
}
</style>
