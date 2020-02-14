import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {Container} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'

import {setUserName, setRepoName} from '../../redux/modules/names'
import {getCommits} from '../../redux/modules/commits'
import CustomSpinner from '../CustomSpinner/CustomSpinner'
import SingleRepoOk from './SingleRepoOk'
import SingleRepoNotFound from './SingleRepoNotFound'
import SingleRepoFetchingError from './SingleRepoFetchingError'
import './singleRepo.css'

class SingleRepo extends Component {
  componentDidMount = () => {
    const {setUserName, setRepoName, getCommits, match} = this.props
    const {user, repo} = match.params

    setUserName(user)
    setRepoName(repo)
    getCommits(user, repo)
  }

  render() {
    const {userName, repoName, commits, status, loading} = this.props
    const ok = status === 200 && !loading
    const notFound = (status === 204 || status === 404) && !loading
    const fetchingError =
      status !== 200 &&
      status !== 204 &&
      status !== 404 &&
      status !== 0 &&
      !loading

    return (
      <Container id="SingleRepo">
        {loading && <CustomSpinner />}

        {ok && (
          <SingleRepoOk
            userName={userName}
            repoName={repoName}
            commits={commits}
          />
        )}

        {notFound && <SingleRepoNotFound userName={userName} />}

        {fetchingError && <SingleRepoFetchingError userName={userName} />}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  const {userName, repoName} = state.names
  const {data, status, loading} = state.commits

  return {
    userName: userName,
    repoName: repoName,
    commits: data,
    status: status,
    loading: loading,
  }
}

const mapDispatchToProps = {
  setUserName: userName => setUserName(userName),
  setRepoName: repoName => setRepoName(repoName),
  getCommits: (userName, repoName) => getCommits(userName, repoName),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(SingleRepo))
