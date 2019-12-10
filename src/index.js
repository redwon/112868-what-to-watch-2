import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {compose} from 'recompose';

import {configureAPI} from './api';
import {reducer} from './reducer';
import {ActionCreator} from './reducer/authorization/authorization';
import {Operations} from './reducer/user/user';
import history from './history';

import App from './components/app/app';

const init = () => {
  const api = configureAPI(() => store.dispatch(ActionCreator.requireAuthorization(true)));

  /* eslint-disable no-underscore-dangle */
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );
  /* eslint-enable */

  store.dispatch(Operations.checkLogin());

  ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
          <App/>
        </Router>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
