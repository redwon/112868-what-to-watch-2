import {
  ActionCreator,
  ActionType,
  initialState,
  reducer,
} from './authorization';

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing authorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(true)).toEqual({
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: true,
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change authorization by a given value`, () => {
    expect(reducer(initialState, {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: true,
    })).toEqual(true);

    expect(reducer(initialState, {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: initialState,
    })).toEqual(initialState);
  });
});
