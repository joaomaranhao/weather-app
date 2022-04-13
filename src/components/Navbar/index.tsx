import { getCurrentWeather } from '../../services/api/current-weather'
import { getTomorrowWeather } from '../../services/api/tomorrow-weather'
import styles from './Navbar.module.css'

export const Navbar = ({ city, setOption, option, setData }) => {
  return (
    <nav className={styles.nav}>
      <button className={option === 'live' ? `${styles.active} ${styles.option}` : `${styles.option}`} onClick={() => {
        if (option !== 'live') {
          setOption('live')
          getCurrentWeather(city)
            .then(data => setData(data))
            .catch(error => console.log(error.message, '\nCould not find that city.'))
        }
      }}>
        Today
      </button>
        <button className={option === 'tomorrow' ? `${styles.active} ${styles.option}` : `${styles.option}`} onClick={() => {
        if (option !== 'tomorrow') {
          setOption('tomorrow')
          getTomorrowWeather(city)
            .then(data => setData(data))
            .catch(error => console.log(error.message, '\nCould not find that city.'))
        }
      }}>
          Tomorrow
        </button>
        <button className={option === '6days' ? `${styles.active} ${styles.option}` : `${styles.option}`} onClick={() => {
        if (option !== '6days') {
          setOption('6days')
        }
      }}>
          6 Days
        </button>
    </nav>
  )
}
