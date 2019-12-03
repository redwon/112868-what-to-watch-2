import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import {MovieType} from '../../types';

const MoviePlayer = (props) => {
  const {
    movie,
    isPlaying,
    progress,
    endTime,
    onPlayButtonClick,
    onEnableFullScreen,
    renderVideo,
    onExit,
  } = props;

  return (
    <div className="player">
      {renderVideo()}

      <button
        className="player__exit"
        type="button"
        onClick={onExit}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"></progress>
            <div className="player__toggler" style={{left: progress + `%`}}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">{endTime}</div>
        </div>

        <div className="player__controls-row">
          <button
            className="player__play"
            type="button"
            onClick={onPlayButtonClick}
          >
            {!isPlaying && (<Fragment>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </Fragment>
            )}
            {isPlaying && (<Fragment>
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </Fragment>
            )}
          </button>

          <div className="player__name">{movie.name}</div>

          <button
            className="player__full-screen"
            type="button"
            onClick={onEnableFullScreen}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

MoviePlayer.propTypes = {
  movie: MovieType,
  progress: PropTypes.number,
  isPlaying: PropTypes.bool.isRequired,
  endTime: PropTypes.string,
  onPlayButtonClick: PropTypes.func.isRequired,
  renderVideo: PropTypes.func.isRequired,
  onExit: PropTypes.func,
  onEnableFullScreen: PropTypes.func,
};

export default MoviePlayer;
