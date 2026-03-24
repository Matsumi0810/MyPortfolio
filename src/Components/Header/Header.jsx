import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.scss'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Link to="/" className={styles.logo}>
        Port<span>folio</span>
      </Link>
      <nav className={styles.nav}>
        <Link
          to="/"
          className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}
        >
          Top
        </Link>
        <Link
          to="/works"
          className={`${styles.navLink} ${location.pathname === '/works' ? styles.active : ''}`}
        >
          Works
        </Link>
        <Link
          to="/about"
          className={`${styles.navLink} ${location.pathname === '/about' ? styles.active : ''}`}
        >
          About
        </Link>
      </nav>
    </header>
  )
}

export default Header
