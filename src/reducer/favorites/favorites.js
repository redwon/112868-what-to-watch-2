import {convertObjectKeys} from '../../utils';
import {ActionCreator as PromoActionCreator} from '../promo-movie/promo-movie';
import {Operations as MoviesOperations} from '../movies/movies';

export const initialState = [];

export const ActionType = {
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  TOGGLE_FAVORITE: `TOGGLE_FAVORITE`
};

export const ActionCreator = {
  loadFavorites: (favorites) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: favorites
  }),
  toggleFavorite: (state) => ({
    type: ActionType.TOGGLE_FAVORITE,
    payload: state
  }),
};

export const Operations = {
  loadFavorites: () => (dispatch, _, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const favorites = response.data.map(convertObjectKeys);
        dispatch(ActionCreator.loadFavorites(favorites));
      });
  },
  toggleFavorite: (movie, type) => (dispatch, _, api) => {
    const state = movie.isFavorite ? 0 : 1;

    return api.post(`/favorite/${movie.id}/${state}`)
      .then((response) => {
        if (type === `promo`) {
          const data = convertObjectKeys(response.data);
          dispatch(PromoActionCreator.loadPromoMovie(data));
          return;
        }

        dispatch(MoviesOperations.loadMovies());
      });
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FAVORITES:
      return action.payload;
  }

  return state;
};
