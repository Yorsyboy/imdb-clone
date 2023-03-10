import Header from 'components/Header'
import Navbar from 'components/Navbar'
import Results from 'components/Results'
import Head from 'next/head'
import request from 'utils/request'
import Providers from './Providers'

export default function Home({ results }) {
  return (
    <>
      <Head>
        <title>IMDB clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://m.media-amazon.com/images/G/01/imdb/images-ANDW73HA/favicon_desktop_32x32._CB1582158068_.png" />
      </Head>

      <Providers>
        {/* Header */}
        <Header />

        {/* Navbar */}
        <Navbar />

        {/* Results */}
        <Results results={results} />
      </Providers>
    </>
  )
}


export async function getServerSideProps(context) {
  const genre = context.query.genre || "fetchTrending";

  const requests = await fetch(`https://api.themoviedb.org/3${request[genre]?.url}`)
    .then(res => res.json())

  return {
    props: {
      results: requests.results
    }
  }
}
