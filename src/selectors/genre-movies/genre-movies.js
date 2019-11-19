import {createSelector} from 'reselect';
import {GenresType} from '../../types';

const getGenre = (state) => state.genre;
const getMovies = (state) => state.movies;

export const getGenreMovies = createSelector([getGenre, getMovies], (genre, movies) => {
  if (genre === GenresType.ALL_GENRES) {
    return movies;
  }

  return movies.filter((it) => it.genre === genre);
});
