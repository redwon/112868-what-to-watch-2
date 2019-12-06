import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import {MovieType} from '../../types';

import AddMyList from '../add-my-list/add-my-list';

const PromoMovie = ({movie, onPlayMovie}) => {
  if (!movie) {
    return null;
  }

  return (
    <Fragment>
      <div className="movie-card__bg">
        <img src={movie.backgroundImage} alt={movie.name} />
      </div>
      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img
              src={movie.posterImage}
              alt={movie.name}
              width="218"
              height="327"
            />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{movie.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{movie.genre}</span>
              <span className="movie-card__year">{movie.released}</span>
            </p>

            <div className="movie-card__buttons">
              <button
                className="btn btn--play movie-card__button"
                type="button"
                onClick={onPlayMovie}
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>

              <AddMyList movie={movie} type="promo" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

PromoMovie.propTypes = {
  movie: MovieType,
  onPlayMovie: PropTypes.func.isRequired,
};

export default PromoMovie;
