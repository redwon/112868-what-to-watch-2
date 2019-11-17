import React, {PureComponent} from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeIndex: 0,
      };

      this._changeIndexHandler = this._changeIndexHandler.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        activeIndex={this.state.activeIndex}
        onChangeActiveIndex={this._changeIndexHandler}
      />;
    }

    _changeIndexHandler(index) {
      this.setState({activeIndex: index});
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;
