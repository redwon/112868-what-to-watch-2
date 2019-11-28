import {createSelector} from 'reselect';

const getMovies = (state) => state.movies;
const getMovie = (state, id) => state.movies.find((it) => it.id === parseInt(id, 10));

export const getRelatedMovies = createSelector([getMovies, getMovie], (movies, movie) => {
  return movies
          .filter((it) => it.genre === movie.genre && it.id !== movie.id)
          .slice(0, 4);
});
