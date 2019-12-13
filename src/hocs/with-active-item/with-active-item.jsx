import React, {PureComponent} from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeIndex: 0,
      };

      this._handleIndexChange = this._handleIndexChange.bind(this);
    }

    _handleIndexChange(index) {
      this.setState({activeIndex: index});
    }

    render() {
      return <Component
        {...this.props}
        activeIndex={this.state.activeIndex}
        onChangeActiveIndex={this._handleIndexChange}
      />;
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;
