import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const withAuth = (Component) => {
  class WithAuth extends PureComponent {
    render() {
      if (!this.props.isAuthorizationRequired) {
        return <Component
          {...this.props}
        />;
      }

      return <Redirect to="/login" />;
    }
  }

  WithAuth.propTypes = {
    isAuthorizationRequired: PropTypes.bool,
  };

  const mapStateToProps = (state, props) => Object.assign({}, props, {
    isAuthorizationRequired: state.isAuthorizationRequired,
  });

  return connect(mapStateToProps)(WithAuth);
};

export default withAuth;
