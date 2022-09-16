import { useState, useEffect } from 'react'

import {
  SliderContainer,
  InfoBox,
  TitleBox,
  Title,
  Subtitle,
  ButtonsContainer,
  AboutInvestorBox,
  Description,
  SliderButtonsBox,
  SliderTab
} from './SliderStyles'
import Image from 'next/image'
import { investors } from '../../data/investors'
import NextLink from 'next/link'
import { theme } from '../../styles/theme'
import { Button } from '../Button/Button'
export function Slider() {
  const [investorIndex, setInvestorIndex] = useState(0)
  const [transitionEnable, setEnableTransition] = useState(false)

  useEffect(() => {
    setEnableTransition(true)
    function changeImage() {
      setEnableTransition(false)
      setInvestorIndex(
        investors.length === investorIndex + 1 ? 0 : investorIndex + 1
      )
      setEnableTransition(true)
    }
    const interval = setInterval(changeImage, 7000)
    return () => {
      clearInterval(interval)
    }
  }, [investorIndex])

  const Icon = investors[investorIndex].Icon

  return (
    <SliderContainer
      imgUrl={investors[investorIndex].imageSrc}
      transitionEnable={transitionEnable}
    >
      <InfoBox>
        <NextLink href="#">
          <a href="#">
            <Image
              src="/images/logo.png"
              width={67}
              height={40}
              quality={100}
              alt="Logo"
            />
          </a>
        </NextLink>
        <TitleBox>
          <Title>MEDIA FOR EQUITY</Title>
          <Subtitle>
            Invest like a <strong>{investors[investorIndex].name}</strong>
          </Subtitle>
        </TitleBox>
        <ButtonsContainer>
          <Button
            shape="filled"
            textColor={theme.colors.black}
            bgColor={theme.colors.white}
          >
            Seja Investidor
          </Button>
          <Button
            shape="outlined"
            textColor={theme.colors.white}
            bgColor={theme.colors.white}
          >
            Para Startups
          </Button>
        </ButtonsContainer>

        <AboutInvestorBox>
          <div>
            <Icon height={27} width={30} fill="white" />
          </div>
          <Description
            dangerouslySetInnerHTML={{
              __html: investors[investorIndex].description
            }}
          ></Description>
        </AboutInvestorBox>
        <SliderButtonsBox>
          {investors.map((_, index) => {
            return <SliderTab isActive={index === investorIndex} key={index} />
          })}
        </SliderButtonsBox>
      </InfoBox>
    </SliderContainer>
  )
}
