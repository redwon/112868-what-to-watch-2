import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {compose} from 'recompose';

import {reducer} from './reducer';
import {configureAPI} from './api';
import {Router} from 'react-router-dom';
import history from './history';
import {ActionCreator} from './reducer/authorization/authorization';

import App from './components/app/app';

const init = () => {
  const api = configureAPI(() => store.dispatch(ActionCreator.requireAuthorization(true)));
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );

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
