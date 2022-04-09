import { LiveWeather } from '../components/LiveWeather'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { Layout } from '../components/Layout'
import { FutureWeather } from '../components/FutureWeather'

export default function Home () {
  const [option, setOption] = useState('today')
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
    <Layout setData={setData} option={option} setOption={setOption}>
      <div className={styles.container}>
        {option !== '6days' ? <LiveWeather data={data} /> : <FutureWeather />}
      </div>
    </Layout>
  )
}
