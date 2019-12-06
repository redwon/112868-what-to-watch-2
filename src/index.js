import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {compose} from 'recompose';

import {reducer} from './reducer';
import {Operations} from './reducer/movies/movies';
import {Operations as PromoMovieOperations} from './reducer/promo-movie/promo-movie';
import {configureAPI} from './api';
import {Router} from 'react-router-dom';
import history from './history';

import App from './components/app/app';

const init = () => {
  const api = configureAPI((...args) => store.dispatch(...args));
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );

  store.dispatch(Operations.loadMovies());
  store.dispatch(PromoMovieOperations.loadPromoMovie());

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
