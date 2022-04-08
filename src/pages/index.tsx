import { Header } from './components/Header'
import { LiveWeather } from './components/LiveWeather'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home () {
  const [info, setInfo] = useState(
    {
      date: '',
      city: '',
      country: '',
      temp: 0,
      condition: ''
    }
  )
  return (
    <>
      <div className={styles.container}>
        <Header setInfo={setInfo} />
        <LiveWeather info={info} />
      </div>
    </>
  )
}
