// ACTION CONSTANTS
const SET_USERNAME = 'SET_USERNAME'
const SET_REPONAME = 'SET_REPONAME'

// INITIAL STATE
const initialState = {
  userName: '',
  repoName: '',
}

// REDUCER
const namesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        userName: action.userName,
      }

    case SET_REPONAME:
      return {
        ...state,
        repoName: action.repoName,
      }

    default:
      return state
  }
}

// ACTION CREATORS
export const setUserName = userName => {
  return {
    type: SET_USERNAME,
    userName: userName,
  }
}

export const setRepoName = repoName => {
  return {
    type: SET_REPONAME,
    repoName: repoName,
  }
}

export default namesReducer
