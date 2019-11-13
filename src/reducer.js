import movies from './mocks/movies';

export const initialState = {
  genre: `All Genres`,
  movies,
  filteredMovies: movies
};

export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  FILTER_MOVIES: `FILTER_MOVIES`,
  RESET: `RESET`
};

export const filterMoviesByGenre = (genre, list) => list.filter((it) => it.genre === genre);

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),

  filterMovies: (genre) => {
    if (genre === initialState.genre) {
      return {
        type: ActionType.FILTER_MOVIES,
        payload: initialState.movies
      };
    }

    return {
      type: ActionType.FILTER_MOVIES,
      payload: filterMoviesByGenre(genre, initialState.movies),
    };
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return Object.assign({}, state, {
        genre: action.payload
      });
    case ActionType.FILTER_MOVIES:
      return Object.assign({}, state, {
        filteredMovies: action.payload
      });
    case ActionType.RESET:
      return Object.assign({}, initialState);
  }

  return state;
};
