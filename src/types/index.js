import {shape, string} from 'prop-types';

export const movieType = shape({
  name: string,
  image: string,
  genre: string,
  previewVideo: string,
});
