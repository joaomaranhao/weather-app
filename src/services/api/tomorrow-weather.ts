import axios from 'axios'
import weatherApi from '../../credentials/weather-api.json'
import { formatDate } from '../helpers/formatDate'

const apiKey = weatherApi.apikey
const baseUrl = 'http://api.weatherapi.com/v1'

export const getTomorrowWeather = async (city: string) => {
  const result = await axios.get(`${baseUrl}/forecast.json?key=${apiKey}&q=${city}&days=2&aqui=no`)
  return {
    date: formatDate(new Date(result.data.forecast.forecastday[1].date + 'T03:00')),
    city: result.data.location.name,
    country: result.data.location.country,
    condition: result.data.forecast.forecastday[1].day.condition.text,
    temp: result.data.forecast.forecastday[1].day.avgtemp_c
  }
}
