import styles from './LiveWeather.module.css'

export const LiveWeather = () => {
  return (
    <main className={styles.main}>
      <div className={styles.info}>
        <div className={styles.today}>
          <p className={styles.date}>wednesday, 18 nov</p>
          <p className={styles.city}>Tokyo</p>
          <p className={styles.country}>Japan</p>
        </div>
        <div className={styles.weather}>
          <span>Sunny</span>
        </div>
      </div>
      <div className={styles.temperature}>
        <p>19<span>°C</span></p>
      </div>
    </main>
  )
}
