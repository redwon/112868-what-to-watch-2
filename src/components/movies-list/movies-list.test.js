import React from 'react';
import renderer from 'react-test-renderer';

import MoviesList from './movies-list';

const mockMovieNames = [
  `Movie 1`,
  `Movie 2`
];

it(`renders correctly`, () => {
  const tree = renderer
    .create(<MoviesList
      movieNames={mockMovieNames}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
