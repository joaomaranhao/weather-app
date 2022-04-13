import axios from 'axios'
import weatherApi from '../../credentials/weather-api.json'
import { formatDate } from '../helpers/formatDate'

const apiKey = weatherApi.apikey
const baseUrl = 'http://api.weatherapi.com/v1'

export const getCurrentWeather = async (city: string) => {
  if (city) {
    const result = await axios.get(`${baseUrl}/current.json?key=${apiKey}&q=${city}&aqui=no`)
    if (result.status === 200) {
      return {
        date: formatDate(new Date(result.data.location.localtime)),
        city: result.data.location.name,
        country: result.data.location.country,
        condition: result.data.current.condition.text,
        temp: result.data.current.temp_c
      }
    }
    throw new Error('Could not fetch current weather.')
  }
}
