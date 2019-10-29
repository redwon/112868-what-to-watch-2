import React from 'react';
import renderer from 'react-test-renderer';

import App from './app';

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
    .create(<App
      currentYear={0}
      movies={mockMovies}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
