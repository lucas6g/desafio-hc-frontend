import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightLink } from '../ArrowRightLink/ArrowRightLink'
import { Container, Title } from './NewPostStyles'

interface NewsPostProps {
  title: string
  postContent: string
  imgUrl: string
  imageWidth: number
  imageHeight: number
  imageAlt: string
  readMoreLinkHref: string
}

export function NewsPost({
  imageAlt,
  imageHeight,
  imageWidth,
  imgUrl,
  readMoreLinkHref,
  title,
  postContent
}: NewsPostProps) {
  return (
    <Container>
      <Image
        src={imgUrl}
        width={imageWidth}
        height={imageHeight}
        quality={100}
        alt={imageAlt}
      />
      <Title>{title}</Title>

      <p
        dangerouslySetInnerHTML={{
          __html: postContent
        }}
      ></p>

      <Link href={readMoreLinkHref}>
        <ArrowRightLink linkText="Leia mais" />
      </Link>
    </Container>
  )
}
