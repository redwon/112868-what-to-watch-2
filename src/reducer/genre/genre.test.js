import {
  ActionCreator,
  ActionType,
  initialState,
  reducer,
} from './genre';

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing genre returns correct action`, () => {
    expect(ActionCreator.changeGenre(`genre`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `genre`,
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change genre by a given value`, () => {
    expect(reducer(initialState, {
      type: ActionType.CHANGE_GENRE,
      payload: `genre`,
    })).toEqual(`genre`);
  });
});
