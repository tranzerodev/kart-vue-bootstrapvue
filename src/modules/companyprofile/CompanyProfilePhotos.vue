<template>
  <div>
    <div class="photo-body">
      <!-- Login -->
      <div class="photo-body-title">
        <label class="photo-body-label">&nbsp;</label>
        <span style="float: right;">
          <label for="imgProfile" class="image-profile">
            <img v-b-modal.modal-send-link-photo :src="img('plus-icon.png')" />
          </label>
        </span>
      </div>
      <div class="photo-body-main" v-if="photos.length > 0">
        <div
          v-for="(photo, index) in photos.slice(0, showAll)"
          v-bind:key="'A12' + index"
        >
          <span>
            <!--   <i
              class="fa fa-close"
              aria-hidden="true"
              @click="deletePhoto(photo.id)"
            ></i> -->
            <img
              class="photo-body-main-img hover-shadow"
              :src="photo.content_url"
              :title="photo.title"
              @click="
                openModal()
                currentSlide(index + 1)
              "
          /></span>
        </div>
      </div>
      <a v-if="showAll == 6" class="show__all" @click="showAll = photos.length"
        >Show all {{ photos.length }} photos</a
      >
      <a v-else class="show__all" @click="showAll = 6">Show less</a>
    </div>
    <b-modal
      id="modal-send-link-photo"
      ref="modal-link-photo"
      title="Create Photo"
      hide-footer
      no-close-on-esc
      no-close-on-backdrop
    >
      <table width="470">
        <tbody>
          <tr>
            <td style="vertical-align: middle;">
              <label for="title">&nbsp;Title</label>
              <input
                type="text"
                class="form-control"
                id="title"
                v-model="photoInfo.title"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="content_url">&nbsp;Content url</label>
              <input
                type="text"
                class="form-control"
                id="content_url"
                v-model="photoInfo.content_url"
              />
              <div v-if="errorMsg" class="invalid-feedback">
                <img
                  src="../../assets/images/info-icon.png"
                  style="margin-right: 10px;"
                />
                {{ errorMsg }}
              </div>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td style=" text-align: center;">
              <button
                type="button"
                class="btn btn-lg btn-large btn-primary modal-save-btn"
                style="background-color: #3CB1E5 !important;"
                @click="saveAddPhoto()"
              >
                Save
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </b-modal>
    <b-modal
      id="modal-slider"
      ref="modal-slider"
      hide-footer
      hide-header
      no-close-on-esc
      no-close-on-backdrop
      size="lg"
      centered
      v-if="xIndex"
      body-class="p-0"
      content-class="bg-transparent border-0"
    >
      <div class="modal-main">
        <span class="close cursor" @click="closeModal()">
          <i class="fa fa-close" aria-hidden="true"></i>
        </span>
        <div class="modal__content">
          <div class="mySlides displayBlock">
            <img
              v-if="photos[xIndex - 1] != undefined"
              :src="photos[xIndex - 1].content_url"
              :title="photos[xIndex - 1].title"
              class="modal__img"
            />
          </div>
          <!-- Next/previous controls -->
          <a class="prev" @click="plusSlides(-1)">&#10094;</a>
          <a class="next" @click="plusSlides(1)">&#10095;</a>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      photoInfo: {
        company: 1,
        title: '',
        content_url: '',
      },
      xIndex: null,
      myModal: null,
      showAll: 6,
    }
  },
  async mounted() {
    await this.$store.dispatch(
      'companyprofile/getCompanyPhotosList',
      localStorage.getItem('CompanyId')
    )
  },
  computed: {
    errorMsg() {
      return this.$store.getters['companyprofile/errorMsg']
    },
    photos() {
      return this.$store.getters['companyprofile/companyPhotosList']
    },
  },
  methods: {
    //open Modal form
    openModal() {
      this.$root.$emit('bv::show::modal', 'modal-slider', '#btnShow')
    },
    closeModal() {
      this.$root.$emit('bv::hide::modal', 'modal-slider', '#btnShow')
    },
    // Next/previous controls
    plusSlides(n) {
      this.xIndex += n
      if (this.xIndex > this.photos.length) {
        this.xIndex = 1
      }
      if (this.xIndex < 1) {
        this.xIndex = this.photos.length
      }
    },
    // Thumbnail image controls
    currentSlide(n) {
      this.xIndex = n
    },
    async saveAddPhoto() {
      await this.$store.dispatch('companyprofile/addCompanyPhotos', {
        company: this.photoInfo.company,
        content_url: this.photoInfo.content_url,
        title: this.photoInfo.title,
      })
      if (this.errorMsg == '') {
        this.$root.$emit('bv::hide::modal', 'modal-link-photo', '#btnShow')
        this.photoInfo.content_url = null
        this.photoInfo.title = null
      }
    },
    async deletePhoto(index) {
      await this.$store.dispatch('companyprofile/deletePhoto', {
        company: 1,
        photoId: index,
      })
      this.$store.getters['companyprofile/companyPhotosList']
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
.modal__img {
  width: 100%;
  height: 75vh;
  border-radius: 6px;
}
.displayBlock {
  display: block !important;
}
.row > .column {
  padding: 0 8px;
}

.row:after {
  content: '';
  display: table;
  clear: both;
}

/* Create four equal columns that floats next to eachother */
.column {
  float: left;
  width: 25%;
  display: none;
}

/* The Modal (background) */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  &-main {
    width: 100%;
    max-width: 75vw;
    max-height: 75vh;
    margin: 0 auto;
  }
}

/* Modal Content */
.modal__content {
  position: relative;
  background: transparent;
  margin: auto;
  padding: 0;
  width: 95%;
  max-width: 75vw;
  max-height: 75vh;
  display: block;
}
/* Hide the slides by default */
.mySlides {
  display: none;
}

.close:hover,
.close:focus {
  color: #999;
  text-decoration: none;
  cursor: pointer;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}
/* Caption text */
.caption-container {
  text-align: center;
  background-color: black;
  padding: 2px 16px;
  color: white;
}

img.demo {
  opacity: 0.6;
}
.demo {
  width: 100px;
  height: 100px;
}

.active,
.demo:hover {
  opacity: 1;
}

img.hover-shadow {
  transition: 0.3s;
}

.hover-shadow:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.image-profile {
  cursor: pointer;
  img {
    object-fit: cover;
  }
}
#imgProfile {
  display: none;
}
label {
  margin: 0px !important;
  padding: 0px !important;
}
.photo-body {
  width: 100%;
  display: block;
  margin-top: 60px;
  &-title {
    align-items: center;
    justify-content: center;
    height: 40px;
  }
  &-label {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    align-items: center;
    color: #9a9a9a;
  }
  &-main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 15px;
    margin-bottom: 15px;
    &-img {
      width: 100%;
      height: 30vh;
      border-radius: 6px;
    }
  }
}
.invalid-feedback {
  display: block;
}
.show__all {
  text-align: center;
  width: 100%;
  margin-bottom: 15px !important;
  max-width: 240px;
  margin: 0 auto;
  display: block;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  align-items: center;
  text-align: center;
  text-decoration-line: underline;
  color: #9a9a9a;
  opacity: 0.9;
  cursor: pointer;
}
a:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: '';
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: black;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  text-decoration-line: underline;
  width: 0;
}
</style>
