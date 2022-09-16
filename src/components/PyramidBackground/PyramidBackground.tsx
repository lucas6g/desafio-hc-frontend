import { Container, Row, Brick } from './PyramidBackgroundStyles'
import Pyramid from '../../../public/icons/pyramid.svg'
export function PyramidBackground() {
  const result = new Array(15)

  const row1 = result.fill(0).map(() => Math.random())
  const row2 = result.fill(0).map(() => Math.random())
  const row3 = result.fill(0).map(() => Math.random())

  return (
    <Container>
      <Row>
        {row1.map((number) => {
          return (
            <Brick key={number}>
              <Pyramid />
            </Brick>
          )
        })}
      </Row>
      <Row>
        {row2.map((number) => {
          return (
            <Brick key={number}>
              <Pyramid />
            </Brick>
          )
        })}
      </Row>
      <Row>
        {row3.map((number) => {
          return (
            <Brick key={number}>
              <Pyramid />
            </Brick>
          )
        })}
      </Row>
    </Container>
  )
}
