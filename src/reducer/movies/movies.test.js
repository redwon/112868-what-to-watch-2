import {
  ActionCreator,
  ActionType,
  initialState,
  reducer,
  Operations
} from './movies';

import MockAdapter from 'axios-mock-adapter';

import {configureAPI} from '../../api';

const api = configureAPI(() => {});

describe(`Action creators work correctly`, () => {
  it(`Action creator for load movies returns correct action`, () => {
    expect(ActionCreator.loadMovies([{movie: `name`}])).toEqual({
      type: ActionType.LOAD_MOVIES,
      payload: [{movie: `name`}],
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change movies by a given value`, () => {
    expect(reducer(initialState, {
      type: ActionType.LOAD_MOVIES,
      payload: [{movie: `name`}],
    })).toEqual([{movie: `name`}]);
  });
});

describe(`Operations works correctly`, () => {
  it(`loadMovies should make a correct api call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoader = Operations.loadMovies();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return moviesLoader(dispatch, {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIES,
          payload: [{fake: true}]
        });
      });
  });
});
