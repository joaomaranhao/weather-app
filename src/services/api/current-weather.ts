import axios from 'axios'
import weatherApi from '../../credentials/weather-api.json'

const apiKey = weatherApi.apikey
const baseUrl = 'http://api.weatherapi.com/v1'

export const getCurrentWeather = (city: string) => {
  return axios.get(`${baseUrl}/current.json?key=${apiKey}&q=${city}&aqui=no`)
}
