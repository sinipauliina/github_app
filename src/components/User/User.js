import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'

import {CONTENT} from '../../constants'
import RepoTable from '../RepoTable/RepoTable'
import CustomSpinner from '../CustomSpinner/CustomSpinner'
import './user.css'

class User extends Component {
  state = {
    userName: '',
    fetching: false,
    statusCode: 0,
    repos: [],
  }

  componentDidMount = () => {
    const {user} = this.props.match.params
    const newUserName = user ? user : ''

    this.setState(
      {
        userName: newUserName,
        fetching: true,
      },
      this.fetchRepos(newUserName),
    )
  }

  fetchRepos = userName => {
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then(response => {
        if (response.status === 200) {
          response.json().then(data =>
            this.setState({
              statusCode: response.status,
              repos: data,
              fetching: false,
            }),
          )
        } else {
          this.setState({
            statusCode: response.status,
            fetching: false,
          })
        }
      })
      .catch(error => {
        this.setState({
          statusCode: 'error',
          fetching: false,
        })
      })
  }

  render() {
    const {userName, repoName, fetching, statusCode, repos} = this.state
    const notFound = statusCode === 404 && !fetching
    const fetchingError =
      statusCode !== 200 && statusCode !== 404 && statusCode !== 0 && !fetching

    return (
      <Container id="User">
        {fetching && <CustomSpinner />}

        {statusCode === 200 && (
          <>
            <Row>
              <Col>
                <h1>{userName}</h1>
              </Col>
            </Row>

            <Row>
              <Col>
                <RepoTable userName={userName} repos={repos} />
              </Col>
            </Row>
          </>
        )}

        {notFound && (
          <>
            <Row>
              <Col xs={12} sm={10} md={8}>
                <h1>{CONTENT.USER.ERROR_TITLE}</h1>
              </Col>
            </Row>

            <Row>
              <Col xs={12} sm={10} md={8}>
                <p className="error">{CONTENT.USER.NOTHING_FOUND}</p>
              </Col>
            </Row>
          </>
        )}

        {fetchingError && (
          <>
            <Row>
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
        )}
      </Container>
    )
  }
}

export default withRouter(User)
