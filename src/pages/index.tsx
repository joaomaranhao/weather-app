import { LiveWeather } from '../components/LiveWeather'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { Layout } from '../components/Layout'

export default function Home () {
  const [option, setOption] = useState('weather')
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
    <Layout setData={setData} setOption={setOption}>
      <div className={styles.container}>
        {option === 'weather' ? <LiveWeather data={data} /> : <div>Hey</div>}

      </div>
    </Layout>
  )
}
