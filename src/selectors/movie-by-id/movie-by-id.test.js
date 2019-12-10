import {getMovieById} from './movie-by-id';

const mockMovies = [
  {
    id: 1,
    name: `movie 1`
  },
  {
    id: 2,
    name: `movie 2`
  }
];

describe(`Get movie by id works correctly`, () => {
  it(`Should return movie by a given id`, () => {
    const state = {
      movies: mockMovies
    };

    expect(getMovieById(state, 2)).toEqual({
      id: 2,
      name: `movie 2`,
    });
  });

  it(`Should return undefined when movie not found`, () => {
    const state = {
      movies: mockMovies
    };

    expect(getMovieById(state, 3)).toBeUndefined();
  });
});
