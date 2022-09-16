/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components'

interface SliderContainerProps {
  imgUrl: string
  transitionEnable: boolean
}

export const SliderContainer = styled.div<SliderContainerProps>`
  height: 800px;
  width: 100%;
  opacity: 0;
  transition: background 900ms;
  background-color: black;

  background-image: url(${props => props.imgUrl});

  ${props =>
    props.transitionEnable &&
    css`
      opacity: 1;
    `}
  z-index: -1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 68%;

  & > svg {
    position: absolute;
    right: 0;
    bottom: -60px;
    margin-right: -50px;
  }
  @media (min-width: 1440px) {
    background-position: unset;
  }
  @media (min-width: 1024px) {
    background-position: right;
    background-size: contain;
  }
`

export const InfoBox = styled.div`
  position: absolute;
  top: 0;
  height: 800px;

  background: linear-gradient(
    90deg,
    #000000 30.42%,
    rgba(0, 0, 0, 0.5) 55.18%,
    rgba(0, 0, 0, 0) 73.96%
  );

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 16px;
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media (min-width: 1024px) {
    background: linear-gradient(
      90deg,
      #000000 49.2%,
      rgba(0, 0, 0, 0.5) 56.27%,
      rgba(0, 0, 0, 0) 73.96%
    );
  }
  @media (min-width: 1440px) {
    padding-left: 160px;
  }
`
export const TitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 8px;
  margin-top: 120px;

  @media (min-width: 768px) {
    width: auto;
    align-items: flex-start;
    margin-top: 107px;
  }
`

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.white};
  @media (min-width: 768px) {
    font-size: 64px;
  }
`
export const Subtitle = styled.h2`
  margin-top: 12px;
  font-size: 24px;
  white-space: nowrap;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  strong {
    font-weight: bold;
  }
  @media (min-width: 768px) {
    font-size: 56px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 12px;
  margin-top: 56px;

  button {
    max-width: 270px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    button {
      max-width: 198px;
    }
  }
`
export const AboutInvestorBox = styled.div`
  width: 100%;
  margin-top: 88px;
  display: flex;

  gap: 8px;
  @media (min-width: 768px) {
    width: auto;
    max-width: 413px;
  }
`
export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.white};
  text-align: justify;
  strong {
    font-weight: bold;
  }
`
export const SliderButtonsBox = styled.div`
  width: 100%;
  display: flex;

  margin-top: 18px;
  @media (min-width: 768px) {
    max-width: 413px;
  }
`
interface SliderTabProps {
  isActive: boolean
}

export const SliderTab = styled.div<SliderTabProps>`
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0.1;
  width: 100%;
  height: 3px;
  ${props =>
    props.isActive &&
    css`
      opacity: 1;
    `}
`
