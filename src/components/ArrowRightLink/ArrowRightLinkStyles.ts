import styled from 'styled-components'

export const Container = styled.a`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 12px;
  strong {
    color: ${({ theme }) => theme.colors.black};
    font-weight: 600;
    font-family: ${({ theme }) => theme.fonts.montserrat};
    font-size: 16px;
  }
  cursor: pointer;
`
