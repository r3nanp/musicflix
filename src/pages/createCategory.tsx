import Head from 'next/head'
import { GetServerSideProps } from 'next'
import fetchData from '../Hooks/useApi'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { Wrapper } from '../styles/wrapper'

export default function createCategory({ categories }) {
  return (
    <>
      <Head>
        <title>Cadastro de categoria</title>
      </Head>

      <Header text="Voltar para home" to="/" />
      <Wrapper>
        <h1>Cadastro de categoria</h1>

        <ul>
          {categories.map(category => {
            return <li key={category.title}>{category.title}</li>
          })}
        </ul>
      </Wrapper>

      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetchData<DataOptions[]>('categories')
  return {
    props: {
      categories: response,
    },
  }
}
