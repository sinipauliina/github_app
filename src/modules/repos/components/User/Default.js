import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {withNamespaces} from 'react-i18next'

import RepoTable from '../RepoTable/RepoTable'
import './user.css'

const UserOk = props => {
  const {userName, repos, t} = props

  return (
    <>
      <Row className="header" as="header">
        <Col>
          <h1>{t('USER.REPOSITORIES')}</h1>
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

export default withNamespaces()(UserOk)
