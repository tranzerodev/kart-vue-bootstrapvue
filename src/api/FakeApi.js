import axios from 'axios'
import { FAKE_URL } from '../utils/constants'

const api = axios.create({
  baseURL: `${FAKE_URL}`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default api
