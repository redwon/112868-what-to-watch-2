import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {MovieType} from '../../types';
import {getGenreMovies} from '../../selectors';
import {ActionCreator} from '../../reducer/items-to-show/items-to-show';

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

const Main = (props) => {
  const {
    movies,
    filteredMovies,
    promoMovie,
    onChangeItemsToShow,
    itemsToShow,
    isPlayerPlaying,
    onPlayerChangeState,
  } = props;

  const handleMoviePlay = () => {
    onPlayerChangeState(true);
  };

  const handlePlayerExit = () => {
    onPlayerChangeState(false);
  };

  if (isPlayerPlaying) {
    return (
      <MoviePlayerWrapped
        src={promoMovie.videoLink}
        movie={promoMovie}
        onExit={handlePlayerExit}
      />
    );
  }

  return (
    <Fragment>
      <section className="movie-card">
        <Header className="movie-card__head" />
        <PromoMovie movie={promoMovie} onPlayMovie={handleMoviePlay} />
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList movies={movies} />
          <MoviesListWrapped movies={filteredMovies} />
          {filteredMovies.length >= itemsToShow && (
            <ShowMore itemsToShow={itemsToShow} onClick={onChangeItemsToShow} />
          )}
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
  onChangeItemsToShow: PropTypes.func.isRequired,
  itemsToShow: PropTypes.number.isRequired,
  isPlayerPlaying: PropTypes.bool,
  onPlayerChangeState: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  movies: state.movies,
  filteredMovies: getGenreMovies(state),
  genre: state.genre,
  promoMovie: state.promoMovie,
  itemsToShow: state.itemsToShow,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeItemsToShow: (count) => {
    dispatch(ActionCreator.itemsToShow(count));
  }
});

export {Main};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
