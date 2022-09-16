import styled from 'styled-components'

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    text-align: left;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 400;
    line-height: 13px;
    font-family: ${({ theme }) => theme.fonts.montserrat};
  }
  a {
    padding-bottom: 5px;
    max-width: 88px;
    strong {
      font-size: 12px;
    }
    svg {
      height: 12px;
      width: 12px;
    }
  }

  @media (min-width: 768px) {
    gap: 16px;
    p {
      font-size: 16px;
      line-height: 22px;
    }
    a {
      padding-bottom: 11px;
      max-width: 128px;
      strong {
        font-size: 18px;
      }
      svg {
        height: 24px;
        width: 24px;
      }
    }
  }
`
export const Title = styled.h4`
  text-align: left;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  line-height: 16px;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 16px;
  }
`
