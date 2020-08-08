<template>
  <b-dropdown
    id="dropdown-1"
    :text="lang.toUpperCase()"
    class="m-md-1 b-dropdown"
    variant="btn"
    toggle-class="text-primary"
  >
    <b-dropdown-item
      href="#"
      class="flag-select-item"
      link-class="d-flex align-items-center"
      v-for="lang in languageOptions"
      :key="lang.code"
      :value="lang.code"
      @click="handleChangeLanguage(lang)"
    >
      <country-flag :country="lang.flag" />
      <span class="flag-label ml-3">{{ lang.text }}</span>
    </b-dropdown-item>
  </b-dropdown>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'SwitchLanguage',
  data() {
    return {
      signInButtonText: 'signup',
      languageOptions: [
        {
          id: 0,
          code: 'en',
          text: 'EN',
          flag: 'usa',
        },
        {
          id: 1,
          code: 'ru',
          text: 'RU',
          flag: 'rus',
        },
        {
          id: 0,
          code: 'uz',
          text: 'UZ',
          flag: 'uzb',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      lang: state => state.auth.lang,
    }),
  },
  methods: {
    handleChangeLanguage(lang) {
      this.$store.dispatch('auth/setLang', lang.code)
    },
  },
}
</script>
