import { LiveWeather } from '../components/LiveWeather'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import { FutureWeather } from '../components/FutureWeather'
import Image from 'next/image'

import { ICurrentWeatherData } from '../services/interfaces/ICurrentWeatherData'
import { getUserLocation } from '../services/api/ip-lookup'
import { getCurrentWeather } from '../services/api/current-weather'

import Beach from '../../public/images/backgrounds/Beach.svg'
import Campfire from '../../public/images/backgrounds/Campfire.svg'
import EuropeVillage from '../../public/images/backgrounds/Europe-Village.svg'
import Winter from '../../public/images/backgrounds/Winter.svg'
import Suburb from '../../public/images/backgrounds/Suburb.svg'
import CityHighway from '../../public/images/backgrounds/City-highway.svg'

export default function Home () {
  const [option, setOption] = useState('live')
  const [data, setData] = useState<ICurrentWeatherData | undefined>(undefined)
  const [forecastData, setForecastData] = useState(undefined)
  const [city, setCity] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    getUserLocation()
    .then(response => {
      const city = response.data.city.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      setCity(city)
      return city
    })
    .then(city => getCurrentWeather(city))
    .then(data => setData(data))
    .catch(error => console.log(error))
  }, [])

 useEffect(() => {
   if (data && data.condition) {
     if (data.condition.toLowerCase().includes('sunny')) {
      setImage(Beach)
     } else if (data.condition.toLowerCase().includes('clear')) {
      setImage(Suburb)
     } else if (data.condition.toLowerCase().includes('overcast')) {
      setImage(EuropeVillage)
     } else if (data.condition.toLowerCase().includes('snow')) {
      setImage(Winter)
     } else if (data.condition.toLowerCase().includes('rain')) {
      setImage(Campfire)
     } else {
       setImage(CityHighway)
     }
   }
 }, [data])

  return (
    <Layout
    setData={setData}
    option={option}
    setOption={setOption}
    city={city}
    setCity={setCity}
    setForecastData={setForecastData}
    >
      <div className={styles.container}>
        <div className={styles.bg}>
          {image && option !== '6days'
          ? <Image
          alt='Beach'
          src={image}
          layout='fill'
          priority
          />
: ''

        }
        </div>
        <div className={styles.content}>
          {option === 'live' && data ? <LiveWeather data={data} /> : null}
          {option === 'tomorrow' && data ? <LiveWeather data={data} /> : null}
          {option === '6days' && data ? <FutureWeather data={data} forecastData={forecastData} /> : null}
        </div>
      </div>
    </Layout>
  )
}
