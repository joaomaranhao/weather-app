import React from 'react'
import './CurrentWeather.css'
// import { FaCloud } from 'react-icons/fa'

function CurrentWeather ({ city, temperature, weekDay, formatedDate, weather, conditionCode }) {
  return (
    <div className='currentWeather'>
      {/* <FaCloud className='currentWeather__icon' /> */}
      <img src={`http://openweathermap.org/img/wn/${conditionCode}@2x.png`} alt={weather} className='currentWeather__icon' />
      <h4>{weather}</h4>
      <h3>{city}</h3>
      <h2>{temperature}°C</h2>
      <h4>{weekDay}</h4>
      <h5>{formatedDate}</h5>
    </div>
  )
}

export default CurrentWeather
