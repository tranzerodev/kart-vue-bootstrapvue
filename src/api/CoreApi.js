import axios from 'axios'
import { URL_HRM } from '../utils/constants'

export default {
  axios: axios.create(),
  config: {
    url: URL_HRM,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  },
  post(endPoint, payload = {}) {
    return this.axios
      .post(this.config.url + endPoint, payload, this.config)
      .then(res => {
        return res.data
      })
  },
  put(endPoint, payload = {}) {
    return this.axios.put(endPoint, payload, this.config).then(res => {
      return res.data
    })
  },
  get(endPoint) {
    return this.axios.get(this.config.url + endPoint, this.config).then(res => {
      return res.data
    })
  },
}
