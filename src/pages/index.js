import Header from 'components/Header'
import Navbar from 'components/Navbar'
import Results from 'components/Results'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>IMDB clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://m.media-amazon.com/images/G/01/imdb/images-ANDW73HA/favicon_desktop_32x32._CB1582158068_.png" />
      </Head>

      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Results */}
      <Results />
    </>
  )
}
