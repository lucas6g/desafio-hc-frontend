import {
  Answer,
  Container,
  QuestionDivisor,
  QuestionTitle
} from './QuestionBoxStyles'
import NextLink from 'next/link'

interface QuestionBoxProps {
  questionTitle: string
  answer: string
  linkText: string
  linkHref: string
  hasBorder?: boolean
}

export function QuestionBox({
  questionTitle,
  answer,
  linkText,
  linkHref,
  hasBorder = true
}: QuestionBoxProps) {
  return (
    <>
      <Container>
        <QuestionTitle>{questionTitle}</QuestionTitle>
        <Answer>
          {answer}{' '}
          <NextLink href={linkHref}>
            <strong>{linkText}</strong>
          </NextLink>
        </Answer>
      </Container>
      <QuestionDivisor hasBorder={hasBorder} />
    </>
  )
}
