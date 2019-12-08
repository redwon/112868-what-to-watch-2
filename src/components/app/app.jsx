import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';

import {Operations as MoviesOperations} from '../../reducer/movies/movies';
import {Operations as PromoMovieOperations} from '../../reducer/promo-movie/promo-movie';
import {Operations as FavoritesOperations} from '../../reducer/favorites/favorites';

import Main from '../main/main';
import Movie from '../movie/movie';
import SignIn from '../sign-in/sign-in';
import AddReview from '../add-review/add-review';
import MyList from '../my-list/my-list';

import withPlayerState from '../../hocs/with-player-state/with-player-state';
import withFormReview from '../../hocs/with-form-review/with-form-review';
import withAuth from '../../hocs/with-auth/with-auth';

const MainWrapped = withPlayerState(Main);
const MovieWrapped = withPlayerState(Movie);
const AddReviewWrapped = withAuth(withFormReview(AddReview));
const MyListWrapped = withAuth(MyList);

const App = ({onMainPageLoad, onLoadFavorites}) => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={(props) => {
          onMainPageLoad();
          return <MainWrapped {...props} />;
        }}
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
      <Route
        path="/my-list"
        exact
        render={(props) => {
          onLoadFavorites();
          return <MyListWrapped {...props} />;
        }}
      />
    </Switch>
  );
};

App.propTypes = {
  onMainPageLoad: PropTypes.func,
  onLoadFavorites: PropTypes.func,
};

const mapStateToProps = (state) => Object.assign({}, {
  isAuthorizationRequired: state.isAuthorizationRequired,
});

const mapDispatchToProps = (dispatch) => ({
  onMainPageLoad: () => {
    dispatch(MoviesOperations.loadMovies());
    dispatch(PromoMovieOperations.loadPromoMovie());
  },
  onLoadFavorites: () => {
    dispatch(FavoritesOperations.loadFavorites());
  }
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
