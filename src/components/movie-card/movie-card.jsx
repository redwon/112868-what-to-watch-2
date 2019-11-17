import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {movieType} from '../../types';

import VideoPlayer from '../video-player/video-player';

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.timer = null;
  }

  mouseEnterHandler(movie) {
    this.props.onHover(movie);

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
    const {name, image, previewVideo} = movie;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={() => this.mouseEnterHandler(movie)}
        onMouseLeave={() => this.mouseLeaveHandler()}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            src={previewVideo}
            poster={image}
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
  movie: movieType,
  onClick: PropTypes.func,
  onHover: PropTypes.func,
  isPlayerPlaying: PropTypes.bool,
  onPlayerChangeState: PropTypes.func,
};

export default MovieCard;
