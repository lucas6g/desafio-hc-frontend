import {
  ChartImageContainer,
  ChartInfoBlock,
  ChartInfoBlockContainer,
  ChartInfoBlockDivisor,
  Container,
  ScaleContainer2
} from './ChartSlideItemStyles'
import { ScaleTwo } from '../../Icons'
import Image from 'next/image'

interface ChartSliderItemProps {
  chartImageUrl: string
  chartInfoBlock1: string
  chartInfoBlock2: string
}

export function ChartSliderItem({
  chartImageUrl,
  chartInfoBlock1,
  chartInfoBlock2
}: ChartSliderItemProps) {
  return (
    <Container>
      <ChartInfoBlockContainer>
        <ChartInfoBlock
          dangerouslySetInnerHTML={{
            __html: chartInfoBlock1
          }}
        ></ChartInfoBlock>
        <ChartInfoBlockDivisor />
        <ChartInfoBlock
          dangerouslySetInnerHTML={{
            __html: chartInfoBlock2
          }}
        ></ChartInfoBlock>
      </ChartInfoBlockContainer>
      <ChartImageContainer>
        <Image
          src={chartImageUrl}
          width={600}
          height={500}
          quality={100}
          alt="Grafico"
        />
      </ChartImageContainer>
      <ScaleContainer2>
        <ScaleTwo />
      </ScaleContainer2>
    </Container>
  )
}
