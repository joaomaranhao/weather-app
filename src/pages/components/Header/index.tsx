import { FiSearch } from 'react-icons/fi'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <input className={styles.search} type="text" />
      <FiSearch className={styles.searchIcon} />
    </header>
  )
}
