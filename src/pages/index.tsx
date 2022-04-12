import { LiveWeather } from '../components/LiveWeather'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import { FutureWeather } from '../components/FutureWeather'

import { ICurrentWeatherData } from '../services/interfaces/ICurrentWeatherData'
import { getUserLocation } from '../services/api/ip-lookup'
import { getCurrentWeather } from '../services/api/current-weather'

export default function Home () {
  const [option, setOption] = useState('live')
  const [data, setData] = useState<ICurrentWeatherData | undefined>(undefined)
  const [city, setCity] = useState('')

  useEffect(() => {
    getUserLocation()
    .then(response => {
      const city = response.data.city.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      setCity(city)
      return city
    })
    .then(city => getCurrentWeather(city))
    .then(data => setData(data))
    .catch(error => console.log(error))
  }, [])

  return (
    <Layout
    setData={setData}
    option={option}
    setOption={setOption}
    city={city}
    setCity={setCity}
    >
      <div className={styles.container}>
        {option === 'live' && data ? <LiveWeather data={data} /> : null}
        {option === 'tomorrow' && data ? <LiveWeather data={data} /> : null}
        {option === '6days' && data ? <FutureWeather /> : null}
      </div>
    </Layout>
  )
}
