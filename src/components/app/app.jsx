import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main';

const App = (props) => {
  const {currentYear} = props;

  return <Main copyrightYear={currentYear}/>;
};

App.propTypes = {
  currentYear: PropTypes.number
};

export default App;
