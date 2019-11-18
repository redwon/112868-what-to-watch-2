import {
  ActionCreator,
  ActionType,
  initialState,
  filterMoviesByGenre,
  reducer
} from "./reducer";

describe(`Business logic is correct`, () => {
  it(`Filter movies by genre works correctly`, () => {
    expect(filterMoviesByGenre(`correct`, [
      {
        name: `name`,
        image: `image`,
        genre: `correct`,
        previewVideo: `src`,
      },
      {
        name: `name`,
        image: `image`,
        genre: `incorrect`,
        previewVideo: `src`,
      }
    ])).toEqual([
      {
        name: `name`,
        image: `image`,
        genre: `correct`,
        previewVideo: `src`,
      }
    ]);

    expect(filterMoviesByGenre(`correct`, [
      {
        name: `name`,
        image: `image`,
        genre: `incorrect`,
        previewVideo: `src`,
      },
      {
        name: `name`,
        image: `image`,
        genre: `incorrect 2`,
        previewVideo: `src`,
      }
    ])).toEqual([]);
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing genre returns correct action`, () => {
    expect(ActionCreator.changeGenre(`genre`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `genre`,
    });
  });

  it(`Action creator for filtering films should return action with initials movies if genre = All Genres`, () => {
    expect(ActionCreator.filterMovies(`All Genres`)).toEqual({
      type: ActionType.FILTER_MOVIES,
      payload: initialState.movies,
    });
  });

  it(`Action creator for filtering films should return action with filtered movies by genre`, () => {
    expect(ActionCreator.filterMovies(`Comedy`)).toEqual({
      type: ActionType.FILTER_MOVIES,
      payload: [
        {
          name: `Pulp Fiction`,
          image: `img/pulp-fiction.jpg`,
          genre: `Comedy`,
          previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        }
      ],
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
    })).toEqual(Object.assign({}, initialState, {
      genre: `genre`
    }));

    expect(reducer(initialState, {
      type: ActionType.CHANGE_GENRE,
      payload: initialState.genre,
    })).toEqual(initialState);
  });

  it(`Reducer should update filtered movies`, () => {
    const filteredMovies = [{movie: `name`}];

    expect(reducer(initialState, {
      type: ActionType.FILTER_MOVIES,
      payload: filteredMovies,
    })).toEqual(Object.assign({}, initialState, {
      filteredMovies
    }));

    expect(reducer(initialState, {
      type: ActionType.FILTER_MOVIES,
      payload: initialState.filteredMovies,
    })).toEqual(initialState);
  });

  it(`Reducer should correctly reset application state`, () => {
    expect(reducer({
      genre: `genre`,
      movies: [{movie: `name`}],
      filteredMovies: [{movie: `name`}],
    }, {
      type: `RESET`,
    })).toEqual(initialState);
  });
});
