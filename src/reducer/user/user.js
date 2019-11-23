import {ActionCreator as AuthActionCreator} from '../authorization/authorization';

import {convertObjectKeys} from '../../utils';

export const initialState = null;

export const ActionType = {
  LOGIN: `LOGIN`,
};

export const ActionCreator = {
  login: (user) => ({
    type: ActionType.LOGIN,
    payload: user
  }),
};

export const Operations = {
  login: (email, password) => (dispatch, _, api) => {
    return api.post(`/login`, {email, password})
      .then((response) => {
        const user = convertObjectKeys(response.data);
        dispatch(ActionCreator.login(user));
        dispatch(AuthActionCreator.requireAuthorization(false));
      });
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN:
      return action.payload;
  }

  return state;
};
