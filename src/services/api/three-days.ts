import axios from 'axios'
import weatherApi from '../../credentials/weather-api.json'

const apiKey = weatherApi.apikey
const baseUrl = 'http://api.weatherapi.com/v1'

export const getThreeDaysForecast = async (city: string) => {
  const response = await axios.get(`${baseUrl}/forecast.json?key=${apiKey}&q=${city}&days=3&aqui=no`)
  if (response.status === 200) {
    return response.data.forecast.forecastday
  }
  throw new Error('Could not fetch tomorrow weather.')
}
