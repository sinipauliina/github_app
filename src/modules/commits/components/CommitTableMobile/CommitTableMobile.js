import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'

import {URLS} from '../../constants'
import './commitTableMobile.css'

const CommitTableMobile = props => {
  const {commits} = props

  return (
    <Container id="CommitTableMobile">
      {commits.slice(0, 10).map(commit => {
        const date = new Date(commit.commit.author.date).toLocaleString()

        return (
          <Row className="card">
            <Row as="header">
              <Col xs={12} sm={3} md={2}>
                {commit.author && commit.author.avatar_url ? (
                  <Image
                    className="avatar"
                    src={commit.author.avatar_url}
                    rounded
                  />
                ) : (
                  <Image
                    className="avatar"
                    src={URLS.PLACEHOLDER_IMG}
                    rounded
                  />
                )}
              </Col>

              <Col xs={12} sm={9} md={10}>
                <p className="author">
                  {commit.commit.author.name ? commit.commit.author.name : '-'}
                </p>

                <p className="date">{date}</p>
              </Col>
            </Row>

            <Row>
              <Col>
                <p className="message">
                  {commit.commit.message ? commit.commit.message : '-'}
                </p>
              </Col>
            </Row>
          </Row>
        )
      })}
    </Container>
  )
}

export default CommitTableMobile
