import {getRelatedMovies} from './related-movies';

const mockMovies = [
  {
    id: 1,
    name: `movie 1`,
    genre: `Detective`,
  },
  {
    id: 2,
    name: `movie 2`,
    genre: `Comedy`
  },
  {
    id: 3,
    name: `movie 3`,
    genre: `Comedy`
  }
];

describe(`Get related movies works correctly`, () => {
  it(`Should return related movies by a given movie id`, () => {
    const state = {
      movies: mockMovies
    };

    expect(getRelatedMovies(state, 2)).toEqual([
      {
        id: 3,
        name: `movie 3`,
        genre: `Comedy`,
      }
    ]);
  });

  it(`Should return empty array when movies not found`, () => {
    const state = {
      movies: mockMovies
    };

    expect(getRelatedMovies(state, 1)).toEqual([]);
  });

  it(`Should not return more than 4 movies`, () => {
    const mockGenreMovies = [
      {
        id: 4,
        name: `movie 4`,
        genre: `Comedy`
      },
      {
        id: 5,
        name: `movie 5`,
        genre: `Comedy`
      },
      {
        id: 6,
        name: `movie 6`,
        genre: `Comedy`
      },
      {
        id: 7,
        name: `movie 7`,
        genre: `Comedy`
      }
    ];
    const state = {
      movies: [...mockMovies, ...mockGenreMovies]
    };

    expect(getRelatedMovies(state, 2).length).toEqual(4);
  });
});
