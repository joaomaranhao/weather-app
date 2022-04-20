import axios from 'axios'
import { apiKey, baseUrl } from './weather-api'
import { formatDate } from '../helpers/formatDate'

export const getTomorrowWeather = async (city: string) => {
  const result = await axios.get(`${baseUrl}/forecast.json?key=${apiKey}&q=${city}&days=2&aqui=no`)
  if (result.status === 200) {
    return {
      date: formatDate(new Date(result.data.forecast.forecastday[1].date + 'T00:00')),
      city: result.data.location.name,
      country: result.data.location.country,
      condition: result.data.forecast.forecastday[1].day.condition.text,
      temp: result.data.forecast.forecastday[1].day.avgtemp_c
    }
  }
  throw new Error('Could not fetch tomorrow weather.')
}
