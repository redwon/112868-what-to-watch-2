import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';

import Main from '../main/main';
import Movie from '../movie/movie';
import SignIn from '../sign-in/sign-in';

const App = ({isAuthorizationRequired}) => {
  if (isAuthorizationRequired) {
    return <SignIn />;
  }

  return (
    <Switch>
      <Route
        path="/"
        exact
        render={(props) => (
          <Main {...props} />
        )}
      />
      <Route
        path="/movie/:id"
        exact
        render={(props) => (
          <Movie {...props} />
        )}
      />
    </Switch>
  );
};

App.propTypes = {
  isAuthorizationRequired: PropTypes.bool,
};

const mapStateToProps = (state) => Object.assign({}, {
  isAuthorizationRequired: state.isAuthorizationRequired,
});

export {App};

export default connect(mapStateToProps)(App);
