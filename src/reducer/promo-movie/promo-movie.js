export const initialState = null;

export const ActionType = {
  LOAD_PROMO_MOVIE: `LOAD_PROMO_MOVIE`,
};

export const ActionCreator = {
  loadPromoMovie: (movie) => ({
    type: ActionType.LOAD_PROMO_MOVIE,
    payload: movie
  }),
};

export const Operations = {
  loadPromoMovie: () => (dispatch, _, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadPromoMovie(response.data));
      });
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PROMO_MOVIE:
      return action.payload;
  }

  return state;
};
