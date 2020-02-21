import axios from 'axios'

// ACTION CONSTANTS
const LOADING = 'LOADING'
const LOADING_DONE = 'LOADING_DONE'
const GET_REPOS_SUCCESS = 'GET_REPOS_SUCCESS'
const GET_REPOS_FAILED = 'GET_REPOS_FAILED'

// INITIAL STATE
const initialState = {
  data: [],
  status: 0,
  loading: false,
}

// REDUCER
const reposReducer = (state = initialState, action) => {
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

    case GET_REPOS_SUCCESS:
      return {
        ...state,
        data: action.data,
        status: action.status,
      }

    case GET_REPOS_FAILED:
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

export const getReposSuccess = (data, status) => {
  return {
    type: GET_REPOS_SUCCESS,
    data: data,
    status: status,
  }
}

export const getReposFailed = status => {
  return {
    type: GET_REPOS_FAILED,
    status: status,
  }
}

export const getRepos = userName => {
  return dispatch => {
    dispatch(loading())

    return axios
      .get(`https://api.github.com/users/${userName}/repos`)
      .then(response => {
        dispatch(loadingDone())

        if (response.data.length) {
          dispatch(getReposSuccess(response.data, response.status))
        } else {
          dispatch(getReposFailed(204))
        }
      })
      .catch(error => {
        dispatch(loadingDone())

        if (error.response) {
          dispatch(getReposFailed(error.response.status))
        } else {
          dispatch(getReposFailed(500))
        }
      })
  }
}

export default reposReducer
