import { LiveWeather } from '../components/LiveWeather'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { Layout } from '../components/Layout'

export default function Home () {
  const [data, setData] = useState(
    {
      date: '',
      city: '',
      country: '',
      temp: 0,
      condition: ''
    }
  )
  return (
    <Layout setData={setData}>
      <div className={styles.container}>
        <LiveWeather data={data} />
      </div>
    </Layout>
  )
}
