export const initialState = [];

export const ActionType = {
  LOAD_FAVORITES: `LOAD_FAVORITES`,
};

export const ActionCreator = {
  loadFavorites: (favorites) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: favorites
  })
};

export const Operations = {
  loadFavorites: () => (dispatch, _, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.loadFavorites(response.data));
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
