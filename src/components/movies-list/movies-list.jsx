import React from 'react';
import PropTypes from 'prop-types';

import {MovieType} from '../../types';

import MovieCard from '../movie-card/movie-card';

import withPlayerState from '../../hocs/with-player-state/with-player-state';

const MovieCardWrapped = withPlayerState(MovieCard);

const MoviesList = ({movies}) => {
  return (
    <div className="catalog__movies-list">
      {movies.map((it, i) => (
        <MovieCardWrapped
          key={i}
          movie={it}
        />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(MovieType),
  activeIndex: PropTypes.number,
};

export default MoviesList;
