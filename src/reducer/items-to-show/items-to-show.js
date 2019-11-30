export const initialState = 8;

export const ActionType = {
  ITEMS_TO_SHOW: `ITEMS_TO_SHOW`,
};

export const ActionCreator = {
  itemsToShow: (count) => ({
    type: ActionType.ITEMS_TO_SHOW,
    payload: count,
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ITEMS_TO_SHOW:
      return action.payload;
  }

  return state;
};
