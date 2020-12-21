/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Head from 'next/head'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { IDataOptions } from '../repositories/IDataOptions'
import fetchData from '../services/useApi'

import Layout from '../components/Layout'
import BannerMain from '../components/BannerMain'
import Carousel from '../components/Carousel'
import LoadingGlobal from '../components/Shimmer/LoadingGlobal'

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
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
  const data = await fetchData<IDataOptions[]>('categories?_embed=videos')

  return {
    props: {
      data,
    },
  }
}
