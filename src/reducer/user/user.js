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

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN:
      return action.payload;
  }

  return state;
};
