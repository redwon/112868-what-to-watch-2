import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

const init = () => {
  const settings = {
    currentYear: new Date().getFullYear()
  };

  ReactDOM.render(
      <App currentYear={settings.currentYear} />,
      document.querySelector(`#root`)
  );
};

init();
