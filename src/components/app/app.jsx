import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {movieType} from '../../types';

import {ActionCreator} from '../../reducer';

import Main from '../main/main';

const App = ({currentYear, genre, movies, filteredMovies, onGenreChange}) => {
  return (
    <Main
      copyrightYear={currentYear}
      genre={genre}
      movies={movies}
      filteredMovies={filteredMovies}
      onGenreChange={onGenreChange}
    />
  );
};

App.propTypes = {
  currentYear: PropTypes.number.isRequired,
  genre: PropTypes.string,
  movies: PropTypes.arrayOf(movieType),
  filteredMovies: PropTypes.arrayOf(movieType),
  onGenreChange: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genre: state.genre,
  movies: state.movies,
  filteredMovies: state.filteredMovies
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.filterMovies(genre));
  }
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
