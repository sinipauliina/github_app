import React from 'react'
import {Row, Col} from 'react-bootstrap'

import {CONTENT} from '../../constants'
import './user.css'

const UserOk = () => {
  return (
    <>
      <Row className="errorHeader" as="header">
        <Col xs={12} sm={10} md={8}>
          <h1>{CONTENT.USER.ERROR_TITLE}</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={10} md={8}>
          <p className="error">{CONTENT.USER.FETCHING_ERROR}</p>
        </Col>
      </Row>
    </>
  )
}

export default UserOk
