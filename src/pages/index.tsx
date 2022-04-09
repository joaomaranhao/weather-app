import { Header } from './components/Header'
import { LiveWeather } from './components/LiveWeather'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { getUserLocation } from '../services/api/ip-lookup'
import { getCurrentWeather } from '../services/api/current-weather'

export default function Home () {
  const [city, setCity] = useState('')
  const [info, setInfo] = useState(
    {
      date: '',
      city: '',
      country: '',
      temp: 0,
      condition: ''
    }
  )

  useEffect(() => {
    getUserLocation()
      .then(response => {
        setCity(response.data.city)
        return getCurrentWeather(response.data.city.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
      })
      .then(info => setInfo(info))
    }, [])
  return (
    <>
      <div className={styles.container}>
        <Header setInfo={setInfo} city={city} setCity={setCity} />
        <LiveWeather info={info} />
      </div>
    </>
  )
}
