import { useEffect, useState } from 'react'
import { apiKey } from './credentials/open-weather.json'
import axios from 'axios'
import './App.css'
import CurrentWeather from './components/CurrentWeather'
import MenuIcon from './components/MenuIcon'

function App () {
  const [city, setCity] = useState('São Paulo')
  const [temperature, setTemperature] = useState(0)
  const [weekDay, setWeekDay] = useState('')
  const [formatedDate, setFormatedDay] = useState('')
  const [weather, setWeather] = useState('')
  const [conditionCode, setConditionCode] = useState('')
  const [cod, setCod] = useState(0)
  const [apiCallError, setApiCallError] = useState(0)

  const fetchApi = async (city) => {
    try {
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city.replaceAll(' ', '%20')}&units=metric&appid=${apiKey}`)
      await setCity(response.data.name)
      await setTemperature(response.data.main.temp.toFixed(0))
      await setWeekDay(timeStampToWeekDay(response.data.dt))
      await setFormatedDay(timeStampToFormatedDate(response.data.dt))
      await setWeather(response.data.weather[0].main)
      await setConditionCode(response.data.weather[0].icon)
      await setCod(response.data.cod)
      await setApiCallError(0)
    } catch (e) {
      await setApiCallError(1)
    }
  }

  const timeStampToWeekDay = (UnixTimestamp) => {
    const dayNum = new Date(UnixTimestamp * 1000).getDay()
    const days = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']
    return days[dayNum]
  }

  const timeStampToFormatedDate = (UnixTimestamp) => {
    const date = new Date(UnixTimestamp * 1000)
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }

  useEffect(() => {
    fetchApi(city)
    // eslint-disable-next-line
  }, [])

  return (
    <div className='app'>
      <div className='app__container'>
        <div className='app__upContent'>
          <div className='app__currentWeather'>
            {cod === 200
              ? <CurrentWeather
                  city={city}
                  temperature={temperature}
                  weekDay={weekDay}
                  formatedDate={formatedDate}
                  weather={weather}
                  conditionCode={conditionCode}
                />
              : ''}
          </div>
          <div className='app__menu'>
            <MenuIcon fetchApi={fetchApi} apiCallError={apiCallError} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
