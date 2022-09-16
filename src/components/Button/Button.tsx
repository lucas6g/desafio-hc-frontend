import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Container } from './ButtonStyles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  bgColor: string
  textColor: string
  shape: 'filled' | 'outlined'
}

export function Button({
  bgColor,
  textColor,
  children,
  shape,
  ...rest
}: ButtonProps) {
  return (
    <Container shape={shape} bgColor={bgColor} textColor={textColor} {...rest}>
      {children}
    </Container>
  )
}
