export const initialState = [];

export const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
};

export const ActionCreator = {
  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: movies
  }),
};

export const Operations = {
  loadMovies: () => (dispatch, _, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadMovies(response.data));
      });
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return action.payload;
  }

  return state;
};
