import {GenresType} from '../../types';

export const initialState = GenresType.ALL_GENRES;

export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return action.payload;
  }

  return state;
};
