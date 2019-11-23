import {shape, string, number, arrayOf, bool} from 'prop-types';

export const MovieType = shape({
  id: number,
  name: string,
  description: string,
  genre: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: arrayOf(string),
  runTime: number,
  released: number,
  isFavorite: bool,
  posterImage: string,
  previewImage: string,
  backgroundImage: string,
  backgroundColor: string,
  videoLink: string,
  previewVideoLink: string
});

export const GenresType = {
  ALL_GENRES: `All Genres`
};

export const UserType = shape({
  id: number,
  email: string,
  name: string,
  avatarUrl: string,
});
