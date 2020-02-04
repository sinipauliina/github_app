import React, {Component} from 'react'
import {Row, Col, Spinner} from 'react-bootstrap'

const CustomSpinner = () => {
  return (
    <Row>
      <Col>
        <Spinner animation="grow" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Col>
    </Row>
  )
}

export default CustomSpinner
