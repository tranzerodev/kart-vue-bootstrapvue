import axios from 'axios'
import { URL_HRM } from '../utils/constants'

const api = axios.create({
  baseURL: `${URL_HRM}`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default api
