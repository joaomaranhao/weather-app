import Link from 'next/link'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
      <a className={styles.link}>
        Today
      </a>
      </Link>

      <Link href="/">
        <a className={styles.link}>
          Tomorrow
        </a>
      </Link>

      <Link href="/">
        <a className={styles.link}>
          6 Days
        </a>
      </Link>
    </nav>
  )
}
