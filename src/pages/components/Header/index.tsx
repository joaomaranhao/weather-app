import { FiSearch } from 'react-icons/fi'
import styles from './Header.module.css'

import { getCurrentWeather } from '../../../services/api/current-weather'

export const Header = ({ setInfo, city, setCity }) => {
  function handleChange (event: any): void {
    setCity(event.target.value)
  }

  function handleSubmit (event: any): void {
    event.preventDefault()
    getCurrentWeather(city.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
      .then(result => {
      setInfo(result)
      event.target.reset()
      })

      .catch(error => console.log(error))
  }

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.search} type="text" onChange={handleChange} />
      </form>
      <FiSearch className={styles.searchIcon} />
    </header>
  )
}
