import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {reducer} from './reducer';

import movies from './mocks/movies';

import App from './components/app/app';

const init = (moviesList) => {
  const store = createStore(reducer);
  const settings = {
    currentYear: new Date().getFullYear()
  };

  ReactDOM.render(
      <Provider store={store}>
        <App
          currentYear={settings.currentYear}
          movies={moviesList}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init(movies);
