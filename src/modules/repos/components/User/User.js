import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {Container} from 'react-bootstrap'

import {setUserName} from '../../redux/modules/names'
import {getRepos} from '../../redux/modules/repos'
import CustomSpinner from '../CustomSpinner/CustomSpinner'
import UserOk from './UserOk'
import UserNotFound from './UserNotFound'
import UserFetchingError from './UserFetchingError'
import './user.css'

class User extends Component {
  componentDidMount = () => {
    const {setUserName, getRepos, match} = this.props
    const {user} = match.params

    setUserName(user)
    getRepos(user)
  }

  render() {
    const {userName, repos, status, loading} = this.props
    const ok = status === 200 && !loading
    const notFound = (status === 204 || status === 404) && !loading
    const fetchingError =
      status !== 200 &&
      status !== 204 &&
      status !== 404 &&
      status !== 0 &&
      !loading

    return (
      <Container id="User">
        {loading && <CustomSpinner />}

        {ok && <UserOk userName={userName} repos={repos} />}

        {notFound && <UserNotFound />}

        {fetchingError && <UserFetchingError />}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  const {userName} = state.names
  const {data, status, loading} = state.repos

  return {
    userName: userName,
    repos: data,
    status: status,
    loading: loading,
  }
}

const mapDispatchToProps = {
  setUserName: userName => setUserName(userName),
  getRepos: userName => getRepos(userName),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(User))
