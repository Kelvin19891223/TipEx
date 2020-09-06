import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';

import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(
    apiMiddleware,
  )(createStore)

const configureStore = initialState => {
    return createStoreWithMiddleware(
      rootReducer,
      initialState,
      // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}

export default configureStore;
