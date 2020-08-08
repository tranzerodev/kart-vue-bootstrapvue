<template>
  <div class="account">
    <div id="root"></div>
    <div class="account-header">
      <div class="row col-md-12  p-0 m-0">
        <div class="account-header-stepper">
          <div class="stepper">
            <div
              v-bind:class="{
                'step-selected': this.$router.currentRoute.name === 'Home',
              }"
            >
              <router-link
                v-bind:to="company_main_url + '/home/'"
                class="routerLink"
              >
                <span>Home</span>
              </router-link>
            </div>
          </div>
          <div class="stepper">
            <div
              v-bind:class="{
                'step-selected': this.$router.currentRoute.name === 'People',
              }"
            >
              <router-link
                v-bind:to="company_main_url + '/people/'"
                class="routerLink"
              >
                <span>People</span>
              </router-link>
            </div>
          </div>
          <div class="stepper">
            <div
              v-bind:class="{
                'step-selected': this.$router.currentRoute.name === 'Benefits',
              }"
            >
              <router-link
                v-bind:to="company_main_url + '/benefits/'"
                class="routerLink"
              >
                <span>Benefits</span>
              </router-link>
            </div>
          </div>
          <div class="stepper">
            <div
              v-bind:class="{
                'step-selected': this.$router.currentRoute.name === 'Photos',
              }"
            >
              <router-link
                v-bind:to="company_main_url + '/photos/'"
                class="routerLink"
              >
                <span>Photos</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      company_main_url: '/company-profile/info',
    }
  },
}
</script>
<style lang="scss" scoped>
.routerLink {
  text-decoration: none;
  color: inherit;
}
@media screen and (max-width: 1440px) {
  .account {
    max-width: 1050px;
  }
}
@media screen and (max-width: 1366px) {
  .account {
    max-width: 850px;
  }
}
@media screen and (max-width: 1280px) {
  .account {
    max-width: 760px;
  }
}
@media screen and (max-width: 1024px) {
  .account {
    max-width: 600px;
  }
}
@media screen and (max-width: 800px) {
  .account {
    max-width: 681px;
  }
}
@media screen and (max-width: 768px) {
  .account {
    max-width: 661px;
  }
}
.account {
  width: 100%;
}
.account-header-stepper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.stepper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer;
  margin-right: 40px;
  div {
    display: flex;
    height: 40px;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0);
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    align-items: center;
    color: #3f3f3f;
    opacity: 0.5;
    &.step-selected {
      opacity: 0.9 !important;
      border-bottom: 5px solid #3cb1e5;

      i {
        color: #ffffff;
      }
    }
    i {
      color: #3cb1e5;
    }
  }
  span {
    width: 100%;
    text-align: center;
  }
}
.step-line {
  width: 40px;
}
table,
th,
td {
  border: 1px solid black;
}
</style>
