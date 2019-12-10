import React, {PureComponent} from 'react';

const withPlayerState = (Component) => {
  class WithPlayerState extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlayerPlaying: false,
      };

      this._playerChangeStateHandler = this._playerChangeStateHandler.bind(this);
    }

    _playerChangeStateHandler(state) {
      this.setState({isPlayerPlaying: state});
    }

    render() {
      return <Component
        {...this.props}
        isPlayerPlaying={this.state.isPlayerPlaying}
        onPlayerChangeState={this._playerChangeStateHandler}
      />;
    }
  }

  WithPlayerState.propTypes = {};

  return WithPlayerState;
};

export default withPlayerState;
