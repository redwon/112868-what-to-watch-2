import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {MovieType} from '../../types';

import VideoPlayer from '../video-player/video-player';

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.timer = null;
  }

  mouseEnterHandler(movie) {
    const {onHover} = this.props;

    if (onHover) {
      onHover(movie);
    }

    this.timer = setTimeout(() => {
      this.props.onPlayerChangeState(true);
    }, 1000);
  }

  mouseLeaveHandler() {
    clearTimeout(this.timer);
    this.props.onPlayerChangeState(false);
  }

  render() {
    const {movie, onClick} = this.props;
    const {name, posterImage, previewVideoLink} = movie;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={() => this.mouseEnterHandler(movie)}
        onMouseLeave={() => this.mouseLeaveHandler()}
        onClick={() => onClick(movie)}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            src={previewVideoLink}
            poster={posterImage}
            isMuted={true}
            isPlaying={this.props.isPlayerPlaying}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a
            className="small-movie-card__link"
            href="movie-page.html"
            onClick={(evt) => {
              evt.preventDefault();
              onClick(movie);
            }}
          >
            {name}
          </a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movie: MovieType,
  onClick: PropTypes.func,
  onHover: PropTypes.func,
  isPlayerPlaying: PropTypes.bool,
  onPlayerChangeState: PropTypes.func,
};

export default MovieCard;
