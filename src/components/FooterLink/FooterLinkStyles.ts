import styled from 'styled-components'

export const Container = styled.a`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  line-height: 19px;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  cursor: pointer;
`
