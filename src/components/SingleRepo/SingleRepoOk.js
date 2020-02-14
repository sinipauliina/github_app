import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import {withNamespaces} from 'react-i18next'

import CommitTable from '../CommitTable/CommitTable'
import CommitTableMobile from '../CommitTableMobile/CommitTableMobile'
import './singleRepo.css'

const SingleRepoOk = props => {
  const {userName, repoName, commits, t} = props

  return (
    <>
      <Row className="header" as="header">
        <Col>
          <h1>{t('SINGLE_REPO.LATEST_COMMITS')}</h1>
          <p>
            <Link to={`/${userName}`}>{userName}</Link> &rarr; {repoName}
          </p>
        </Col>
      </Row>

      <Row>
        <Col className="hideMd">
          <CommitTable commits={commits} />
        </Col>

        <Col className="showMd">
          <CommitTableMobile commits={commits} />
        </Col>
      </Row>
    </>
  )
}

export default withNamespaces()(SingleRepoOk)
