import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import {withNamespaces} from 'react-i18next'

import './singleRepo.css'

const SingleRepoNotFound = props => {
  const {userName, t} = props

  return (
    <>
      <Row className="errorHeader" as="header">
        <Col xs={12} sm={10} md={8}>
          <h1>{t('SINGLE_REPO.ERROR_TITLE')}</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={10} md={8}>
          <p className="error">{t('SINGLE_REPO.NOTHING_FOUND')}</p>
          <p>
            <Link to={`/${userName}`}>&larr; {t('SINGLE_REPO.GO_BACK')}</Link>
          </p>
        </Col>
      </Row>
    </>
  )
}

export default withNamespaces()(SingleRepoNotFound)
