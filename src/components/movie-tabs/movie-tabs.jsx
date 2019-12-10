import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';

import {MovieType, ReviewType} from '../../types';

class MovieTabs extends PureComponent {
  constructor(props) {
    super(props);

    this.tabs = [`Overview`, `Details`, `Reviews`];
  }

  _getTabContent(index) {
    const {movie, reviews} = this.props;

    switch (index) {
      case 0:
        return (
          <Fragment>
            <div className="movie-rating">
              <div className="movie-rating__score">{movie.rating}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">{MovieTabs.getRatingText(movie.rating)}</span>
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
            {reviews.sort(MovieTabs.sortByDate).map((it, i) => (
              <div key={i} className="review">
                <blockquote className="review__quote">
                  <p className="review__text">{it.comment}</p>

                  <footer className="review__details">
                    <cite className="review__author">{it.user.name}</cite>
                    <time className="review__date" dateTime={it.date}>
                      {MovieTabs.getFormatDate(it.date)}
                    </time>
                  </footer>
                </blockquote>

                <div className="review__rating">{it.rating}</div>
              </div>
            ))}
          </div>
        );
    }

    return null;
  }

  render() {
    const {activeIndex, onChangeActiveIndex} = this.props;

    return (
      <Fragment>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {this.tabs.map((it, i) => (
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

        {this._getTabContent(activeIndex)}
      </Fragment>
    );
  }

  static getRatingText(rating) {
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
  }

  static sortByDate(a, b) {
    return new Date(b.date) - new Date(a.date);
  }

  static getFormatDate(date) {
    return new Date(date).toLocaleDateString(`en-US`, {year: `numeric`, month: `long`, day: `numeric`});
  }
}

MovieTabs.propTypes = {
  movie: MovieType,
  reviews: PropTypes.arrayOf(ReviewType),
  activeIndex: PropTypes.number,
  onChangeActiveIndex: PropTypes.func,
};

export default MovieTabs;
