import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {MovieType} from '../../types';
import {getGenreMovies} from '../../selectors';
import {ActionCreator} from '../../reducer/genre/genre';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';

const App = ({genre, movies, filteredMovies, onGenreChange, isAuthorizationRequired}) => {
  if (isAuthorizationRequired) {
    return <SignIn />;
  }

  return (
    <Main
      genre={genre}
      movies={movies}
      filteredMovies={filteredMovies}
      onGenreChange={onGenreChange}
    />
  );
};

App.propTypes = {
  genre: PropTypes.string,
  movies: PropTypes.arrayOf(MovieType),
  filteredMovies: PropTypes.arrayOf(MovieType),
  onGenreChange: PropTypes.func.isRequired,
  isAuthorizationRequired: PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genre: state.genre,
  movies: state.movies,
  filteredMovies: getGenreMovies(state),
  isAuthorizationRequired: state.isAuthorizationRequired,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
  }
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
