<template>
  <b-container class="px-5" fluid style="margin-top: 90px">
    <b-row class="text-center">
      <p class="display-2 text-weight-bold col-sm-12 mb-0">Great!</p>
      <p class="display-2 text-weight-bold col-sm-12 mb-0">
        Tell us who you are
      </p>
    </b-row>
    <b-row class="mt-4 pt-4 mb-4 pb-4">
      <b-col v-for="role in roleItems" :key="role.key">
        <SelectionCard
          :cardId="role.id"
          :isActive="currentRole === role.id"
          :labelValue="role.name"
          :imageUrl="role.imageUrl"
          height="220px"
          @select-card="handleSelectRole"
        ></SelectionCard>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="d-flex justify-content-center">
        <b-button
          variant="outline-primary"
          class="border-2 px-5 py-2"
          @click="handleRegisterRole"
          id="login-button"
        >
          <span>
            NEXT
            <i class="fa fa-arrow-right"></i>
          </span>
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapGetters } from 'vuex'
import SelectionCard from '@/shared/components/SelectionCard'
export default {
  name: 'AuthSelectRole',
  components: {
    SelectionCard,
  },
  data() {
    return {
      currentRole: 0,
      roleItems: [],
    }
  },
  created() {},
  computed: {
    ...mapGetters({
      role: 'register/getRole',
    }),
  },
  methods: {
    handleSelectRole(roleId) {
      this.currentRole = roleId
    },
    handleRegisterRole() {
      this.$store.dispatch('register/setRole', this.currentRole)
      if (this.role && this.role.routing) {
        this.$router.push(this.role.routing)
      }
    },
  },
  mounted() {
    this.roleItems = this.$store.state.register.roleList
  },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch('register/clearRegistrationStatus')
    next()
  },
}

// $('.progressbar li.active').prevAll().addClass('bar')
</script>

<style lang="scss" scoped></style>
