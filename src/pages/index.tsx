/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { DataOptions } from '../@types'
import { fetchData } from '../hooks/useApi'

import Layout from '../components/Layout'
import BannerMain from '../components/BannerMain'
import Carousel from '../components/Carousel'
import LoadingGlobal from '../components/Shimmer/LoadingGlobal'

function Home({ data }): JSX.Element {
  if (!data) {
    return <LoadingGlobal />
  }

  return (
    <>
      <Head>
        <title>MusicFlix</title>
      </Head>

      <Layout>
        <BannerMain
          videoTitle="Ode To The Mets"
          url="https://youtu.be/BjC0KUxiMhc"
        />

        {data.map((category, index: number) => (
          <div key={index}>
            <Carousel category={category} />
          </div>
        ))}
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetchData<DataOptions[]>('categories?_embed=videos')

  return {
    props: {
      data,
    },
  }
}

export default Home
