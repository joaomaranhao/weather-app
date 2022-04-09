import styles from './LiveWeather.module.css'

export const LiveWeather = ({ data }) => {
  return (
    <main className={styles.main}>
      <div className={styles.info}>
        <div className={styles.today}>
          <p className={styles.date}>{data.date}</p>
          <p className={styles.city}>{data.city}</p>
          <p className={styles.country}>{data.country}</p>
        </div>
        <div className={styles.weather}>
          <span>{data.condition}</span>
        </div>
      </div>
      <div className={styles.temperature}>
        <p>{data.temp}<span>°C</span></p>
      </div>
    </main>
  )
}
