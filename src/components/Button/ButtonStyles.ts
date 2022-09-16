/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components'

type ContainerProps = {
  bgColor: string
  textColor: string
  shape: 'filled' | 'outlined'
}

export const Container = styled.button<ContainerProps>`
  background-color: ${({ bgColor }) => bgColor};
  height: 54px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: none;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: 600;
  font-size: 18px;
  color: ${({ textColor }) => textColor};
  cursor: pointer;
  transition: 0.3s;

  ${props =>
    props.shape === 'outlined' &&
    css<ContainerProps>`
      background-color: transparent;
      border: 1px solid;
      border-color: ${({ textColor }) => textColor};
    `}

  &:hover {
    box-shadow: -8px 8px
      ${({ bgColor, theme }) =>
        bgColor === theme.colors.black
          ? theme.colors.gray
          : theme.colors.darkGray};
    transition: 0.3s;
  }
`
