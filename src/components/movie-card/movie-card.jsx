import React from 'react';
import PropTypes from 'prop-types';

import {MovieType} from '../../types';

import PreviewPlayer from '../preview-player/preview-player';

let timer = null;

const MovieCard = (props) => {
  const {
    movie,
    onClick,
    onHover,
    isPlayerPlaying,
    onPlayerChangeState,
  } = props;

  const mouseEnterHandler = () => {
    if (onHover) {
      onHover(movie);
    }

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
      onClick={() => onClick(movie)}
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
            onClick(movie);
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
  onClick: PropTypes.func,
  onHover: PropTypes.func,
  isPlayerPlaying: PropTypes.bool,
  onPlayerChangeState: PropTypes.func,
};

export default MovieCard;
