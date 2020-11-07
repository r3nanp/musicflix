import Head from 'next/head'

import BannerMain from '../components/BannerMain'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>MusicFlix</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <BannerMain
          url={`https://www.youtube.com/watch?v=BjC0KUxiMhc`}
          videoTitle={`Ode To The Mets`}
        />

      </Layout>
    </>
  )
}
