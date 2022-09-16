/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components'

export const ChartsSection = styled.section`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 24px 16px;
  @media (min-width: 1440px) {
    max-width: calc(100% - 78px);
    padding: 74px 24px 74px 160px;
    height: 820px;
  }
`
export const ChartsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 24px;
  @media (min-width: 1024px) {
    grid-template-columns: 2fr 2fr;
    gap: 16px;
    margin-bottom: 85px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 85px;
    grid-template-columns: 2fr 2fr 1fr;
    gap: 16px;
  }
`

export const ChartsHeader = styled.header`
  width: 100%;
  @media (min-width: 1024px) {
    padding-right: 160px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 32px;
  }
`
export const TitleAndSubtitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`
export const ChartTitle = styled.h3`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.white};
  @media (min-width: 1024px) {
    font-size: 32px;
  }
`
export const ChartSubtitle = styled.h4`
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.montserrat};
  @media (min-width: 1024px) {
    font-size: 24px;
  }
`
export const ChartsButtonContainer = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    height: 32px;
    max-width: 223px;
    width: 100%;
  }
`
interface ProviosAndNexButtonProps {
  isActive: boolean
}
export const PreviosButton = styled.button<ProviosAndNexButtonProps>`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
  font-size: 16px;
  gap: 8px;
  padding-right: 20px;
  border-right: 1px solid;
  ${props =>
    props.isActive &&
    css`
      cursor: pointer;
      opacity: 1;
    `}

  svg {
    height: 32px;
    width: 32px;
  }
`
export const NextButton = styled.button<ProviosAndNexButtonProps>`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  opacity: 0.5;
  color: ${({ theme }) => theme.colors.white};

  ${props =>
    props.isActive &&
    css`
      cursor: pointer;
      opacity: 1;
    `}

  font-size: 16px;
  gap: 8px;
  padding-left: 20px;

  svg {
    height: 32px;
    width: 32px;
  }
`

export const ChartTabsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;

  span {
    white-space: nowrap;
    font-size: 14px;
    font-weight: medium;
    font-family: ${({ theme }) => theme.fonts.montserrat};
    color: ${({ theme }) => theme.colors.white};
  }
  @media (min-width: 1024px) {
    align-items: center;
  }
`
export const ChartsTabs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`
interface SliderTabProps {
  isActive: boolean
}

export const ChartsTab = styled.button<SliderTabProps>`
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 3px;

  cursor: pointer;
  opacity: 0.5;

  ${props =>
    props.isActive &&
    css`
      opacity: 1;
    `}
`
