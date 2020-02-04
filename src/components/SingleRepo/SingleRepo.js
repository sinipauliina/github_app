import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Container, Row, Col, Table, Image} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'

import {CONTENT} from '../../constants'
import CustomSpinner from '../CustomSpinner/CustomSpinner'
import CommitTable from '../CommitTable/CommitTable'
import './singleRepo.css'

class SingleRepo extends Component {
  state = {
    fetching: false,
    statusCode: 0,
    commits: [],
    userName: '',
    repoName: '',
  }

  componentDidMount = () => {
    const {user, repo} = this.props.match.params
    const newUserName = user ? user : ''
    const newRepoName = repo ? repo : ''

    this.setState(
      {
        userName: newUserName,
        repoName: newRepoName,
        fetching: true,
      },
      this.fetchRepoCommits(newUserName, newRepoName),
    )
  }

  fetchRepoCommits = (userName, repoName) => {
    fetch(`https://api.github.com/repos/${userName}/${repoName}/commits`)
      .then(response => {
        if (response.status === 200) {
          response.json().then(data =>
            this.setState({
              statusCode: 200,
              commits: data,
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
    const {commits, fetching, statusCode, userName, repoName} = this.state
    const notFound = statusCode === 404 && !fetching
    const fetchingError =
      statusCode !== 200 && statusCode !== 404 && statusCode !== 0 && !fetching

    return (
      <Container id="SingleRepo">
        {fetching && (
          <Container id="SingleRepo">
            <CustomSpinner />
          </Container>
        )}

        {statusCode === 200 && (
          <>
            <Row>
              <Col>
                <h1>
                  <Link to={`/${userName}`}>{userName}</Link> &rarr; {repoName}
                </h1>
              </Col>
            </Row>

            <Row>
              <Col>
                <CommitTable commits={commits} />
              </Col>
            </Row>
          </>
        )}
      </Container>
    )
  }
}

export default withRouter(SingleRepo)
