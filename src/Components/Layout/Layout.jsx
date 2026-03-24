import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import TopPage from '../../Pages/TopPage/TopPage.jsx'
import styles from './Layout.module.scss'

function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <TopPage />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
