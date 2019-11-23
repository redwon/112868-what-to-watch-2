import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';

import {MovieType} from '../../types';
import {getGenreMovies} from '../../selectors';
import {ActionCreator} from '../../reducer/genre/genre';

import Main from '../main/main';
import Movie from '../movie/movie';
import SignIn from '../sign-in/sign-in';

const App = ({genre, movies, filteredMovies, onGenreChange, isAuthorizationRequired}) => {
  if (isAuthorizationRequired) {
    return <SignIn />;
  }

  return (
    <Switch>
      <Route
        path="/"
        exact
        render={(props) => (
          <Main
            {...props}
            genre={genre}
            movies={movies}
            filteredMovies={filteredMovies}
            onGenreChange={onGenreChange}
          />
        )}
      />
      <Route
        path="/movie/:id"
        exact
        render={(props) => (
          <Movie {...props} />
        )}
      />
    </Switch>
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
