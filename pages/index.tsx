import Head from 'next/head'
import styles from '../styles/Main.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="touch-icon-iphone.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/webclip.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/webclip.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/webclip.png"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        123
      </main>
    </>
  )
}