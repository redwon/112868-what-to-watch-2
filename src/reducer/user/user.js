import {ActionCreator as AuthActionCreator} from '../authorization/authorization';

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
  checkLogin: () => (dispatch, _, api) => {
    return api.get(`/login`)
      .then((response) => {
        if (response.status === 200) {
          dispatch(ActionCreator.login(response.data));
          dispatch(AuthActionCreator.requireAuthorization(false));
        }
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
