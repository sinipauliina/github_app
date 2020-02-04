// ACTIONS
const GET_REPOS_SUCCESS = 'GET_REPOS_SUCCESS'
const GET_REPOS_FAILED = 'GET_REPOS_FAILED'

export const fetchRepos = userName => {
  return dispatch => {
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
}

// INITIAL STATE
const initialState = {}

// REDUCER
const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOS_SUCCESS:
      return {}

    default:
      return state
  }
}

// ACTION CREATORS

export default reposReducer
