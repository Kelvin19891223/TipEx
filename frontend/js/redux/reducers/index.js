import * as auth from './auth'

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router';

import { createHashHistory } from 'history';

export const history = createHashHistory();

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: auth.auth,
})

const rootReduer = createRootReducer(history);

export default rootReduer;

// export const isAuthenticated = state => auth.isAuthenticated(state.auth)
// export const isAccessTokenExpired = state => auth.isAccessTokenExpired(state.auth)
// export const authErrors = state => auth.errors(state.auth)
