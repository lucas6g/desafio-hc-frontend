import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  row-gap: 8px;
  padding-bottom: 60px;

  div:last-child {
    display: none;
  }
  @media (min-width: 1024px) {
    padding-bottom: 96px;
    div:last-child {
      display: flex;
    }
  }
`

export const Row = styled.div`
  display: flex;
  gap: 8px;

  &:nth-child(even) {
    div:first-child {
      display: none;
    }
    div:last-child {
      margin-right: 8px;
    }
    &::before,
    &::after {
      position: relative;
      content: '';
      width: 56px;
      min-height: 142px;
      max-height: 142px;
      max-width: 142px;
      background-color: ${({ theme }) => theme.colors.white};
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

export const Brick = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-width: 142px;
  min-height: 142px;
  max-width: 142px;
  max-height: 142px;
  background-color: ${({ theme }) => theme.colors.white};
  svg {
    width: 61px;
    height: 26px;
  }
`
