import {combineReducers} from 'redux';

import {reducer as genre} from './genre/genre';
import {reducer as movies} from './movies/movies';
import {reducer as promoMovie} from './promo-movie/promo-movie';
import {reducer as isAuthorizationRequired} from './authorization/authorization';
import {reducer as user} from './user/user';
import {reducer as itemsToShow} from './items-to-show/items-to-show';
import {reducer as reviewsReducer} from './reviews/reviews';

export const reducer = combineReducers({
  genre,
  movies,
  promoMovie,
  isAuthorizationRequired,
  user,
  itemsToShow,
  reviewsReducer,
});
