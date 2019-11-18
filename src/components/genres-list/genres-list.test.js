import React from 'react';
import renderer from 'react-test-renderer';

import movies from '../../mocks/movies';

import GenresList from './genres-list';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<GenresList
      genre="All Genres"
      movies={movies}
      onChange={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
