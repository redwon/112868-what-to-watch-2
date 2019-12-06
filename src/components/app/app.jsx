import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';

import Main from '../main/main';
import Movie from '../movie/movie';
import SignIn from '../sign-in/sign-in';
import AddReview from '../add-review/add-review';

import withPlayerState from '../../hocs/with-player-state/with-player-state';
import withFormReview from '../../hocs/with-form-review/with-form-review';

const MainWrapped = withPlayerState(Main);
const MovieWrapped = withPlayerState(Movie);
const AddReviewWrapped = withFormReview(AddReview);

const App = () => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={(props) => (
          <MainWrapped {...props} />
        )}
      />
      <Route
        path="/login"
        exact
        render={(props) => (
          <SignIn {...props} />
        )}
      />
      <Route
        path="/movie/:id"
        exact
        render={(props) => (
          <MovieWrapped {...props} />
        )}
      />
      <Route
        path="/movie/:id/review"
        exact
        render={(props) => (
          <AddReviewWrapped {...props} />
        )}
      />
    </Switch>
  );
};

const mapStateToProps = (state) => Object.assign({}, {
  isAuthorizationRequired: state.isAuthorizationRequired,
});

export {App};

export default connect(mapStateToProps)(App);
