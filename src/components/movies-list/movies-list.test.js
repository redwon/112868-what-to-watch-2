import React from 'react';
import renderer from 'react-test-renderer';

import MoviesList from './movies-list';

const mockMovies = [
  {
    name: `name`,
    image: `image`
  },
  {
    name: `name`,
    image: `image`
  }
];

it(`renders correctly`, () => {
  const tree = renderer
    .create(<MoviesList
      movies={mockMovies}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
