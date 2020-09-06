/* eslint-disable sonarjs/no-small-switch */
const AuthInitialState = {
    user: [],
}

export const auth = (state = AuthInitialState, action) => {
  switch (action.type) {
    case "AUTH_REQUEST":
        return {
            ...state
        }
    default:
        return state
  }
}
