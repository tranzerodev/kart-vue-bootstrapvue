import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '../langs/en.json'
import uz from '../langs/uz.json'
import ru from '../langs/ru.json'
Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    uz,
    ru,
  },
})
