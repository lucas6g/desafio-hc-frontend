import { useState, useEffect } from 'react'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'
import {
  ChartsButtonContainer,
  ChartsHeader,
  ChartsSection,
  ChartsTab,
  ChartsTabs,
  ChartSubtitle,
  ChartTabsBox,
  ChartTitle,
  NextButton,
  PreviosButton,
  TitleAndSubtitleBox
} from './ChartSliderStyles'
import SwiperType from 'swiper'
import { Swiper } from 'swiper/react'
import { ChartSliderItem } from './ChartSliderItem/ChartSliderItem'
import { SwiperSlide } from 'swiper/react'
import { charts } from '../../data/charts'

export function ChartSlider() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType>(
    {} as SwiperType
  )

  const [isOnclientSide, setIsOnClientSide] = useState(false)
  const [isBegin, setIsBegin] = useState(true)
  const [isEnd, setisEnd] = useState(false)

  useEffect(() => {
    setIsOnClientSide(true)
  }, [])
  return (
    <ChartsSection>
      <ChartsHeader>
        <TitleAndSubtitleBox>
          <ChartTitle>
            VOLUME DE INVESTIMENTO <br /> POR ESTÁGIO
          </ChartTitle>
          <ChartSubtitle>Aplicados em startups no Brasil</ChartSubtitle>
        </TitleAndSubtitleBox>

        <ChartsButtonContainer>
          <PreviosButton
            onClick={() => {
              swiperInstance?.slidePrev()
            }}
            isActive={isEnd || (!isBegin && !isEnd)}
          >
            <IoChevronBack />
            Anterior
          </PreviosButton>
          <NextButton
            isActive={isBegin || (!isBegin && !isEnd)}
            onClick={() => {
              swiperInstance?.slideNext()
            }}
          >
            Próximo
            <IoChevronForward />
          </NextButton>
        </ChartsButtonContainer>
      </ChartsHeader>
      <Swiper
        onSwiper={(swiper) => {
          setSwiperInstance(swiper)
        }}
        onSlideChange={() => {
          if (swiperInstance) {
            setIsBegin(swiperInstance.isBeginning)
            setisEnd(swiperInstance.isEnd)
          }
        }}
      >
        {charts.map((chart) => {
          return (
            <SwiperSlide key={chart.chartImageUrl}>
              <ChartSliderItem
                key={chart.chartImageUrl}
                chartImageUrl={chart.chartImageUrl}
                chartInfoBlock1={chart.chartInfoBlock1}
                chartInfoBlock2={chart.chartInfoBlock2}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <ChartTabsBox>
        <ChartsTabs>
          {isOnclientSide &&
            swiperInstance.slides.map((slide, index) => {
              return (
                <ChartsTab
                  isActive={index === swiperInstance.activeIndex}
                  key={index}
                />
              )
            })}
        </ChartsTabs>
        <span>Fonte: Distrito</span>
      </ChartTabsBox>
    </ChartsSection>
  )
}
