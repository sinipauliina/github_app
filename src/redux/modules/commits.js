import axios from 'axios'

// ACTION CONSTANTS
const LOADING = 'LOADING'
const LOADING_DONE = 'LOADING_DONE'
const GET_COMMITS_SUCCESS = 'GET_COMMITS_SUCCESS'
const GET_COMMITS_FAILED = 'GET_COMMITS_FAILED'

// INITIAL STATE
const initialState = {
  data: [],
  status: 0,
  loading: false,
}

// REDUCER
const commitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      }

    case LOADING_DONE:
      return {
        ...state,
        loading: false,
      }

    case GET_COMMITS_SUCCESS:
      return {
        ...state,
        data: action.data,
        status: action.status,
      }

    case GET_COMMITS_FAILED:
      return {
        ...state,
        data: [],
        status: action.status,
      }

    default:
      return state
  }
}

// ACTION CREATORS
export const loading = () => {
  return {
    type: LOADING,
  }
}

export const loadingDone = () => {
  return {
    type: LOADING_DONE,
  }
}

export const getCommitsSuccess = (data, status) => {
  return {
    type: GET_COMMITS_SUCCESS,
    data: data,
    status: status,
  }
}

export const getCommitsFailed = status => {
  return {
    type: GET_COMMITS_FAILED,
    status: status,
  }
}

export const getCommits = (userName, repoName) => {
  return dispatch => {
    dispatch(loading())

    return axios
      .get(`https://api.github.com/repos/${userName}/${repoName}/commits`)
      .then(response => {
        dispatch(loadingDone())

        if (response.data.length) {
          dispatch(getCommitsSuccess(response.data, response.status))
        } else {
          dispatch(getCommitsFailed(204))
        }
      })
      .catch(error => {
        dispatch(loadingDone())

        if (error.response) {
          dispatch(getCommitsFailed(error.response.status))
        } else {
          dispatch(getCommitsFailed(500))
        }
      })
  }
}

export default commitsReducer
