import {createSelector} from 'reselect';

const getMovies = (state) => state.movies;
const getMovieId = (state, id) => id;

export const getMovieById = createSelector([getMovies, getMovieId], (movies, id) => {
  return movies.find((it) => it.id === parseInt(id, 10));
});
