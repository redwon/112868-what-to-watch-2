import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class PreviewPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidUpdate() {
    const video = this.videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  render() {
    const {src, poster, isMuted = false} = this.props;
    return (
      <video
        className="player__video"
        src={src}
        poster={poster}
        muted={isMuted}
        ref={this.videoRef}
      ></video>
    );
  }
}

PreviewPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string,
  isPlaying: PropTypes.bool,
  isMuted: PropTypes.bool,
};

export default PreviewPlayer;
