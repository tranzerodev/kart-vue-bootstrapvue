import axios from 'axios'
import { URL } from '../utils/constants'
import AppHelper from '../helpers/AppHelper'
const token = AppHelper.getTokenFromStorage()

export default {
  axios: axios.create(),
  token: token,
  config: {
    url: URL,
    headers: token
      ? {
          Authorization: 'Bearer ' + token,
        }
      : {},
  },
  configForMultiForm: {
    url: URL,
    headers: token
      ? {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'multipart/form-data',
        }
      : {
          'Content-Type': 'multipart/form-data',
        },
  },
  post(endPoint, payload = {}) {
    let config = this.config
    if (endPoint === '/account/signup/' || !token) {
      delete config.headers.Authorization
    }
    return this.axios
      .post(this.config.url + endPoint, payload, config)
      .then(res => {
        if (res.data != '') return res.data
        else return res
      })
  },
  put(endPoint, payload = {}) {
    let config = this.config
    if (endPoint === '/account/signup/' || !token) {
      delete config.headers.Authorization
    }
    return this.axios.put(endPoint, payload, this.config).then(res => {
      return res.data
    })
  },
  patch(endPoint, payload = {}) {
    let config = this.config
    if (endPoint === '/account/signup/' || !token) {
      delete config.headers.Authorization
    }
    return this.axios
      .patch(this.config.url + endPoint, payload, config)
      .then(res => {
        return res.data
      })
  },
  delete(endPoint, payload = {}) {
    return this.axios
      .delete(this.config.url + endPoint, payload, this.config)
      .then(res => {
        return res.data
      })
  },
  get(endPoint) {
    let config = this.config
    if (endPoint === '/account/signup/' || !token) {
      delete config.headers.Authorization
    }
    return this.axios.get(this.config.url + endPoint, config).then(res => {
      return res.data
    })
  },
  patchMultiForm(endPoint, payload = {}) {
    let configForMultiForm = this.config
    if (endPoint === '/account/signup/' || !token) {
      delete configForMultiForm.headers.Authorization
    }
    return this.axios
      .patch(this.config.url + endPoint, payload, configForMultiForm)
      .then(res => {
        return res.data
      })
  },
}
