import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home </title>
      </Head>
      <div>
        <h1 className={styles.title}>Hello</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, necessitatibus laborum consectetur reprehenderit repellat atque autem facilis porro nulla ad adipisci modi eligendi corporis optio pariatur beatae, magni iste aspernatur.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, necessitatibus laborum consectetur reprehenderit repellat atque autem facilis porro nulla ad adipisci modi eligendi corporis optio pariatur beatae, magni iste aspernatur.</p>
        <Link  href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
