<template>
  <div>
    <div class="benefit-body">
      <!-- Login -->
      <label class="benefit-body-title">Company benefits</label>
      <table width="100%" class="benefit-body-table">
        <tbody v-if="BenefitsInfo">
          <div
            v-for="benefit in BenefitsInfo"
            :key="benefit.id"
            class="benefit-body-div"
          >
            <tr class="benefit-body-hr">
              <td width="60" style="padding-left: 24px;">
                <span> <img :src="img(benefit.benefit)"/></span>
              </td>
              <td width="670" style="vertical-align: middle;">
                <span class="benefit-body-hr-title"> {{ benefit.name }}</span>
              </td>
              <td width="136" style="vertical-align: middle;">
                <div>
                  <span
                    class="fa-stack fa-xl rate-used"
                    v-for="index in 5"
                    :key="index"
                  >
                    <i v-bind:class="isRenderedRating(index, benefit.rank)"></i>
                  </span>
                </div>
              </td>
            </tr>
            <tr class="benefit-body-hr2">
              <td colspan="3" style="padding-left: 24px;padding-right: 40px;">
                <span class="benefit-body-hr-subTitle">
                  {{ benefit.decription }}</span
                >
              </td>
            </tr>
            <hr />
          </div>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    BenefitsInfo() {
      return this.$store.getters['companyprofile/companyBenefitsList']
    },
  },
  async mounted() {
    await this.$store.dispatch(
      'companyprofile/getCompanyBenefitsList',
      localStorage.getItem('CompanyId')
    )
  },
  methods: {
    isRenderedRating(index, rate) {
      return index <= rate
        ? 'fa fa-star fa-stack-1x fa-color'
        : ' fa fa-star-o fa-stack-1x fa-color'
    },
    img(image) {
      if (image == '' || image == undefined) {
        return null
      } else {
        return require('../../assets/images/' + image + '-icon.png')
      }
    },
  },
}
</script>
<style lang="scss" scoped>
hr {
  border-bottom: 1px solid #95ebeb;
  width: 815px;
}
.fa-color {
  color: #ffd175;
}
.rate-used {
  width: 16px;
  margin-right: 4px;
}
.benefit-body {
  width: 100%;
  max-width: 866px;
  display: block;
  margin-top: 60px;
  &-table {
    margin-bottom: 24px;
    background: #f9f9f9;
    opacity: 0.9;
    border-radius: 4px;
  }
  &-title {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: #9a9a9a;
    opacity: 0.9;
  }

  &-hr {
    height: 56px;
    vertical-align: middle;
    &-title {
      font-weight: 500;
      font-size: 16px;
      line-height: 25px;
      display: flex;
      align-items: center;
      color: #3cb1e5;
    }
    &-subTitle {
      font-size: 16px;
      line-height: 24px;
      color: #535353;
      opacity: 0.9;
    }
  }
  &-hr2 {
    margin-bottom: 12px;
  }
}
</style>
