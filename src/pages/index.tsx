import Head from 'next/head'

import Layout from '../components/Layout'
import BannerMain from '../components/BannerMain'
import Carousel, { CarouselOptions } from '../components/Carousel'
import LoadingGlobal from '../components/Shimmer/LoadingGlobal'

import useApi from '../Hooks/useApi'

export default function Home() {
  const { data } = useApi<CarouselOptions[]>('categories?_embed=videos')

  if (!data) {
    return <LoadingGlobal />
  }

  return (
    <>
      <Head>
        <title>MusicFlix</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <BannerMain
          videoTitle={'Ode To The Mets'}
          url={`https://youtu.be/BjC0KUxiMhc`}
        />

        {data?.map((category, index: number) => {
          return (
            <div key={index}>
              <Carousel ignoreFirstVideo category={category} />
            </div>
          )
        })}
      </Layout>
    </>
  )
}
