import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main';

const App = ({currentYear, movies}) => {
  return (
    <Main
      copyrightYear={currentYear}
      movies={movies}
    />
  );
};

App.propTypes = {
  currentYear: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string
  })),
};

export default App;
