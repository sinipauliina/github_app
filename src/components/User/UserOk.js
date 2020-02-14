import React from 'react'
import {Row, Col} from 'react-bootstrap'

import {CONTENT} from '../../constants'
import RepoTable from '../RepoTable/RepoTable'
import './user.css'

const UserOk = props => {
  const {userName, repos} = props

  return (
    <>
      <Row className="header" as="header">
        <Col>
          <h1>{CONTENT.USER.REPOSITORIES}</h1>
          <p>{userName}</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <RepoTable userName={userName} repos={repos} />
        </Col>
      </Row>
    </>
  )
}

export default UserOk
