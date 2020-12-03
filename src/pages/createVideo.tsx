import Head from 'next/head'
import { useRouter } from 'next/router'

import { useRef, useState, useCallback } from 'react'
import { FormHandles, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'
import * as yup from 'yup'
import api from '../services/axios'

import Header from '../components/Header'
import Footer from '../components/Footer'
import FormField from '../components/FormField'

import { Wrapper } from '../styles/wrapper'

export default function CreateVideo(): JSX.Element {
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  const router = useRouter()

  const formRef = useRef<FormHandles>(null)
  interface FormProps {
    title: string
    url: string
  }

  const handleSubmit: SubmitHandler<FormProps> = useCallback(
    async (data, { reset }, event) => {
      try {
        formRef.current.setErrors({})

        const schema = yup.object().shape({
          title: yup.string().min(3).max(40).required(),
          url: yup.string().min(6).max(30).required(),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        event.preventDefault()

        const response = await api.post('videos?_embed=videos', data)

        if (response.status === 201) {
          reset()
          alert('Cadastro realizado com sucesso')
          router.push('/')
        }
      } catch (err) {
        const validationErrors = {}
        if (err instanceof yup.ValidationError) {
          err.inner.forEach(error => {
            validationErrors[error.path] = error.message
          })
          formRef.current.setErrors(validationErrors)
        }
      }
    },
    []
  )

  return (
    <>
      <Head>
        <title>Cadastro de vídeo</title>
      </Head>

      <Header text="Nova Categoria" to="/createCategory" />
      <Wrapper>
        <h1>Cadastro de vídeo:</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>
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

          <button type="submit">Cadastrar vídeo</button>
        </Form>
      </Wrapper>

      <Footer />
    </>
  )
}
