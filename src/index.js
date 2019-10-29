import React from 'react';
import ReactDOM from 'react-dom';

import films from './mocks/films';

import App from './components/app/app';

const init = (movies) => {
  const settings = {
    currentYear: new Date().getFullYear()
  };

  ReactDOM.render(
      <App
        currentYear={settings.currentYear}
        movies={movies}
      />,
      document.querySelector(`#root`)
  );
};

init(films);
