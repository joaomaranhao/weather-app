import { Header } from '../Header'
import { Navbar } from '../Navbar'
import styles from './Layout.module.css'

export const Layout = ({ children, setData, option, setOption, city, setCity, setForecastData }) => {
  return (
    <div className={styles.container}>
    <Header setInfo={setData} city={city} setCity={setCity} setOption={setOption} />
    <Navbar city={city} setData={setData} option={option} setOption={setOption} setForecastData={setForecastData} />
    {children}
    </div>
  )
}
