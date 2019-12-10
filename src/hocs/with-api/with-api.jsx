import React, {PureComponent} from 'react';
import {configureAPI} from '../../api';
import history from '../../history';

const api = configureAPI(() => history.push(`/login`));

const withApi = (Component) => {
  class WithApi extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isLoading: false,
        error: null,
      };

      this._onPostHandler = this._onPostHandler.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        isLoading={this.state.data}
        error={this.state.error}
        onPost={this._onPostHandler}
      />;
    }

    _onPostHandler(url, params, onResponse) {
      this.setState({isLoading: true});

      api.post(url, params)
        .then((response) => {
          if (typeof onResponse === `function`) {
            onResponse(response.data);
          }

          this.setState({isLoading: false});
        })
        .catch((error) => this.setState({
          error,
          isLoading: false
        }));
    }
  }

  WithApi.propTypes = {};

  return WithApi;
};

export default withApi;
