import React, {PureComponent} from 'react';

const withPlayerState = (Component) => {
  class WithPlayerState extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlayerPlaying: false,
      };

      this._handlePlayerStateChange = this._handlePlayerStateChange.bind(this);
    }

    _handlePlayerStateChange(status) {
      this.setState({isPlayerPlaying: status});
    }

    render() {
      return <Component
        {...this.props}
        isPlayerPlaying={this.state.isPlayerPlaying}
        onPlayerChangeState={this._handlePlayerStateChange}
      />;
    }
  }

  WithPlayerState.propTypes = {};

  return WithPlayerState;
};

export default withPlayerState;
