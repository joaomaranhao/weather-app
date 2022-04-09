import styles from './Navbar.module.css'

export const Navbar = ({ setOption }) => {
  return (
    <nav className={styles.nav}>
      <button className={styles.option}>
        Today
      </button>
        <button className={styles.option}>
          Tomorrow
        </button>
        <button className={styles.option}>
          6 Days
        </button>
    </nav>
  )
}
