import Image from 'next/image'
import styles from './page.module.css'
import Header from './../components/Header'

export default function Home() {
  return (
    <>
      <Header
        items={[
        ]}
      />

      <main className={styles.main}>
        <p className={styles.comingsoon}>
          currently 4th year @ ubc cs 💾<br />
          🚧 coming soon! 🚧
        </p>
      </main>
    </>
  )
}
