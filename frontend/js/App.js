import React from 'react';
import { hot } from 'react-hot-loader/root';

import { Provider } from 'react-redux'
import configureStore from 'redux/store';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { Main as MainLayout, Minimal as MinimalLayout, RouteWithLayout, HomeLayout } from './Layout';

import {
  IndexPage as IndexView,
  ComingSoon as ComingSoonView,
  HelpPage as HelpView
} from './pages';
import { history } from './redux/reducers';


const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      {/* <Switch> */}
        <RouteWithLayout
          component={ComingSoonView}
          layout={MinimalLayout}
          path="/"
          exact
        />
        <RouteWithLayout
          component={IndexView}
          layout={HomeLayout}
          path="/home"
          exact
        />
        <RouteWithLayout
          component={HelpView}
          layout={HomeLayout}
          path="/help"
          exact
        />
      {/* </Switch> */}
    </Router>
  </Provider>
);

export default hot(App);
