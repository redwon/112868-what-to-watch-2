import {combineReducers} from 'redux';

import {reducer as genre} from './genre/genre';
import {reducer as movies} from './movies/movies';
import {reducer as isAuthorizationRequired} from './authorization/authorization';

export const reducer = combineReducers({
  genre,
  movies,
  isAuthorizationRequired,
});
