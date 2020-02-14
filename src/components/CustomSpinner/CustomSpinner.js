import React from 'react'
import {Row, Col, Spinner} from 'react-bootstrap'

import {CONTENT} from '../../constants'

const CustomSpinner = () => {
  return (
    <Row>
      <Col>
        <Spinner animation="grow" role="status">
          <span className="sr-only">{CONTENT.CUSTOM_SPINNER.LOADING}</span>
        </Spinner>
      </Col>
    </Row>
  )
}

export default CustomSpinner
