import React from 'react';
import renderer from 'react-test-renderer';

import movies from '../../mocks/movies';

import {GenresList} from './genres-list';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<GenresList
      movies={movies}
      genre="All Genres"
      onGenreChange={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
