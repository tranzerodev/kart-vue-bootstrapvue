export const URL = process.env.VUE_APP_API_URL || 'http://localhost:8000'
export const URL_HRM =
  process.env.VUE_APP_API_URL_HRM || 'http://localhost:8000'
export const LEVEL = [
  {
    code: 'BG',
    name: 'Beginner',
  },
  {
    code: 'IM',
    name: 'Intermediate',
  },
  {
    code: 'AD',
    name: 'Advanced',
  },
  {
    code: 'FT',
    name: 'Fluent',
  },
]
export const LANGUAGES = [
  {
    code: 'en',
    name: 'English',
  },
  {
    code: 'fr',
    name: 'French',
  },
  {
    code: 'de',
    name: 'German',
  },
  {
    code: 'ru',
    name: 'Russian',
  },
  {
    code: 'uz',
    name: 'Uzbek',
  },
]
export const FAKE_URL = 'http://localhost:3000'
export const TIMEOUT_TIME = 900000
export const GOOGLE_KEY = process.env.VUE_APP_GOOGLE_KEY || ''
export const PROJECT_NAME = 'Kartmon'
export const URL_DICT = {
  '': '/',
  findjob: '/home/findjob',
  community: '/home/community',
  career: '/home/career',
  recruitment: '/home/recruitment',
  learnmore: '/home/learnmore',
}
export const COPYRIGHT_YEAR = '2020'
