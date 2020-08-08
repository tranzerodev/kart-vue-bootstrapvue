<template>
  <div class="main">
    <Sidebar />
    <Header />
    <div class="main-content">
      <div class="main-content-body">
        <table width="100%">
          <tbody>
            <tr class="main-content-body-hr">
              <td width="24%" style="position: relative;">
                <img class="fb-image-profile" :src="companyDetails.logo" />
              </td>
              <td width="70%" style="vertical-align: middle;">
                <div>
                  <span class="main-content-body-title">{{
                    companyDetails.name
                  }}</span>
                  <span class="main-content-body-subtitle">{{
                    companyDetails.description
                  }}</span>
                </div>
              </td>

              <td width="6%" style="vertical-align: middle;">
                <div>
                  <img
                    v-b-modal.modal-send-link
                    :src="img('edit-icon.png')"
                    class="cursor"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td width="294" class="main-content-body-leftside">
                <div class="main-content-body-leftside-info">
                  <div style="height:100px;">&nbsp;</div>
                  <div class="main-content-body-leftside-info-div">
                    <span class="main-content-body-leftside-info-title">
                      Contact information
                    </span>
                    <span>
                      <img
                        class="main-content-body-leftside-info-img1 cursor"
                        :src="
                          img(showbtn ? 'save-btn-icon.png' : 'edit-icon.png')
                        "
                        @click="saveContact(1)"
                    /></span>
                  </div>
                  <div class="main-content-body-leftside-body">
                    <div>
                      <span> <img :src="img('email-icon.png')"/></span>

                      <span class="main-content-body-leftside-body-title2">
                        <input
                          type="text"
                          name="username"
                          placeholder="description"
                          v-bind:class="{
                            'main-content-body-leftside-body-disabled': !this
                              .showbtn,
                          }"
                          v-model="companyDetails.email"
                          :disabled="!showbtn"
                        />
                      </span>
                    </div>

                    <div>
                      <span> <img :src="img('placeholder-icon.png')"/></span>
                      <span class="main-content-body-leftside-body-title2">
                        <input
                          type="text"
                          name="username"
                          placeholder="description"
                          v-bind:class="{
                            'main-content-body-leftside-body-disabled': !this
                              .showbtn,
                          }"
                          v-model="companyDetails.location"
                          :disabled="!showbtn"
                        />
                      </span>
                    </div>
                    <div>
                      <span> <img :src="img('phone-icon.png')"/></span>
                      <span class="main-content-body-leftside-body-title2">
                        <input
                          type="text"
                          name="username"
                          placeholder="description"
                          v-bind:class="{
                            'main-content-body-leftside-body-disabled': !this
                              .showbtn,
                          }"
                          v-model="companyDetails.phone"
                          :disabled="!showbtn"
                        />
                      </span>
                    </div>
                    <div style="padding-bottom: 24px;">
                      <span> <img :src="img('internet-icon.png')"/></span>
                      <span class="main-content-body-leftside-body-title2">
                        <input
                          type="text"
                          name="username"
                          placeholder="description"
                          v-bind:class="{
                            'main-content-body-leftside-body-disabled': !this
                              .showbtn,
                          }"
                          v-model="companyDetails.website"
                          :disabled="!showbtn"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </td>
              <td class="main-content-body-main">
                <router-view></router-view>
              </td>
              <td width="60" class="main-content-body-main">&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <PlainFooter />
    <b-modal
      id="modal-send-link"
      ref="modal"
      title="Update Company  Details"
      hide-footer
      no-close-on-esc
      no-close-on-backdrop
    >
      <table width="470">
        <tbody>
          <tr>
            <td style="vertical-align: middle;">
              <input
                type="text"
                class="form-control"
                name="username"
                placeholder="description"
                v-model="companyDetails.description"
              />
            </td>
            <td>
              <span style="float: right;">
                <label for="imgProfile" class="image-profile">
                  <img :src="img('plus-icon.png')" class="cursor" />
                </label>
                <input
                  type="file"
                  name="imgProfile"
                  id="imgProfile"
                  @change="onFileChanged"
                />
              </span>
            </td>
          </tr>
          <tr>
            <td colspan="3">&nbsp;</td>
          </tr>
          <tr>
            <td colspan="3" style=" text-align: center;">
              <button
                type="button"
                class="btn btn-lg btn-large btn-primary modal-save-btn"
                style="background-color: #3CB1E5 !important;"
                @click="saveContact(2)"
              >
                Save
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </b-modal>
  </div>
</template>
<script>
import Sidebar from '../../shared/components/layout/Sidebar/Sidebar'
import Header from '../../shared/components/layout/Header'
import PlainFooter from '../../shared/components/layout/PlainFooter'

export default {
  data() {
    return {
      image: null,
      url: null,
      showbtn: false,
    }
  },
  components: {
    Sidebar,
    Header,
    PlainFooter,
  },
  computed: {
    companyDetails() {
      return this.$store.getters['companyprofile/companyDetails']
    },
  },
  async mounted() {
    if (
      this.$store.getters['companyprofile/companyDetails'].name === undefined
    ) {
      await this.$store.dispatch(
        'companyprofile/getCompanyDetails',
        localStorage.getItem('CompanyId')
      )
    }
  },
  methods: {
    async saveContact(index) {
      var postData
      postData = new FormData()
      if (index == 2 || this.showbtn == true) {
        if (index == 1) {
          postData.append('company', localStorage.getItem('CompanyId'))
          postData.append('location', this.companyDetails.location)
          postData.append('email', this.companyDetails.email)
          postData.append('phone', this.companyDetails.phone)
          postData.append('website', this.companyDetails.website)
          this.showbtn = !this.showbtn
        } else {
          if (this.image != null) {
            postData.append('logo', this.image, this.image.name)
            this.image = null
          }
          postData.append('company', localStorage.getItem('CompanyId'))
          postData.append('description', this.companyDetails.description)
        }
        await this.$store.dispatch('companyprofile/updateCompany', postData)
      } else if (index == 1) {
        this.showbtn = !this.showbtn
      }
    },
    onFileChanged(event) {
      this.image = event.target.files[0]
      this.url = URL.createObjectURL(this.image)
    },
    img(image) {
      if (image == '') {
        return null
      } else {
        return require('../../assets/images/' + image)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
input {
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  background-color: transparent;
  height: 24px;
}
.fb-image-profile {
  background-color: white;
  border-radius: 50%;
  position: absolute;
  width: 180px;
  height: 180px;
  left: 0;
  right: 0;
  top: 20px;
  margin-left: auto;
  margin-right: auto;
}
#imgProfile {
  display: none;
}
label {
  padding: 0px;
  margin: 0px;
}

@media screen and (max-width: 1440px) {
  .main-content-body {
    max-width: 1203px;
  }
}
@media screen and (max-width: 1366px) {
  .main-content-body {
    max-width: 1163px;
  }
}
@media screen and (max-width: 1280px) {
  .main-content-body {
    max-width: 1090px;
  }
}
@media screen and (max-width: 1024px) {
  .main-content-body {
    max-width: 872px;
  }
}
@media screen and (max-width: 800px) {
  .main-content-body {
    max-width: 681px;
  }
}
@media screen and (max-width: 768px) {
  .main-content-body {
    max-width: 661px;
  }
}
.main-content {
  display: flex;
  margin-left: 40px;
  padding-top: 80px;
  background: #d5f6ff;
  background-size: cover;
  min-height: 920px;
  width: 100%;
  &-body {
    width: 100%;
    margin: 0 auto;
    max-width: 86vw;
    padding-bottom: 60px;
    &-title {
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      color: #ffffff;
    }
    &-subtitle {
      margin-top: 12px;
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;
      color: #ffffff;
    }
    &-hr {
      background: #3cb1e5;
      height: 120px;
      div {
        display: grid;
        vertical-align: middle;
      }
    }
    &-leftside {
      background: #ffffff;
      max-width: 294px;
      &-info {
        width: 200px;
        margin: 0 auto;

        &-img1 {
          float: right;
        }

        &-title {
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          align-items: center;
          color: #9a9a9a;
        }
        &-div {
          margin-bottom: 12px;
        }
      }
      &-body {
        &-disabled {
          border: 0;
        }
        background: #f4f4fc;
        border-radius: 4px;
        div {
          padding-left: 15px;
          padding-top: 24px;
        }
        &-title2 {
          font-size: 12px;
          line-height: 14px;
          color: #000000;
          margin-left: 11px;
        }
      }
    }
    &-main {
      background: #ffffff;
    }
  }
}
footer {
  margin-left: 80px;
}
td {
  vertical-align: top;
}
</style>
