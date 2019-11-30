import {createSelector} from 'reselect';
import {GenresType} from '../../types';

const getGenre = (state) => state.genre;
const getMovies = (state) => state.movies;
const getItemsToShow = (state) => state.itemsToShow;

const itemsToShow = (movies, count) => {
  if (movies.length < count) {
    return movies;
  }

  return movies.slice(0, count);
};

export const getGenreMovies = createSelector([getGenre, getMovies, getItemsToShow], (genre, movies, count) => {
  if (genre === GenresType.ALL_GENRES) {
    return itemsToShow(movies, count);
  }

  const filteredMovies = movies.filter((it) => it.genre === genre);

  return itemsToShow(filteredMovies, count);
});
