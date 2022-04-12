import { getCurrentWeather } from '../../services/api/current-weather'
import { getTomorrowWeather } from '../../services/api/tomorrow-weather'
import styles from './Navbar.module.css'

export const Navbar = ({ city, setOption, option, setData }) => {
  return (
    <nav className={styles.nav}>
      <button className={styles.option} onClick={() => {
        if (option !== 'live') {
          setOption('live')
          getCurrentWeather(city)
            .then(data => setData(data))
        }
      }}>
        Today
      </button>
        <button className={styles.option} onClick={() => {
        if (option !== 'tomorrow') {
          setOption('tomorrow')
          getTomorrowWeather(city)
            .then(data => setData(data))
        }
      }}>
          Tomorrow
        </button>
        <button className={styles.option} onClick={() => {
        if (option !== '6days') {
          setOption('6days')
        }
      }}>
          6 Days
        </button>
    </nav>
  )
}
