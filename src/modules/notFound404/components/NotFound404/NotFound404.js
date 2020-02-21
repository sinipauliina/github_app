import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {withNamespaces} from 'react-i18next'

import './notFound404.css'

const NotFound404 = props => {
  const {t} = props

  return (
    <Container id="NotFound404">
      <Row className="errorHeader" as="header">
        <Col xs={12} sm={10} md={8}>
          <h1>{t('NOT_FOUND.TITLE')}</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={10} md={8}>
          <p className="error">{t('NOT_FOUND.MESSAGE')}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default withNamespaces()(NotFound404)
