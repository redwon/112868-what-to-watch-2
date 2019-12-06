import {
  ActionCreator,
  ActionType,
  initialState,
  reducer,
  Operations
} from './favorites';

import MockAdapter from 'axios-mock-adapter';

import {configureAPI} from '../../api';

const api = configureAPI(() => {});

describe(`Action creators work correctly`, () => {
  it(`Action creator for load favorites returns correct action`, () => {
    expect(ActionCreator.loadFavorites([{favorite: `name`}])).toEqual({
      type: ActionType.LOAD_FAVORITES,
      payload: [{favorite: `name`}],
    });
  });

  it(`Action creator for toggle favorite returns correct action`, () => {
    expect(ActionCreator.toggleFavorite({favorite: `name`})).toEqual({
      type: ActionType.TOGGLE_FAVORITE,
      payload: {favorite: `name`},
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change favorites by a given value`, () => {
    expect(reducer(initialState, {
      type: ActionType.LOAD_FAVORITES,
      payload: [{favorites: `name`}],
    })).toEqual([{favorites: `name`}]);
  });
});

describe(`Operations works correctly`, () => {
  it(`load favorites should make a correct api call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadFavorites = Operations.loadFavorites();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{fake: true}]);

    return loadFavorites(dispatch, {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: [{fake: true}]
        });
      });
  });

  it(`toggle review should make a correct api call to /favorite/:movieId/:state`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const toggleFavorite = Operations.toggleFavorite({id: 1, isFavorite: false}, `promo`);

    apiMock
      .onPost(`/favorite/1/1`)
      .reply(200, {id: 1, isFavorite: true});

    return toggleFavorite(dispatch, {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `LOAD_PROMO_MOVIE`,
          payload: {id: 1, isFavorite: true}
        });
      });
  });
});
