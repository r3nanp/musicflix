import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useRef, useState } from 'react'
import { FormHandles, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'

import { useRouter } from 'next/router'
import fetchData from '../Hooks/useApi'

import Header from '../components/Header'
import Footer from '../components/Footer'
import FormField from '../components/FormField'
import Button from '../components/Button'

import { Wrapper } from '../styles/wrapper'

interface FormDataProps {
  name: string
  color: string
}

export default function createCategory({ categories }) {
  const [name, setName] = useState('')
  const [color, setColor] = useState('')

  const router = useRouter()

  const formRef = useRef<FormHandles>(null)
  const handleSubmit: SubmitHandler<FormDataProps> = (
    data,
    { reset },
    event
  ) => {
    event.preventDefault()
    reset()

    router.push('/')
  }

  return (
    <>
      <Head>
        <title>Cadastro de categoria</title>
      </Head>

      <Header text="Voltar para home" to="/" />
      <Wrapper>
        <h1>Cadastro de categoria:</h1>

        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          initialData={{
            name: '',
            description: '',
            color: '',
          }}
        >
          <FormField
            label="Nome da categoria"
            type="text"
            name="name"
            value={name}
            onChange={event => setName(event.target.value)}
          />

          <FormField
            label="Color"
            type="color"
            name="name"
            value={color}
            onChange={event => setColor(event.target.value)}
          />

          <Button type="submit">Cadastrar categoria</Button>
        </Form>

        <h1>Categorias existentes:</h1>

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
