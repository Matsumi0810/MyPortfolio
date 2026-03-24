import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <Link to="/" className={styles.footerLogo}>
        Port<span>folio</span>
      </Link>
      <nav className={styles.footerNav}>
        <Link to="/" className={styles.footerLink}>Top</Link>
        <Link to="/works" className={styles.footerLink}>Works</Link>
        <Link to="/about" className={styles.footerLink}>About</Link>
      </nav>
      <p className={styles.copy}>© {year} My Portfolio. All rights reserved.</p>
    </footer>
  )
}

export default Footer
