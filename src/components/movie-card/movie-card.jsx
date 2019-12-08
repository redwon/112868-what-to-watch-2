import React from 'react';
import PropTypes from 'prop-types';
import history from '../../history';
import {MovieType} from '../../types';

import PreviewPlayer from '../preview-player/preview-player';

let timer = null;

const MovieCard = (props) => {
  const {
    movie,
    isPlayerPlaying,
    onPlayerChangeState,
  } = props;

  const onClickHandler = () => {
    history.push(`/movie/${movie.id}`);
  };

  const mouseEnterHandler = () => {
    timer = setTimeout(() => {
      onPlayerChangeState(true);
    }, 1000);
  };

  const mouseLeaveHandler = () => {
    clearTimeout(timer);
    onPlayerChangeState(false);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onClick={() => onClickHandler(movie)}
    >
      <div className="small-movie-card__image">
        <PreviewPlayer
          src={movie.previewVideoLink}
          poster={movie.posterImage}
          isMuted={true}
          isPlaying={isPlayerPlaying}
        />
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="#"
          onClick={(evt) => {
            evt.preventDefault();
            onClickHandler(movie);
          }}
        >
          {movie.name}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: MovieType,
  isPlayerPlaying: PropTypes.bool,
  onPlayerChangeState: PropTypes.func,
};

export default MovieCard;
