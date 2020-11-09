import Head from 'next/head'
import fetchData from '../Hooks/useApi'
import { GetServerSideProps } from 'next'

import Layout from '../components/Layout'
import BannerMain from '../components/BannerMain'
import Carousel from '../components/Carousel'
import LoadingGlobal from '../components/Shimmer/LoadingGlobal'

export default function Home ({ data }) {

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

        {data.map((category, index: number) => {
          return (
            <div key={index}>
              <Carousel category={category} />
            </div>
          )
        })}
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetchData<DataOptions[]>('categories?_embed=videos')

  return {
    props: {
      data,
    }
  }
} 