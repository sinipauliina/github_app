import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import {CONTENT} from '../../constants'
import './notFound404.css'

const NotFound404 = () => {
  return (
    <Container id="NotFound404">
      <Row className="errorHeader" as="header">
        <Col xs={12} sm={10} md={8}>
          <h1>{CONTENT.NOT_FOUND.TITLE}</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={10} md={8}>
          <p className="error">{CONTENT.NOT_FOUND.MESSAGE}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound404
