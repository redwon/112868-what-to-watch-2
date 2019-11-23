import {
  ActionCreator,
  ActionType,
  initialState,
  reducer,
  Operations
} from './user';

import MockAdapter from 'axios-mock-adapter';

import {configureAPI} from '../../api';

const api = configureAPI(() => {});

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

describe(`Operations works correctly`, () => {
  it(`login should make a correct api call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const login = Operations.login();

    apiMock
      .onPost(`/login`)
      .reply(200, {fake: true});

    return login(dispatch, {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOGIN,
          payload: {fake: true}
        });
      });
  });
});
