import { Footer, Top } from '@/layouts'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Top />

      <main className={styles.main}>
        <h1>Welcome.</h1>
      </main>

      <Footer />
    </>
  )
}
