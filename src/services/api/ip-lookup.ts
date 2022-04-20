import axios from 'axios'
import { apiKey, baseUrl } from './weather-api'

export const getUserLocation = () => {
  return axios.get(`${baseUrl}/ip.json?key=${apiKey}&q=auto:ip`)
}
