import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main';

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
    .create(<Main
      copyrightYear={0}
      movies={mockMovies}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
