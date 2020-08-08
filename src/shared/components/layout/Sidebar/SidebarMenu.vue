<template>
  <div>
    <ul class="components">
      <li>
        <router-link to="/dashboard">
          <i>
            <img src="../../../../assets/images/login.svg" />
          </i>
        </router-link>
      </li>
      <li>
        <router-link
          to="/dashboard"
          v-b-tooltip.left.hover
          title="HR Management"
        >
          <i>
            <img src="@/assets/images/briefcase.svg" />
          </i>
        </router-link>
      </li>
      <li>
        <router-link to="#" v-b-tooltip.left.hover title="Compensation">
          <i>
            <img src="@/assets/images/wallet.svg" />
          </i>
        </router-link>
      </li>
      <li>
        <router-link to="#" v-b-tooltip.left.hover title="Documents">
          <i>
            <img src="@/assets/images/document.svg" />
          </i>
          <!-- <s2h id="nav_document"></s2h> -->
        </router-link>
      </li>
      <li>
        <router-link to="#" v-b-tooltip.left.hover title="Reporting">
          <i>
            <img src="@/assets/images/megaphone-icon.svg" />
          </i>
        </router-link>
      </li>
    </ul>
    <ul class="sidebar-bottom">
      <li>
        <router-link to="#" v-b-tooltip.left.hover title="Help">
          <i>
            <img src="@/assets/images/help.svg" />
          </i>
        </router-link>
      </li>
      <li>
        <router-link
          to="/account/info/general"
          v-b-tooltip.left.hover
          title="Settings"
        >
          <i>
            <img src="@/assets/images/gears.svg" />
          </i>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'SidebarMenu',
  data() {
    return { inputs: { email: '' }, theme: 'aqua' }
  },
}
</script>
<style lang="scss" scoped>
ul {
  border-bottom: 1px solid #47748b;
  padding: 0;

  li {
    list-style: none;

    a {
      padding: 23px;
      font-size: 1.1em;
      display: block;
    }
  }
}
.sidebar-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
}
@media screen and (max-height: 620px) {
  .sidebar-bottom {
    position: relative;
  }
}
</style>
