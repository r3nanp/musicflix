/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useCallback, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import { DataOptions } from '../@types'
import { fetchData } from '../hooks/useApi'
import api from '../services/axios'

import { FormHandles, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'
import * as yup from 'yup'

import Header from '../components/Header'
import Footer from '../components/Footer'
import FormField from '../components/FormField'

import { Wrapper } from '../styles/wrapper'

interface FormDataProps {
  name: string
  color: string
}

export default function CreateCategory({ categories }): JSX.Element {
  const [name, setName] = useState('')
  const [color, setColor] = useState('#000')

  const router = useRouter()

  const formRef = useRef<FormHandles>(null)
  const handleSubmit: SubmitHandler<FormDataProps> = useCallback(
    async (data, { reset }, event) => {
      try {
        formRef.current.setErrors({})

        const schema = yup.object().shape({
          title: yup.string().min(3).max(20).required(),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        event.preventDefault()

        const response = await api.post('categories?_embed=videos', data)

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
        <title>Cadastro de categoria</title>
      </Head>

      <Header text="Voltar para home" to="/" />
      <Wrapper>
        <h1>Cadastro de categoria:</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <FormField
            label="Titulo da categoria"
            type="text"
            name="title"
            value={name}
            onChange={event => setName(event.target.value)}
          />

          <FormField
            label="Cor"
            type="color"
            name="color"
            value={color}
            onChange={event => setColor(event.target.value)}
          />

          <button type="submit">Cadastrar categoria</button>
        </Form>

        <h1 className="category">Categorias existentes:</h1>
        <ul>
          {categories.map(category => (
            <li key={category.title}>{category.title}</li>
          ))}
        </ul>
      </Wrapper>

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetchData<DataOptions[]>('categories')
  return {
    props: {
      categories: response,
    },
  }
}
