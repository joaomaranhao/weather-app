import { formatDate } from '../../services/helpers/formatDate'
import styles from './FutureWeather.module.css'

export const FutureWeather = ({ forecastData, data }) => {
  if (forecastData) {
    return (
      <div className={styles.container}>
        <div className={styles.location}>
          <p className={styles.city}>{data.city}</p>
          <p className={styles.country}>{data.country}</p>
        </div>
        <div className={styles.content}>
          {forecastData.map(forecast => {
            const date = formatDate(new Date(forecast.date))
            return (
              <div key={forecast.date} className={styles.day}>
                <p>{date}</p>
                <p>min. <span className={`${styles.temp} ${styles.min}`}>{parseInt(forecast.day.mintemp_c)}</span> máx. <span className={styles.temp}>{parseInt(forecast.day.maxtemp_c)}</span></p>
                <div>
                  <p>{forecast.day.condition.text}</p>
                  <img src={forecast.day.condition.icon} alt={forecast.day.condition.text} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
