import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {MovieType} from '../../types';
import {getGenreMovies} from '../../selectors';
import {ActionCreator} from '../../reducer/genre/genre';

import Header from '../header/header';
import Footer from '../footer/footer';
import MoviesList from '../movies-list/movies-list';

const Movie = ({movie, filteredMovies, onGenreChange}) => {
  onGenreChange(movie.genre);

  return (
    <Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={movie.backgroundImage} alt={movie.name} />
          </div>

          <Header />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{movie.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{movie.genre}</span>
                <span className="movie-card__year">{movie.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">
                  Add review
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img
                src={movie.posterImage}
                alt={movie.name}
                width="218"
                height="327"
              />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">
                      Overview
                    </a>
                  </li>
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">
                      Details
                    </a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">
                      Reviews
                    </a>
                  </li>
                </ul>
              </nav>

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
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MoviesList movies={filteredMovies} />
        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

Movie.propTypes = {
  movie: MovieType,
  filteredMovies: PropTypes.arrayOf(MovieType),
  onGenreChange: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  filteredMovies: getGenreMovies(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
  }
});

export {Movie};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
