import { useEffect, useState } from 'react'
import { getCurrentWeather } from '../../services/api/current-weather'
import { getUserLocation } from '../../services/api/ip-lookup'
import { Header } from '../Header'
import { Navbar } from '../Navbar'
import styles from './Layout.module.css'

export const Layout = ({ children, setData }) => {
  const [city, setCity] = useState('')

  useEffect(() => {
    getUserLocation()
      .then(response => {
        setCity(response.data.city)
        return getCurrentWeather(response.data.city.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
      })
      .then(data => setData(data))
    }, [setData])
  return (
    <div className={styles.container}>
    <Header setInfo={setData} city={city} setCity={setCity} />
    <Navbar />
    {children}
    </div>
  )
}
