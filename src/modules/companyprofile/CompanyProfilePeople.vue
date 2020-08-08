<template>
  <div class="people-body">
    <div>
      <!-- Login -->
      <table width="100%">
        <tbody>
          <tr class="people-body-hr">
            <td width="212" style="padding-left: 48px;">
              Photo
            </td>
            <td width="264" style="vertical-align: middle;">
              First & Last Name
            </td>
            <td width="210" style="vertical-align: middle;">
              Location
            </td>
            <td width="180" style="vertical-align: middle;">
              Position
            </td>
          </tr>
          <tr v-if="errorMsg">
            <td>{{ errorMsg }}</td>
          </tr>
          <tr class="people-body-row" v-for="info in peopleInfo" :key="info.id">
            <td width="212" style="padding-left: 48px;">
              <span v-if="info.image">
                <img :src="img(info.image)" class="people-image"
              /></span>
            </td>
            <td width="264" style="vertical-align: middle;">
              <div class="people-body-row-cell2">
                <span class="people-body-row-cell2-title1">
                  {{ info.first_name }} {{ info.last_name }}</span
                >
                <span class="people-body-row-cell2-title2">
                  {{ info.phone }}</span
                >
              </div>
            </td>
            <td width="210" style="vertical-align: middle;">
              {{ info.location }}
            </td>
            <td width="180" style="vertical-align: middle;">
              {{ info.job_title }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { URL } from '@/utils/constants'

export default {
  async mounted() {
    await this.$store.dispatch(
      'companyprofile/getCompanyPeopleList',
      localStorage.getItem('CompanyId')
    )
  },
  computed: {
    errorMsg() {
      return this.$store.getters['companyprofile/errorMsg']
    },
    peopleInfo() {
      return this.$store.getters['companyprofile/companyPeopleList']
    },
  },
  methods: {
    img(image) {
      if (image == '' || image == null) {
        return null
      } else {
        return URL.replace('/api', '') + image
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.people-image {
  background-color: white;
  border-radius: 50%;
  width: 74px;
  height: 74px;
  margin-left: auto;
  margin-right: auto;
}
.people-body {
  width: 100%;
  display: block;
  margin-top: 60px;
  &-hr {
    background: #3cb1e5;
    height: 48px;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    color: #ffffff;
  }
  &-row {
    height: 116px;
    &-cell2 {
      display: grid;
      &-title1 {
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        color: #4d4f5c;
      }
      &-title2 {
        margin-top: 12px;
        font-size: 15px;
        line-height: 21px;
        color: #43425d;
        opacity: 0.5;
      }
    }
  }
}
</style>
