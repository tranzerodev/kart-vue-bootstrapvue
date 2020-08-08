import CoreApi from '../../../api/CoreApi'
const CATALOG_URL = '/catalog'
import axios from 'axios'

const loadJobCategory = async ({ commit }) => {
  commit('LOAD_JOB_CATEGORY_REQUEST')
  try {
    let response = await CoreApi.get(`${CATALOG_URL}/job_category`)
    if (!response) {
      commit('LOAD_JOB_CATEGORY_FAILED', response)
      throw new Error(response)
    }
    commit('LOAD_JOB_CATEGORY_SUCCESS', response)
    return response
  } catch (e) {
    commit('LOAD_JOB_CATEGORY_FAILED', e.response)
    return
  }
}

const loadCountry = async ({ commit }) => {
  commit('LOAD_COUNTRY_REQUEST')
  try {
    let response = await CoreApi.get(`${CATALOG_URL}/country/`)
    if (!response) {
      commit('LOAD_COUNTRY_FAILED', response)
      throw new Error(response)
    }
    commit('LOAD_COUNTRY_SUCCESS', response)
    return response
  } catch (e) {
    commit('LOAD_COUNTRY_FAILED', e.response)
    return
  }
}

const loadLanguage = async ({ commit }) => {
  commit('LOAD_LANGUAGE_REQUEST')
  try {
    let response = await CoreApi.get(`${CATALOG_URL}/language/`)
    if (!response) {
      commit('LOAD_LANGUAGE_FAILED', response)
      throw new Error(response)
    }
    commit('LOAD_LANGUAGE_SUCCESS', response)
    return response
  } catch (e) {
    commit('LOAD_LANGUAGE_FAILED', e.response)
    return
  }
}

const loadSkill = async ({ commit }) => {
  commit('LOAD_SKILL_REQUEST')
  try {
    let response = await CoreApi.get(`${CATALOG_URL}/skill_level/`)
    if (!response) {
      commit('LOAD_SKILL_FAILED', response)
      throw new Error(response)
    }
    commit('LOAD_SKILL_SUCCESS', response)
    return response
  } catch (e) {
    commit('LOAD_SKILL_FAILED', e.response)
    return
  }
}

const getJobType = async ({ commit }) => {
  let response = await CoreApi.get(`${CATALOG_URL}/job_type`)
  commit('setJobType', response)
}

const getGeolocation = async () => {
  try {
    let response = await axios.get('http://ip-api.com/json')
    if (response.data && response.data.city && response.data.countryCode) {
      return {
        countryCode: response.data.countryCode,
        city: response.data.city,
      }
    } else throw Error()
  } catch (e) {
    return false
  }
}

export default {
  loadJobCategory,
  loadCountry,
  getJobType,
  loadLanguage,
  loadSkill,
  getGeolocation,
}
