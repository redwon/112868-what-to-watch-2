import React from 'react';
import PropTypes from 'prop-types';

import {MovieType} from '../../types';

import MovieCard from '../movie-card/movie-card';
import withPlayerState from '../../hocs/with-player-state/with-player-state';

const MovieCardWrapped = withPlayerState(MovieCard);

const MoviesList = ({movies, onClickTitle, onChangeActiveIndex}) => {
  const getListItems = () => {
    return movies.map((it, i) => (
      <MovieCardWrapped
        key={i}
        movie={it}
        onClick={onClickTitle}
        onHover={() => onChangeActiveIndex(i)}
      />
    ));
  };

  return (
    <div className="catalog__movies-list">
      {getListItems()}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(MovieType),
  onClickTitle: PropTypes.func,
  activeIndex: PropTypes.number,
  onChangeActiveIndex: PropTypes.func,
};

export default MoviesList;
