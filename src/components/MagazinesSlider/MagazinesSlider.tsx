import Marquee from 'react-fast-marquee'
import { MagazineCard } from './MagazineCard/MagazineCard'
import { Container } from './MagazineSliderStyles'

const magazines = [
  {
    imgUrl: '/images/exame.png',
    imgWidth: 200,
    imgHeight: 34,
    imgAlt: 'Revista Exame'
  },

  {
    imgUrl: '/images/valor_economico.png',
    imgWidth: 96,
    imgHeight: 34,
    imgAlt: 'Revista Valor Economico'
  },
  {
    imgUrl: '/images/forbes.png',
    imgWidth: 122,
    imgHeight: 34,
    imgAlt: 'Revista Forbes'
  },
  {
    imgUrl: '/images/startse.png',
    imgWidth: 193,
    imgHeight: 34,
    imgAlt: 'Revista Startse'
  },
  {
    imgUrl: '/images/nexo.png',
    imgWidth: 140,
    imgHeight: 34,
    imgAlt: 'Revista Nexo'
  },
  {
    imgUrl: '/images/estadao.png',
    imgWidth: 148,
    imgHeight: 34,
    imgAlt: 'Revista Estadão'
  },
  {
    imgUrl: '/images/exame.png',
    imgWidth: 200,
    imgHeight: 34,
    imgAlt: 'Revista Exame'
  },

  {
    imgUrl: '/images/valor_economico.png',
    imgWidth: 96,
    imgHeight: 34,
    imgAlt: 'Revista Valor Economico'
  },
  {
    imgUrl: '/images/forbes.png',
    imgWidth: 122,
    imgHeight: 34,
    imgAlt: 'Revista Forbes'
  },
  {
    imgUrl: '/images/startse.png',
    imgWidth: 193,
    imgHeight: 34,
    imgAlt: 'Revista Startse'
  },
  {
    imgUrl: '/images/nexo.png',
    imgWidth: 140,
    imgHeight: 34,
    imgAlt: 'Revista Nexo'
  },
  {
    imgUrl: '/images/estadao.png',
    imgWidth: 148,
    imgHeight: 34,
    imgAlt: 'Revista Estadão'
  }
]

export function MagazinesSlider() {
  return (
    <Marquee>
      <Container>
        {magazines.map((magazine, index) => {
          return (
            <MagazineCard
              key={index}
              imgUrl={magazine.imgUrl}
              imgAlt={magazine.imgAlt}
              imgWidth={magazine.imgWidth}
              imgHeight={magazine.imgHeight}
            />
          )
        })}
      </Container>
    </Marquee>
  )
}
