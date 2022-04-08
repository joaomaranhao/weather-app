import axios from 'axios'

const apiKey = '997b278006594208b83182733220804'
const baseUrl = 'http://api.weatherapi.com/v1'

export const getCurrentWeather = (city: string) => {
  return axios.get(`${baseUrl}/current.json?key=${apiKey}&q=${city}&aqui=no`)
}
