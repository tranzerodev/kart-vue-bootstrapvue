<template>
  <div class="candidates-header">
    <div class="candidates-header-img">
      <label for="imgProfile" class="image-profile">
        <img :src="img" alt="logo" />
        <span class="edit-image-lnk"> <i class="fa fa-pencil"></i>Edit </span>
      </label>
      <input
        type="file"
        name="imgProfile"
        id="imgProfile"
        @change="saveImageProfile($event.target)"
      />
    </div>
    <div class="candidates-header-body">
      <h2>{{ profile.first_name || '' }} {{ profile.last_name || '' }}</h2>
      <span>{{ profile.job_title || '' }}</span>
    </div>
    <!-- <div>Candidates header</div> -->
  </div>
</template>
<script>
export default {
  props: ['image'],
  computed: {
    img() {
      return this.profile.image
        ? this.profile.image
        : require('../../assets/images/' + this.image)
    },
    profile() {
      if (this.$route.params.id) {
        return this.$store.getters['candidates/candidateProfile']
      } else {
        return {
          first_name: '',
          image: null,
          last_name: '',
          job_title: '',
        }
      }
    },
  },
  methods: {
    saveImageProfile(target) {
      let file = target.files[0]
      this.$store.dispatch('candidates/addCandidateResume', {
        id: this.id,
        account: this.id,
        profile_summary: this.profile.profile_summary,
        email: this.profile.email,
        location: this.profile.location,
        phone: this.profile.phone,
        personal_website: this.profile.personal_website,
        image: file,
        skills: this.skills,
      })
    },
  },
}
</script>
<style lang="scss" scoped>
#imgProfile {
  display: none;
}
.candidates-header {
  height: 125px;
  // width: 100%;
  background: #3cb1e5;
  color: #ffffff;
  display: flex;
  padding: 0 40px;
  margin-bottom: 100px;
  border-radius: 5px 5px 0 0;
  .candidates-header-img {
    width: 210px;
    align-content: center;
    margin-top: 20px;
    .image-profile {
      cursor: pointer;
      img {
        width: 180px;
        height: 180px;
        border-radius: 100px;
        object-fit: cover;
      }
      .edit-image-lnk {
        font-weight: bold;
        position: absolute;
        left: 200px;
        top: 340px;
        border-radius: 0 0 100px 100px;
        padding-top: 2px;
        padding-left: 48px;
        padding-right: 48px;
        padding-bottom: 8px;
        background: rgba(255, 255, 255, 0.6);
        color: #29789b;
      }
    }
  }
  .candidates-header-body {
    padding-top: 34px;
    padding-left: 40px;
    h2 {
      font-size: 25px;
      font-weight: bold;
      align-content: center;
    }
  }
}
</style>
