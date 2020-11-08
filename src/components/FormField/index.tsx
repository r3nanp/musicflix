import { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

import { Wrapper, Label, Input } from './styles'

interface FormField {
  label: string
  type: string
  name: string
  value: string
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

const FormField: React.FC<FormField> = ({
  label,
  type,
  name,
  value,
  onChange,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  const isTypeTextArea = type === 'textarea'
  const tag = isTypeTextArea ? 'textarea' : 'input'

  return (
    <Wrapper>
      <Label>
        <Input
          ref={inputRef}
          as={tag}
          value={value}
          name={name}
          onChange={onChange}
          type={type}
          {...rest}
        />
        {error && <span>{error}</span>}

        <Label.Text>{label}:</Label.Text>
      </Label>
    </Wrapper>
  )
}

export default FormField
