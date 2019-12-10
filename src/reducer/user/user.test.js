import {
  ActionCreator,
  ActionType,
  initialState,
  reducer,
} from './user';

describe(`Action creators work correctly`, () => {
  it(`Action creator for login returns correct action`, () => {
    expect(ActionCreator.login([{user: `name`}])).toEqual({
      type: ActionType.LOGIN,
      payload: [{user: `name`}],
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change user by a given value`, () => {
    expect(reducer(initialState, {
      type: ActionType.LOGIN,
      payload: [{user: `name`}],
    })).toEqual([{user: `name`}]);
  });
});
