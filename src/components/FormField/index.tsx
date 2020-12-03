import { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

import { Wrapper, Label, Input } from './styles'

interface FormField {
  label: string
  type: string
  name: string
  value: string
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
  suggestions?: string[]
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

  return (
    <Wrapper>
      <Label>
        <Input
          ref={inputRef}
          value={value}
          name={name}
          onChange={onChange}
          type={type}
          className={error ? 'error' : ''}
          {...rest}
        />
        {error && <span className="error">{error}</span>}

        <Label.Text>{label}:</Label.Text>
      </Label>
    </Wrapper>
  )
}

export default FormField
