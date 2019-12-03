import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = React.createRef();

      this.state = {
        isPlaying: true,
        progress: 0,
        endTime: `0:00:00`
      };

      this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
      this._renderVideo = this._renderVideo.bind(this);
      this._onFullScreenHandler = this._onFullScreenHandler.bind(this);
    }

    render() {
      const {isPlaying, progress, endTime} = this.state;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          progress={progress}
          endTime={endTime}
          renderVideo={this._renderVideo}
          onPlayButtonClick={this._onPlayButtonClick}
          onEnableFullScreen={this._onFullScreenHandler}
        />
      );
    }

    componentDidMount() {
      const {src} = this.props;
      const video = this._videoRef.current;

      video.src = src;
      video.play();

      video.ontimeupdate = () => {
        this.setState({
          endTime: this._convertTime(video.duration - video.currentTime),
          progress: video.currentTime / video.duration * 100
        });
      };
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

      if (this.state.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.ontimeupdate = null;
      video.src = ``;
    }

    _onPlayButtonClick() {
      this.setState({isPlaying: !this.state.isPlaying});
    }

    _onFullScreenHandler() {
      const video = this._videoRef.current;
      video.requestFullscreen();
    }

    _renderVideo() {
      return <video
        className="player__video"
        ref={this._videoRef}
      />;
    }

    _convertTime(timeInSeconds) {
      const pad = (num, size) => (`00` + num).slice(size * -1);
      const time = parseFloat(timeInSeconds).toFixed(2);
      const hours = Math.floor(time / 60 / 60);
      const minutes = Math.floor(time / 60) % 60;
      const seconds = Math.floor(time - minutes * 60);

      return hours + `:` + pad(minutes, 2) + `:` + pad(seconds, 2);
    }
  }

  WithVideo.propTypes = {
    src: PropTypes.string.isRequired,
  };

  return WithVideo;
};

export default withVideo;
