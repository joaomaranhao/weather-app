import styles from './Navbar.module.css'

export const Navbar = ({ setOption, option }) => {
  return (
    <nav className={styles.nav}>
      <button className={styles.option} onClick={() => {
        if (option !== 'live') {
          setOption('live')
        }
      }}>
        Today
      </button>
        <button className={styles.option} onClick={() => {
        if (option !== 'tomorrow') {
          setOption('tomorrow')
        }
      }}>
          Tomorrow
        </button>
        <button className={styles.option} onClick={() => {
        if (option !== '6days') {
          setOption('6days')
        }
      }}>
          6 Days
        </button>
    </nav>
  )
}
