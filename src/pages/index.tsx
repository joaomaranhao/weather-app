import { Header } from './components/Header'
import { LiveWeather } from './components/LiveWeather'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <LiveWeather />
      </div>
    </>
  )
}
