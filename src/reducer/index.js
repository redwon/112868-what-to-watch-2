import {combineReducers} from 'redux';

import {reducer as genre} from './genre/genre';
import {reducer as movies} from './movies/movies';
import {reducer as isAuthorizationRequired} from './authorization/authorization';
import {reducer as user} from './user/user';
import {reducer as itemsToShow} from './items-to-show/items-to-show';

export const reducer = combineReducers({
  genre,
  movies,
  isAuthorizationRequired,
  user,
  itemsToShow,
});
