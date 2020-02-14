import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {withNamespaces} from 'react-i18next'

import './user.css'

const UserOk = props => {
  const {t} = props

  return (
    <>
      <Row className="errorHeader" as="header">
        <Col xs={12} sm={10} md={8}>
          <h1>{t('USER.ERROR_TITLE')}</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={10} md={8}>
          <p className="error">{t('USER.NOTHING_FOUND')}</p>
        </Col>
      </Row>
    </>
  )
}

export default withNamespaces()(UserOk)
