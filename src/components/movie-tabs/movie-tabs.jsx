import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {MovieType} from '../../types';

const MovieTabs = ({movie, activeIndex, onChangeActiveIndex}) => {
  const tabs = [`Overview`, `Details`, `Reviews`];
  const getRatingText = (rating) => {
    switch (true) {
      case (rating === 10):
        return `Awesome`;
      case (rating < 10 && rating >= 8):
        return `Very Good`;
      case (rating < 8 && rating >= 5):
        return `Good`;
      case (rating < 5 && rating >= 3):
        return `Normal`;
    }

    return `Bad`;
  };
  const getTabContent = (index) => {
    switch (index) {
      case 0:
        return (
          <Fragment>
            <div className="movie-rating">
              <div className="movie-rating__score">{movie.rating}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">{getRatingText(movie.rating)}</span>
                <span className="movie-rating__count">{movie.scoresCount} ratings</span>
              </p>
            </div>

            <div className="movie-card__text">
              {movie.description}
              <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>
              <p className="movie-card__starring"><strong>Starring: {movie.starring}</strong></p>
            </div>
          </Fragment>
        );
      case 1:
        return (
          <div className="movie-card__text movie-card__row">
            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Director</strong>
                <span className="movie-card__details-value">{movie.director}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Starring</strong>
                <span className="movie-card__details-value">{movie.starring}</span>
              </p>
            </div>

            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Run Time</strong>
                <span className="movie-card__details-value">{movie.runTime}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Genre</strong>
                <span className="movie-card__details-value">{movie.genre}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Released</strong>
                <span className="movie-card__details-value">{movie.released}</span>
              </p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="movie-card__reviews movie-card__row">
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">Revies text</p>

                <footer className="review__details">
                  <cite className="review__author">Kate Muir</cite>
                  <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
                </footer>
              </blockquote>

              <div className="review__rating">8,9</div>
            </div>
          </div>
        );
    }

    return null;
  };

  return (
    <Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabs.map((it, i) => (
            <li
              key={i}
              className={`movie-nav__item ${(i === activeIndex) ? `movie-nav__item--active` : ``}`}
            >
              <a
                href="#"
                className="movie-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  onChangeActiveIndex(i);
                }}
              >
                {it}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {getTabContent(activeIndex)}
    </Fragment>
  );
};

MovieTabs.propTypes = {
  movie: MovieType,
  activeIndex: PropTypes.number,
  onChangeActiveIndex: PropTypes.func,
};

export default MovieTabs;
