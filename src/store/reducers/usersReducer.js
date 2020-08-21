const initialState = {
  users: [], 
  loginCredentials: {}, 
  currentUser: {}, 
  isLoggedIn: false
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USERS_SET_FIELD_VALUE': 
      return {
        ...state, 
        loginCredentials: Object.assign(state.loginCredentials, action.value)
      }
    case 'SET_USER':
      return {
        ...state,
        currentUser: action.user,
        isLoggedIn: true

      }
    default:
      return state;
  }
}

export default usersReducer;