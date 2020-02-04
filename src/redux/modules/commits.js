// ACTIONS

// INITIAL STATE
const initialState = {}

// REDUCER
const commitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACB:
      return {}

    default:
      return state
  }
}

// ACTION CREATORS

export default commitsReducer
