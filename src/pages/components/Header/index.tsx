import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import styles from './Header.module.css'

import { getCurrentWeather } from '../../../services/api/current-weather'

export const Header = ({ setInfo }) => {
  const [city, setCity] = useState('')

  function handleChange (event: any): void {
    setCity(event.target.value)
  }
  function formatDate (date: Date) {
    const weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dez']
    const day = date.getDate()
    const weekDay = date.getDay()
    const month = date.getMonth()
    const formatedDate = `${weekDays[weekDay]}, ${day} ${months[month]}`
    return formatedDate
  }

  function handleSubmit (event: any): void {
    event.preventDefault()
    getCurrentWeather(city)
      .then(result => {
        const date = formatDate(new Date(result.data.location.localtime))
        const city = result.data.location.name
        const country = result.data.location.country
        const condition = result.data.current.condition.text
        const temp = result.data.current.temp_c
        setInfo({
          date,
          city,
          country,
          temp,
          condition
        })
      })
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
