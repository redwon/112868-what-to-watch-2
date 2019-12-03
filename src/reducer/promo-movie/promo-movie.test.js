import {
  ActionCreator,
  ActionType,
  initialState,
  reducer,
  Operations
} from './promo-movie';

import MockAdapter from 'axios-mock-adapter';

import {configureAPI} from '../../api';

const api = configureAPI(() => {});

describe(`Action creators work correctly`, () => {
  it(`Action creator for load promo movie returns correct action`, () => {
    expect(ActionCreator.loadPromoMovie({movie: `name`})).toEqual({
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: {movie: `name`},
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change promo movie by a given value`, () => {
    expect(reducer(initialState, {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: {movie: `name`},
    })).toEqual({movie: `name`});
  });
});

describe(`Operations works correctly`, () => {
  it(`loadPromoMovie should make a correct api call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoader = Operations.loadPromoMovie();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, {fake: true});

    return moviesLoader(dispatch, {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_MOVIE,
          payload: {fake: true}
        });
      });
  });
});
