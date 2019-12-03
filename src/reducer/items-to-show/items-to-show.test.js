import {
  ActionCreator,
  ActionType,
  initialState,
  reducer,
} from './items-to-show';

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing items to show returns correct action`, () => {
    expect(ActionCreator.itemsToShow(0)).toEqual({
      type: ActionType.ITEMS_TO_SHOW,
      payload: 0,
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change items to show by a given value`, () => {
    expect(reducer(initialState, {
      type: ActionType.ITEMS_TO_SHOW,
      payload: 10,
    })).toEqual(10);

    expect(reducer(initialState, {
      type: ActionType.ITEMS_TO_SHOW,
      payload: initialState,
    })).toEqual(initialState);
  });
});
