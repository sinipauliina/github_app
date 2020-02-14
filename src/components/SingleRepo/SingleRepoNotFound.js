import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'

import {CONTENT} from '../../constants'
import './singleRepo.css'

const SingleRepoNotFound = props => {
  const {userName} = props

  return (
    <>
      <Row className="errorHeader" as="header">
        <Col xs={12} sm={10} md={8}>
          <h1>{CONTENT.SINGLE_REPO.ERROR_TITLE}</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={10} md={8}>
          <p className="error">{CONTENT.SINGLE_REPO.NOTHING_FOUND}</p>
          <p>
            <Link to={`/${userName}`}>
              &larr; {CONTENT.SINGLE_REPO.GO_BACK}
            </Link>
          </p>
        </Col>
      </Row>
    </>
  )
}

export default SingleRepoNotFound
