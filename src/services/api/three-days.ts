import axios from 'axios'
import { apiKey, baseUrl } from './weather-api'

export const getThreeDaysForecast = async (city: string) => {
  const response = await axios.get(`${baseUrl}/forecast.json?key=${apiKey}&q=${city}&days=3&aqui=no`)
  if (response.status === 200) {
    return response.data.forecast.forecastday
  }
  throw new Error('Could not fetch tomorrow weather.')
}
