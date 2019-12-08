import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {MovieType} from '../../types';
import {getRelatedMovies, getMovieById} from '../../selectors';
import {ActionCreator} from '../../reducer/genre/genre';

import Header from '../header/header';
import Footer from '../footer/footer';
import MoviesList from '../movies-list/movies-list';
import MovieTabs from '../movie-tabs/movie-tabs';
import MoviePlayer from '../movie-player/movie-player';
import AddMyList from '../add-my-list/add-my-list';

import withActiveItem from '../../hocs/with-active-item/with-active-item';
import withVideo from '../../hocs/with-video/with-video';

const MoviePlayerWrapped = withVideo(MoviePlayer);
const MovieTabsWrapped = withActiveItem(MovieTabs);

const Movie = (props) => {
  if (!props.movie) {
    return null;
  }

  const {
    movie,
    relatedMovies,
    isPlayerPlaying,
    onPlayerChangeState,
    isAuthorizationRequired,
  } = props;

  const onPlayMovieHandler = () => {
    onPlayerChangeState(true);
  };

  const onExitPlayerHandler = () => {
    onPlayerChangeState(false);
  };

  if (isPlayerPlaying) {
    return (
      <MoviePlayerWrapped
        src={movie.videoLink}
        movie={movie}
        onExit={onExitPlayerHandler}
      />
    );
  }

  return (
    <Fragment>
      <section
        className="movie-card movie-card--full"
        style={{backgroundColor: movie.backgroundColor}}
      >
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={movie.backgroundImage} alt={movie.name} />
          </div>

          <Header className="movie-card__head" />

          <div className="movie-card__wrap">
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
                  onClick={onPlayMovieHandler}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>

                <AddMyList movie={movie} />

                {!isAuthorizationRequired && <Link
                  to={`/movie/${movie.id}/review`}
                  className="btn movie-card__button"
                >
                  Add review
                </Link>}
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
              <MovieTabsWrapped movie={movie} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MoviesList movies={relatedMovies} />
        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

Movie.propTypes = {
  movie: MovieType,
  relatedMovies: PropTypes.arrayOf(MovieType),
  isPlayerPlaying: PropTypes.bool,
  onPlayerChangeState: PropTypes.func,
  isAuthorizationRequired: PropTypes.bool,
  match: PropTypes.object,
};

const mapStateToProps = (state, props) => Object.assign({}, props, {
  movie: getMovieById(state, props.match.params.id),
  relatedMovies: getRelatedMovies(state, props.match.params.id),
  isAuthorizationRequired: state.isAuthorizationRequired
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
  },
});

export {Movie};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
