import axios from 'axios'
import weatherApi from '../../credentials/weather-api.json'

const apiKey = weatherApi.apikey
const baseUrl = 'http://api.weatherapi.com/v1'

export const getUserLocation = () => {
  return axios.get(`${baseUrl}/ip.json?key=${apiKey}&q=auto:ip`)
}
