import Image from 'next/image'
import { Container } from '../MagazineSliderStyles'

interface MagazineCardProps {
  imgUrl: string
  imgWidth: number
  imgHeight: number
  imgAlt: string
}

export function MagazineCard({
  imgAlt,
  imgHeight,
  imgWidth,
  imgUrl
}: MagazineCardProps) {
  return (
    <Container>
      <Image
        src={imgUrl}
        width={imgWidth}
        height={imgHeight}
        quality={100}
        alt={imgAlt}
      />
    </Container>
  )
}
