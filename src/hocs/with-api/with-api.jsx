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

      this._handlePostRequest = this._handlePostRequest.bind(this);
    }

    _handlePostRequest(url, params, onResponse) {
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

    render() {
      return <Component
        {...this.props}
        isLoading={this.state.data}
        error={this.state.error}
        onPost={this._handlePostRequest}
      />;
    }
  }

  WithApi.propTypes = {};

  return WithApi;
};

export default withApi;
