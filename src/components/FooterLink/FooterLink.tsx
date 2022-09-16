import { AnchorHTMLAttributes } from 'react'
import { Container } from './FooterLinkStyles'
import NextLink from 'next/link'

interface FooterLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  linkText: string
}

export function FooterLink({ linkText, href, ...rest }: FooterLinkProps) {
  return (
    <NextLink href={String(href)}>
      <Container {...rest}>{linkText}</Container>
    </NextLink>
  )
}
