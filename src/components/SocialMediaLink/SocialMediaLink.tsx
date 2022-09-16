import { AnchorHTMLAttributes } from 'react'
import { Container } from './SocialMediaLinkStyles'

interface SocialMediaLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: any
}

export function SocialMediaLink({ icon: Icon, ...rest }: SocialMediaLinkProps) {
  return (
    <Container target="_blank" {...rest}>
      <Icon />
    </Container>
  )
}
