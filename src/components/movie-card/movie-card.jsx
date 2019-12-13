import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {MovieType} from '../../types';
import history from '../../history';

import PreviewPlayer from '../preview-player/preview-player';

const MOUSE_ENTER_DELAY = 1000;

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.timer = null;

    this._handleCardClick = this._handleCardClick.bind(this);
    this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
    this._handleCardMouseLeave = this._handleCardMouseLeave.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  _handleCardClick(evt) {
    evt.preventDefault();
    history.push(`/movie/${this.props.movie.id}`);
  }

  _handleCardMouseEnter() {
    this.timer = setTimeout(() => {
      this.props.onPlayerChangeState(true);
    }, MOUSE_ENTER_DELAY);
  }

  _handleCardMouseLeave() {
    clearTimeout(this.timer);
    this.props.onPlayerChangeState(false);
  }

  render() {
    const {movie, isPlayerPlaying} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this._handleCardMouseEnter}
        onMouseLeave={this._handleCardMouseLeave}
        onClick={this._handleCardClick}
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
            onClick={this._handleCardClick}
          >
            {movie.name}
          </a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movie: MovieType,
  isPlayerPlaying: PropTypes.bool,
  onPlayerChangeState: PropTypes.func,
};

export default MovieCard;
