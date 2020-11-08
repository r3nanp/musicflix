import Head from 'next/head'
import { useRouter } from 'next/router'

import { useRef, useState } from 'react'
import { FormHandles, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'

import Header from '../components/Header'
import Footer from '../components/Footer'
import FormField from '../components/FormField'
import Button from '../components/Button'

import { Wrapper } from '../styles/wrapper'

export default function CreateVideo() {
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  interface FormData {
    title: string
    url: string
  }

  const router = useRouter()

  const formRef = useRef<FormHandles>(null)
  const handleSubmit: SubmitHandler<FormData> = (data,{ reset }, event) => {
    event.preventDefault()
    reset()
    
    router.push('/')
  }

  return (
    <>
      <Head>
        <title>Cadastro de vídeo</title>
      </Head>

      <>
        <Header text="Nova Categoria" to="/createCategory" />

        <Wrapper>
          <h1>Cadastro de vídeo</h1>
          <Form
            ref={formRef}
            initialData={{
              title: 'Someday',
              url: 'https://www.youtube.com/watch?v=knU9gRUWCno',
              category: 'The Strokes',
            }}
            onSubmit={handleSubmit}
          >
            <FormField
              label="Título do vídeo"
              type="text"
              name="title"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />

            <FormField
              label="URL do vídeo"
              type="text"
              name="url"
              value={url}
              onChange={event => setUrl(event.target.value)}
            />

            <FormField
              label="Categoria"
              type="text"
              name="category"
              value={category}
              onChange={event => setCategory(event.target.value)}
            />

            <Button type="submit">Cadastrar vídeo</Button>
          </Form>
        </Wrapper>

        <Footer />
      </>
    </>
  )
}
