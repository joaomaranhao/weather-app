import styles from './LiveWeather.module.css'

export const LiveWeather = ({ info }) => {
  return (
    <main className={styles.main}>
      <div className={styles.info}>
        <div className={styles.today}>
          <p className={styles.date}>{info.date}</p>
          <p className={styles.city}>{info.city}</p>
          <p className={styles.country}>{info.country}</p>
        </div>
        <div className={styles.weather}>
          <span>{info.condition}</span>
        </div>
      </div>
      <div className={styles.temperature}>
        <p>{info.temp}<span>°C</span></p>
      </div>
    </main>
  )
}
