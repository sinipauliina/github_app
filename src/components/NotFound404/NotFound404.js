import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import {CONTENT} from '../../constants'
import './notFound404.css'

class NotFound404 extends Component {
  render() {
    return (
      <Container id="NotFound404">
        <Row>
          <Col xs={12} sm={10} md={8}>
            <h1>{CONTENT.NOT_FOUND.TITLE}</h1>

            <p>{CONTENT.NOT_FOUND.MESSAGE}</p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default NotFound404
