import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {MovieType} from '../../types';
import {getGenreMovies} from '../../selectors';
import {ActionCreator} from '../../reducer/genre/genre';
import {ActionCreator as ItemsActionCreator} from '../../reducer/items-to-show/items-to-show';

import Header from '../header/header';
import Footer from '../footer/footer';
import PromoMovie from '../promo-movie/promo-movie';
import GenresList from '../genres-list/genres-list';
import MoviesList from '../movies-list/movies-list';
import ShowMore from '../show-more/show-more';
import MoviePlayer from '../movie-player/movie-player';

import withActiveItem from '../../hocs/with-active-item/with-active-item';
import withVideo from '../../hocs/with-video/with-video';

const MoviePlayerWrapped = withVideo(MoviePlayer);
const MoviesListWrapped = withActiveItem(MoviesList);
const GenresListWrapped = withActiveItem(GenresList);

const Main = (props) => {
  const {
    movies,
    filteredMovies,
    promoMovie,
    onGenreChange,
    onChangeItemsToShow,
    itemsToShow,
    isPlayerPlaying,
    onPlayerChangeState,
    history
  } = props;

  const onClickTitleHandler = (movie) => {
    history.push(`/movie/${movie.id}`);
  };

  const onPlayMovieHandler = () => {
    onPlayerChangeState(true);
  };

  const onExitPlayerHandler = () => {
    onPlayerChangeState(false);
  };

  if (isPlayerPlaying) {
    return (
      <MoviePlayerWrapped
        src={promoMovie.videoLink}
        movie={promoMovie}
        onExit={onExitPlayerHandler}
      />
    );
  }

  return (
    <Fragment>
      <section className="movie-card">
        <h1 className="visually-hidden">WTW</h1>
        <Header />
        <PromoMovie movie={promoMovie} onPlayMovie={onPlayMovieHandler} />
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresListWrapped movies={movies} onChange={onGenreChange} />
          <MoviesListWrapped movies={filteredMovies} onClickTitle={onClickTitleHandler} />
          {(movies.length > itemsToShow) && <ShowMore itemsToShow={itemsToShow} onClick={onChangeItemsToShow} />}
        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

Main.propTypes = {
  movies: PropTypes.arrayOf(MovieType),
  filteredMovies: PropTypes.arrayOf(MovieType),
  promoMovie: MovieType,
  onGenreChange: PropTypes.func.isRequired,
  onChangeItemsToShow: PropTypes.func.isRequired,
  itemsToShow: PropTypes.number.isRequired,
  isPlayerPlaying: PropTypes.bool,
  onPlayerChangeState: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  movies: state.movies,
  filteredMovies: getGenreMovies(state),
  promoMovie: state.promoMovie,
  itemsToShow: state.itemsToShow,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
  },
  onChangeItemsToShow: (count) => {
    dispatch(ItemsActionCreator.itemsToShow(count));
  }
});

export {Main};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
