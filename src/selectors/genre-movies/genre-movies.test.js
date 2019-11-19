import {getGenreMovies} from './genre-movies';

const mockMovies = [
  {
    name: `movie 1`,
    genre: `Detective`,
  },
  {
    name: `movie 2`,
    genre: `Comedy`
  }
];

describe(`Filter movies by genre works correctly`, () => {
  it(`Should return filtered movies by a given genre`, () => {
    const state = {
      genre: `Comedy`,
      movies: mockMovies
    };

    expect(getGenreMovies(state)).toEqual([
      {
        name: `movie 2`,
        genre: `Comedy`,
      }
    ]);
  });

  it(`Should return empty array when movies not found`, () => {
    const state = {
      genre: `Incorrect`,
      movies: mockMovies
    };

    expect(getGenreMovies(state)).toEqual([]);
  });

  it(`Should return initial movies when genre = 'All Genres'`, () => {
    const state = {
      genre: `All Genres`,
      movies: mockMovies
    };

    expect(getGenreMovies(state)).toEqual(mockMovies);
  });
});
