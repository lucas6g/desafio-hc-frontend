import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 24px;
  @media (min-width: 1024px) {
    grid-template-columns: 2fr 2fr;
    align-items: center;
    gap: 16px;
  }
  @media (min-width: 1440px) {
    grid-template-columns: 2fr 2fr 1fr;
  }
`

export const ScaleContainer2 = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }
`
export const ChartInfoBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

export const ChartInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: left;

  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.montserrat};
  }

  @media (min-width: 1024px) {
    max-width: 235px;
  }
`

export const ChartInfoBlockDivisor = styled.div`
  @media (min-width: 1024px) {
    width: 3px;
    height: 336px;
    background-color: ${({ theme }) => theme.colors.white};
    opacity: 0.5;
  }
`

export const ChartImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
