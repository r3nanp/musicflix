import React, { ButtonHTMLAttributes } from 'react'

import { CreateButton } from './styles'

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, type }) => {
  return <CreateButton type={type}>{children}</CreateButton>
}

export default Button
