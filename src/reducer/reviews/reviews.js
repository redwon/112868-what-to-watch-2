import {convertObjectKeys} from '../../utils';

export const initialState = [];

export const ActionType = {
  LOAD_REVIEWS: `LOAD_REVIEWS`,
};

export const ActionCreator = {
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews
  })
};

export const Operations = {
  loadReviews: (movieId) => (dispatch, _, api) => {
    return api.get(`/comments/${movieId}`)
      .then((response) => {
        const reviews = response.data.map(convertObjectKeys);
        dispatch(ActionCreator.loadReviews(reviews));
      });
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return action.payload;
  }

  return state;
};
