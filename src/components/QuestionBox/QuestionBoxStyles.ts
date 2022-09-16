/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components'

export const Container = styled.div``
export const QuestionTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: bold;
  font-size: 16px;
  @media (min-width: 992px) {
    font-size: 18px;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`
export const Answer = styled.p`
  padding: 20px 0px;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  text-align: left;
  @media (min-width: 992px) {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  color: ${({ theme }) => theme.colors.black};
  strong {
    font-weight: 800;
    cursor: pointer;
    display: inline-block;
  }
  strong::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #000;
    transition: width 0.7s;
  }

  strong:hover::after {
    width: 100%;
  }
`

interface QuestionDivisorProps {
  hasBorder: boolean
}

export const QuestionDivisor = styled.div<QuestionDivisorProps>`
  height: 1px;
  opacity: 0.1;
  margin-bottom: 8px;

  ${props =>
    props.hasBorder &&
    css`
      border: 1px solid #000000;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `}
`
