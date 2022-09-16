import { AnchorHTMLAttributes } from 'react'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { Container } from './ArrowRightLinkStyles'

interface ArrowRightLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  linkText: string
}

export function ArrowRightLink({ linkText, ...rest }: ArrowRightLinkProps) {
  return (
    <Container {...rest}>
      <strong>{linkText}</strong>
      <HiOutlineArrowRight />
    </Container>
  )
}
