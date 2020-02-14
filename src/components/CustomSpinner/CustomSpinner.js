import React from 'react'
import {Row, Col, Spinner} from 'react-bootstrap'
import {withNamespaces} from 'react-i18next'

const CustomSpinner = props => {
  const {t} = props

  return (
    <Row>
      <Col>
        <Spinner animation="grow" role="status">
          <span className="sr-only">{t('CUSTOM_SPINNER.LOADING')}</span>
        </Spinner>
      </Col>
    </Row>
  )
}

export default withNamespaces()(CustomSpinner)
