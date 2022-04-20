import axios from 'axios'
import { baseUrl, apiKey } from './weather-api'

export const getUserLocation = () => {
  return axios.get(`${baseUrl}/ip.json?key=${apiKey}&q=auto:ip`)
}
